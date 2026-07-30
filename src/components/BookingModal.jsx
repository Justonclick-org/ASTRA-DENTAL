import { useEffect, useState } from 'react'
import { FaTimes, FaWhatsapp, FaClipboardList, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import { useBooking } from '../context/BookingContext'
import AppointmentForm from './AppointmentForm'
import { siteConfig } from '../constants/siteConfig'

const METHODS = [
  {
    id: 'whatsapp',
    icon: FaWhatsapp,
    label: 'WhatsApp',
    color: '#1a7c3e',
    bg: '#f0fdf4',
    border: '#86efac',
    desc: 'Fill your details — WhatsApp opens pre-filled. We confirm within 2 hours.',
  },
  {
    id: 'google',
    icon: FaClipboardList,
    label: 'Google Form',
    color: '#1d4ed8',
    bg: '#eff6ff',
    border: '#93c5fd',
    desc: 'Structured form — your response goes directly to our team inbox.',
  },
]

const STEP_TITLES = {
  choose: 'Book Your Appointment',
  whatsapp: 'Book via WhatsApp',
  google: 'Book via Google Form',
}

function ModalHeader({ step, onBack, onClose }) {
  return (
    <div className="modal-header">
      <div className="modal-header-left">
        {step !== 'choose' && (
          <button type="button" className="modal-back-btn" onClick={onBack} aria-label="Go back">
            <FaArrowLeft />
            <span>Back</span>
          </button>
        )}
        <div>
          {step === 'choose' && <p className="eyebrow">Astra Dental Clinic</p>}
          <h2 className="modal-title">{STEP_TITLES[step]}</h2>
        </div>
      </div>
      <button type="button" className="modal-close" onClick={onClose} aria-label="Close booking modal">
        <FaTimes />
      </button>
    </div>
  )
}

function ChooseStep({ onSelect }) {
  return (
    <div className="modal-body modal-choose-body">
      <p className="modal-choose-hint">How would you like to book your appointment?</p>
      <div className="modal-method-grid">
        {METHODS.map(({ id, icon: Icon, label, color, bg, border, desc }) => (
          <button
            key={id}
            type="button"
            className="modal-method-card"
            style={{ '--mc-color': color, '--mc-bg': bg, '--mc-border': border }}
            onClick={() => onSelect(id)}
          >
            <span className="mmc-icon-wrap"><Icon /></span>
            <strong className="mmc-label">{label}</strong>
            <p className="mmc-desc">{desc}</p>
            <span className="mmc-cta">Select →</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function GoogleStep({ onClose }) {
  if (siteConfig.googleFormUrl) {
    return (
      <div className="modal-body">
        <div className="modal-gf-open">
          <p className="modal-gf-msg">
            Click the button below to open the booking form in a new tab. Fill your details and
            submit — our team confirms within 2 hours.
          </p>
          <a
            href={siteConfig.googleFormUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary modal-gf-btn"
            onClick={onClose}
          >
            <FaExternalLinkAlt style={{ marginRight: 8 }} />
            Open Booking Form
          </a>
          <p className="modal-gf-note">Opens in a new tab · Response goes to our team directly</p>
        </div>
        {siteConfig.googleFormEmbedUrl && (
          <iframe
            src={siteConfig.googleFormEmbedUrl}
            className="google-form-frame modal-gf-frame"
            title="Book Appointment — Google Form"
            frameBorder="0"
          >
            Loading…
          </iframe>
        )}
      </div>
    )
  }

  return (
    <div className="modal-body modal-gf-setup">
      <div className="gf-setup-icon">📋</div>
      <h3>Google Form coming soon</h3>
      <p>
        This booking option will be available shortly. Please go back and use WhatsApp booking
        — it is fast and we confirm within 2 hours.
      </p>
      <p className="modal-gf-setup-note">
        <strong>Admin:</strong> paste your Google Form link into <code>googleFormUrl</code> in{' '}
        <code>src/constants/siteConfig.js</code> and redeploy.
      </p>
    </div>
  )
}

function BookingModal() {
  const { isOpen, closeBooking } = useBooking()
  const [step, setStep] = useState('choose')

  useEffect(() => { if (isOpen) setStep('choose') }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // ESC key handled here (globalThis instead of window per S7764)
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeBooking() }
    globalThis.addEventListener('keydown', onKey)
    return () => globalThis.removeEventListener('keydown', onKey)
  }, [isOpen, closeBooking])

  if (!isOpen) return null

  return (
    /*
      Overlay is a plain positioning container — no role, no click handler.
      Click-outside is handled by the transparent backdrop <button> below,
      which is a proper interactive element (fixes S6847 / S1082).
    */
    <div className="modal-overlay">
      {/* Transparent backdrop button — click outside to close */}
      <button
        type="button"
        className="modal-backdrop-btn"
        onClick={closeBooking}
        aria-label="Close booking modal"
      />

      {/* <dialog> is the semantic modal element (fixes S6819) */}
      <dialog className="modal-card" open aria-label="Book Appointment">
        <ModalHeader step={step} onBack={() => setStep('choose')} onClose={closeBooking} />

        {step === 'choose' && <ChooseStep onSelect={setStep} />}
        {step === 'whatsapp' && (
          <div className="modal-body">
            <AppointmentForm onSuccess={closeBooking} />
          </div>
        )}
        {step === 'google' && <GoogleStep onClose={closeBooking} />}
      </dialog>
    </div>
  )
}

export default BookingModal
