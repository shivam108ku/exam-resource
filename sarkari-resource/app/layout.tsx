import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSSSB TGT CS PYQ — 5000+ Questions | Exam Resource",
  description:
    "Crack DSSSB TGT Computer Science 2026 with 5000+ Previous Year Questions. Covers full syllabus: Python, Networking, DBMS, OS, HTML & Pedagogy. Download after payment.",
  keywords:
    "DSSSB TGT Computer Science, PYQ, Previous Year Questions, DSSSB 2026, Computer Science Teacher Delhi",
  openGraph: {
    title: "DSSSB TGT CS PYQ — 5000+ Questions | Exam Resource",
    description:
      "Crack DSSSB TGT Computer Science with 5000+ PYQs. Instant download after payment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
