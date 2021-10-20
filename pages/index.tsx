import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CodeBlock from './CodeBlock'
import { useEffect, useState } from 'react'

const readMD = (setMarkdown: Function, setIsLoading: Function): void => {
  const postName = "body"
  import(`./${postName}.md`)
      .then(res => {
          fetch(res.default)
              .then(res => res.text())
              .then(res => {
                  setMarkdown(res)
                  setIsLoading(false)
              })
      })
}

const Home: NextPage = () => {

  const [markdown, setMarkdown] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      setTimeout(() => { 
          readMD(setMarkdown, setIsLoading)
      }, 2000);
  }, [])

  if (isLoading) {
    return (
        <h1>Hello</h1>
    )
}
  
  return (
    <div>
      <Head>
        <title>hamash</title>
        <meta name="hamash" content="portfolio of ore" />
      </Head>
      <div className={styles.title}>
        <ReactMarkdown children={markdown} components={{code: CodeBlock}}/>
      </div>
    </div>
  )
}

export default Home
