import Head from 'next/head';
import { Montserrat } from 'next/font/google';
import HomePage from '@/components/HomePage';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Anton Malkov: Frontend Dev</title>
        <meta name="description" content="Anton Malkov frontend developer cv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={montserrat.className}>
        <HomePage />
      </main>
    </>
  );
}
