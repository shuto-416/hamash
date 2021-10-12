import React from 'react'
import type { NextPage } from 'next'
import styles from "../styles/Header.module.scss"
import Link from "next/link"

const Header :NextPage = () => {

    return(
        <div className={styles.header_container}>
            <div className={styles.header_title}>
				<Link href="/">
					hamash(hama-shell)
				</Link>
            </div>
        </div>
    )
}

export default Header