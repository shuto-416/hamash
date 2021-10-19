import React from 'react'
import type { NextPage } from 'next'
import styles from "../styles/Header.module.scss"
import ReactMarkdown from 'react-markdown'

const Header :NextPage = () => {

    const title = "[hamash[hama-shell]](/)"
    return(
        <div className={styles.header_container}>
            <div className={styles.header_title}>
                <ReactMarkdown children={title} />
            </div>
        </div>
    )
}

export default Header