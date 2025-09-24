import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Unco Smart Shop',
  description: 'Unco Smart Shop',
  openGraph: {
    title: 'Unco Smart Shop',
    description: 'Get your individual on-line shop - perfectly optimized to grow profit and sales.',
    url: 'https://unco.market/',
    images: [
      {
        url: 'https://unco.market/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Unco Smart Shop',
      },
    ],
    type: 'website',
  },
};

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
