import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tumi Delivery App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Tumi Delivery App" />
        <p className="description">
          Documentacion de Politica de Privacidad
        </p>
      </main>

      <Footer />
    </div>
  )
}
