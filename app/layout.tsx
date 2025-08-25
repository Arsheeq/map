// DO NOT add "use client" here unless you truly need it.
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amplify Env Test",
  description: "Minimal Next.js app to test NEXT_PUBLIC_* on Amplify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

