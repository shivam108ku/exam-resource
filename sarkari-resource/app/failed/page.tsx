export default function FailedPage() {
  return (
    <main className="min-h-screen bg-hero flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center text-5xl">
          ❌
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          Payment Failed
        </h1>
        <p className="text-slate-400 mb-8 text-lg leading-relaxed">
          Your payment could not be processed. No money has been deducted.
          <br />Please try again.
        </p>

        <div className="space-y-4">
          <a
            id="retry-btn"
            href="/#buy"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cta-gradient text-white font-bold text-lg hover:scale-105 transition-all duration-300 glow-saffron"
          >
            ↩ Try Again
          </a>

          <p className="text-slate-500 text-sm flex flex-col items-center gap-1">
            <span>Need help with payment?</span>
            <a href="https://wa.me/919355225925" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-bold hover:underline flex items-center gap-1">
              💬 WhatsApp Support: +91 9355225925
            </a>
          </p>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-2 text-slate-500 text-sm">
          <div className="w-5 h-5 rounded-md bg-cta-gradient flex items-center justify-center text-xs font-black text-white">E</div>
          <span>Exam Resource</span>
        </div>
      </div>
    </main>
  );
}
