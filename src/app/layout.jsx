import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="items-center justify-center bg-purple-100">
        {children}
      </body>
    </html>
  );
}
