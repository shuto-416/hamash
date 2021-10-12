import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hamash</title>
        <meta name="hamash" content="portfolio of ore" />
      </Head>
      <div className={styles.title}>
        <h1>Hello</h1>
      </div>
    </div>
  )
}

export default Home
