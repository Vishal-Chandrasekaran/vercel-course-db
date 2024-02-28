//You are styling the globally or all HTML elements throughout application
import '@/app/ui/global.css';
//Importing a custom font from google
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased is a tailwind class for smotthing fonts */}
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
