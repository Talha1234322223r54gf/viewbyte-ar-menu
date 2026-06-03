import "./globals.css";

export const metadata = {
  title: "AR Menu",
  description: "Web-based augmented reality restaurant menu system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}