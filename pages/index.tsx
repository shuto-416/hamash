import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { useEffect, useState } from 'react'

import { md } from "body.md"

// const readMD = (setMarkdown: Function, setIsLoading: Function): void => {
//   const postName = 'body'
//   import(`./${postName}.md`)
// //   .then(res => {
// //     fetch(res.default)
// //         .then(res => {
// //           res.text()
// //         })
// //         .then(res => {
// //             setMarkdown(res)
// //             setIsLoading(false)
// //         })
// // })
// }

const Home: NextPage = props => {

  const [markdown, setMarkdown] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   readMD(setMarkdown, setIsLoading)
  // }, [])


  return (
    <div>
      <Head>
        <title>hamash</title>
        <meta name="hamash" content="portfolio of ore" />
      </Head>
      <div className={styles.title}>
        <ReactMarkdown children={md} />
      </div>
    </div>
  )
}

export default Home