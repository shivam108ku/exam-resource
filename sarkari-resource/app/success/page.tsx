"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const token = params.get("token");

  return (
    <main className="min-h-screen bg-hero flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center text-5xl animate-bounce">
          ✅
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
          Thank you for purchasing the <strong className="text-white">DSSSB TGT CS PYQ PDF</strong>.
          <br />Click below to download your PDF instantly.
        </p>

        {token ? (
          <div className="space-y-4">
            <a
              id="download-btn"
              href={`/api/download?token=${token}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cta-gradient text-white font-bold text-lg glow-saffron hover:scale-105 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF Now
            </a>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-4 text-sm text-amber-300">
              ⚠️ <strong>Important:</strong> This link is valid for <strong>24 hours</strong> and works for <strong>one download only</strong>.
              Save the PDF to your device immediately.
            </div>
          </div>
        ) : (
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-4 text-red-300">
            Invalid download link. Please contact{" "}
            <a href="https://wa.me/919355225925" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline font-bold">
              WhatsApp Support: +91 9355225925
            </a>
          </div>
        )}

        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <div className="w-5 h-5 rounded-md bg-cta-gradient flex items-center justify-center text-xs font-black text-white">E</div>
          <span>Exam Resource</span>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-hero flex items-center justify-center text-white">Loading…</div>}>
      <SuccessContent />
    </Suspense>
  );
}
