import './globals.css';

export const metadata = {
  title: "Rob's Google Clone",
  description: 'Google Clone built with NextJS 13 and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
