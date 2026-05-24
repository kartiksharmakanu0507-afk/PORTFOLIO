import "./globals.css";

export const metadata = {
  title: "Kartik Portfolio",
  description: "Frontend Developer & Startup Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
