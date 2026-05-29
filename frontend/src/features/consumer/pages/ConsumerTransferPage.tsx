import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { DashPageHeader } from '@/shared/components/dashboard/DashPageHeader'
import {
  isWellFormedTransferId,
  lookupDemoRecipient,
  normalizeCridoraTransferId,
} from '@/features/consumer/lib/cridora-user-id'

type Step = 'id' | 'amount' | 'confirm'

export function ConsumerTransferPage() {
  const [step, setStep] = useState<Step>('id')
  const [rawId, setRawId] = useState('')
  const [verifiedName, setVerifiedName] = useState<string | null>(null)
  const [verifyError, setVerifyError] = useState<string | null>(null)
  const [grams, setGrams] = useState('0.5')
  const [note, setNote] = useState('')
  const [ackRecipient, setAckRecipient] = useState(false)
  const [ackAmount, setAckAmount] = useState(false)

  const [doneMessage, setDoneMessage] = useState<string | null>(null)

  const normalized = normalizeCridoraTransferId(rawId)

  function verifyId() {
    setDoneMessage(null)
    setVerifyError(null)
    if (!isWellFormedTransferId(rawId)) {
      setVerifiedName(null)
      setVerifyError('Enter a valid Cridora ID like CR-ABCDE.')
      return
    }
    const demoHit = lookupDemoRecipient(rawId)
    if (demoHit) {
      setVerifiedName(demoHit)
      setStep('amount')
      return
    }
    setVerifiedName('Verified (demo — name hidden until KYC share)')
    setStep('amount')
  }

  function goConfirm(e: FormEvent) {
    e.preventDefault()
    if (!verifiedName || !grams.trim()) return
    setStep('confirm')
  }

  function submitFinal(e: FormEvent) {
    e.preventDefault()
    if (!ackRecipient || !ackAmount) return
    setDoneMessage(`Demo: transfer of ${grams} g to ${normalized} was not sent — wire backend to execute.`)
    setStep('id')
    setRawId('')
    setVerifiedName(null)
    setGrams('0.5')
    setNote('')
    setAckRecipient(false)
    setAckAmount(false)
  }

  return (
    <div className="space-y-6">
      {doneMessage ? (
        <div className="rounded-xl border border-cridora-success/30 bg-cridora-success/10 px-4 py-3 text-sm text-cridora-success">
          {doneMessage}
          <button
            type="button"
            className="ml-3 font-medium text-cridora-gold-light hover:underline"
            onClick={() => setDoneMessage(null)}
          >
            Dismiss
          </button>
        </div>
      ) : null}
      <DashPageHeader
        eyebrow="Transfer"
        title="Send grams to another user"
        description="Every user gets a unique Cridora ID. Verify the recipient, enter grams, then confirm twice so mis-sent transfers are harder in production."
      />

      {step === 'id' ? (
        <div className="ui-card space-y-4 p-6">
          <label className="text-xs font-medium text-cridora-muted">Recipient Cridora ID</label>
          <input
            className="ui-input mt-1 uppercase"
            placeholder="CR-XXXXX"
            value={rawId}
            onChange={(e) => setRawId(e.target.value)}
            autoComplete="off"
          />
          {verifyError ? <p className="text-sm text-cridora-error">{verifyError}</p> : null}
          <p className="text-xs text-cridora-muted">
            Demo directory recognises IDs like <strong className="text-cridora-text">CR-FRIEND</strong>,{' '}
            <strong className="text-cridora-text">CR-SISTER</strong>.
          </p>
          <button type="button" className="ui-btn-primary min-h-12 w-full justify-center text-sm" onClick={verifyId}>
            Verify recipient
          </button>
        </div>
      ) : null}

      {step === 'amount' ? (
        <form className="ui-card space-y-4 p-6" onSubmit={goConfirm}>
          <div className="rounded-xl border border-cridora-success/25 bg-cridora-success/10 p-3 text-sm">
            <p className="font-semibold text-cridora-success">Recipient verified</p>
            <p className="text-cridora-text">
              ID <span className="font-mono">{normalized}</span> — {verifiedName}
            </p>
            <button
              type="button"
              className="mt-2 text-xs font-medium text-cridora-gold-light hover:underline"
              onClick={() => {
                setStep('id')
                setVerifiedName(null)
              }}
            >
              Change recipient
            </button>
          </div>
          <div>
            <label className="text-xs font-medium text-cridora-muted">Grams</label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              className="ui-input mt-1"
              value={grams}
              onChange={(e) => setGrams(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-cridora-muted">Note (optional)</label>
            <input className="ui-input mt-1" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>
          <button type="submit" className="ui-btn-primary min-h-12 w-full justify-center text-sm">
            Review transfer
          </button>
        </form>
      ) : null}

      {step === 'confirm' ? (
        <form className="ui-card space-y-4 p-6" onSubmit={submitFinal}>
          <h2 className="font-display text-lg font-bold text-cridora-text">Double confirmation</h2>
          <p className="text-sm text-cridora-muted">
            You are about to send <strong className="text-cridora-text">{grams} g</strong> to{' '}
            <strong className="text-cridora-text">{verifiedName}</strong> ({normalized}).
          </p>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-cridora-text">
            <input
              type="checkbox"
              checked={ackRecipient}
              onChange={(e) => setAckRecipient(e.target.checked)}
              className="mt-1"
            />
            <span>I confirm this Cridora ID belongs to the person I intend to pay.</span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-cridora-text">
            <input
              type="checkbox"
              checked={ackAmount}
              onChange={(e) => setAckAmount(e.target.checked)}
              className="mt-1"
            />
            <span>I confirm the gram amount and accept any network fees shown at checkout.</span>
          </label>
          <button
            type="submit"
            disabled={!ackRecipient || !ackAmount}
            className="ui-btn-primary min-h-12 w-full justify-center text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirm transfer (demo)
          </button>
          <button
            type="button"
            className="w-full py-2 text-sm text-cridora-muted hover:text-cridora-text"
            onClick={() => setStep('amount')}
          >
            Go back
          </button>
        </form>
      ) : null}

      <Link to="/app/redeem" className="text-sm text-cridora-gold-light hover:underline">
        ← Redeem hub
      </Link>
    </div>
  )
}
