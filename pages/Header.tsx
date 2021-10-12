import type { NextPage } from 'next'
import styles from "../styles/Header.module.scss"
import Link from "next/link"
import ReactMarkdown from 'react-markdown';

const Header :NextPage = () => {

    const title1 = "[**hama**](/)"; // [title](url) aタグ扱い
    const title2 = "[**sh**](/)";
    const title3 = " [**(hama-**](/)";
    const title4 = "[**shell**](/)";
    const title5 = "**)**"

    return(
        <div className={styles.header_container}>
            <div className={styles.header_title}>
                <ReactMarkdown children={title1} />
                <ReactMarkdown className={styles.title} children={title2}/>
                <ReactMarkdown children={title3}/>
                <ReactMarkdown className={styles.title} children={title4}/>
                <ReactMarkdown children={title5}/>
            </div>
        </div>
    )
}

export default Header