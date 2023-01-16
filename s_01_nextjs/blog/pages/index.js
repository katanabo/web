import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const subtitle = 'expression'
  return (
    <>
      <header>HEADER</header>

      <main>
        <div>
          <h1>BLOG</h1>
          <p>Next.jsの勉強</p>
        </div>
      </main>

      <footer>FOOTER</footer>
    </>
  )
}
