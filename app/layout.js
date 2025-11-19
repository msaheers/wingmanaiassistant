import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Wingman — AI Marketplace Assistant",
  description: "Generate proposals, chat with clients, and optimize your freelancing workflow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#0e0f12", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
