import React from 'react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="pt-28 mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-semibold">Privacy Policy</h1>
        <div className="prose prose-invert mt-6 max-w-none">
          <p>This is placeholder privacy policy text. Replace with your actual data handling policies, GDPR/CCPA compliance statements, and contact information.</p>
          <p>We value your privacy. This product integrates with GoHighLevel and does not store unnecessary information outside of the connected account.</p>
          <h3>Data we process</h3>
          <ul>
            <li>Account identification data required for OAuth connectivity with GoHighLevel</li>
            <li>Operational data strictly necessary for POS functionality</li>
          </ul>
          <h3>Contact</h3>
          <p>For questions, please reach out via the contact page.</p>
        </div>
      </div>
    </div>
  )
}
