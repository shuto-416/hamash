import fs from 'fs'
import { NextPage, GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CodeBlock from './CodeBlock'

type StaticProps = {
  terms: string
}

const Home: NextPage<StaticProps> = props => {
  const { terms } = { ...props }
  return (
    <div>
      <Head>
        <title>hamash</title>
        <meta name="hamash" content="portfolio of ore" />
      </Head>
      <div className={styles.title}>
        <ReactMarkdown children={terms} components={{code:CodeBlock}}></ReactMarkdown>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const terms = fs.readFileSync(process.cwd() + '/pages/body.md', 'utf8')
  return {
    props: {
      terms: terms,
    }
  }
}

export default Home