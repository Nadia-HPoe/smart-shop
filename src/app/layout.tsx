import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unco Smart Shop',
  description: 'Unco Smart Shop',
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
