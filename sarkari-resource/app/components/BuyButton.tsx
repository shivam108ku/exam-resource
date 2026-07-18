"use client";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function BuyButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRazorpayScript = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) return resolve(true);
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleBuy = async () => {
    setLoading(true);
    setError("");

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error("Failed to load payment gateway.");

      // 1. Create order on backend
      const orderRes = await fetch("/api/create-order", { method: "POST" });
      if (!orderRes.ok) throw new Error("Could not create order. Try again.");
      const { orderId, amount, currency, keyId } = await orderRes.json();

      // 2. Open Razorpay modal
      const options = {
        key: keyId,
        amount,
        currency,
        name: "Exam Resource",
        description: "DSSSB TGT CS — 5000+ PYQ PDF",
        order_id: orderId,
        theme: { color: "#FF6B00" },
        modal: {
          ondismiss: () => setLoading(false),
        },
        handler: async (response: any) => {
          try {
            // 3. Verify payment on backend
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verifyRes.ok) throw new Error("Payment verification failed.");
            const { token } = await verifyRes.json();

            // 4. Redirect to success page with token
            window.location.href = `/success?token=${token}`;
          } catch (e: any) {
            setError(e.message || "Payment failed. Contact support.");
            setLoading(false);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        setError("Payment failed: " + response.error.description);
        setLoading(false);
      });
      rzp.open();
    } catch (e: any) {
      setError(e.message || "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        id="buy-now-btn"
        onClick={handleBuy}
        disabled={loading}
        className="pulse-btn relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-bold text-lg bg-cta-gradient glow-saffron transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ minWidth: 260 }}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Opening Payment…
          </>
        ) : (
          <>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Buy Now — ₹{process.env.NEXT_PUBLIC_PRICE_DISPLAY || "199"}
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 flex items-center gap-1">
        <svg className="h-3 w-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
        Secured by Razorpay · UPI · Cards · Net Banking
      </p>

      {error && (
        <div className="mt-2 px-4 py-2 bg-red-900/40 border border-red-500/40 rounded-xl text-red-300 text-sm text-center max-w-xs">
          {error}
        </div>
      )}
    </div>
  );
}
