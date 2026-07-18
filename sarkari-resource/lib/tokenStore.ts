// In-memory token store
// On Vercel: tokens persist as long as the server instance is alive (usually several hours)
// For production: replace with Redis or a DB like Supabase

interface TokenEntry {
  orderId: string;
  paymentId: string;
  expiresAt: number;
  used: boolean;
}

export const tokenStore = new Map<string, TokenEntry>();
