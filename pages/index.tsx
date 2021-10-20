import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import CodeBlock from './CodeBlock'
import { useEffect, useState } from 'react'
import fs from 'fs'

// const readMD = (setMarkdown: Function, setIsLoading: Function): void => {
//   const postName = "body"
//   import(`./${postName}.md`)
//       .then(res => {
//           fetch(res.default)
//               .then(res => res.text())
//               .then(res => {
//                   setMarkdown(res)
//                   setIsLoading(false)
//               })
//       })
// }

type InitialProps = {
  markdown: string;
};

const Home: NextPage<InitialProps> = props => {

  // const [markdown, setMarkdown] = useState<string>('')
  //   const [isLoading, setIsLoading] = useState<boolean>(true)

  //   useEffect(() => {
  //     setTimeout(() => { 
  //         readMD(setMarkdown, setIsLoading)
  //     }, 2000);
  // }, [])

  // if (isLoading) {
  //   return (
  //       <h1>Hello</h1>
  //   )
  // }
  
  return (
    <div>
      <Head>
        <title>hamash</title>
        <meta name="hamash" content="portfolio of ore" />
      </Head>
      <div className={styles.title}>
        <ReactMarkdown children={props.markdown} components={{code: CodeBlock}}/>
      </div>
    </div>
  )
}

export default Home

Home.getInitialProps = async () => {
  const md = fs.readFileSync("./body.md")
  return {markdown: md.toString()}
}