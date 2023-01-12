import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming" />
      </Head>

      <h1>Welcome to NextJs tutorial</h1>
    </div>
  )
}
