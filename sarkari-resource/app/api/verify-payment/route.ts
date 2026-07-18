import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { tokenStore } from "@/lib/tokenStore";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment fields" }, { status: 400 });
    }

    // Verify HMAC signature
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // Generate a secure one-time download token (expires in 24h)
    const token = uuidv4();
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    tokenStore.set(token, {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      expiresAt,
      used: false,
    });

    return NextResponse.json({ token });
  } catch (err: any) {
    console.error("verify-payment error:", err);
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}
