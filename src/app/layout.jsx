import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen items-center justify-center bg-purple-100">
        {children}
      </body>
    </html>
  );
}
