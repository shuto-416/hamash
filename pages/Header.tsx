import React from 'react'
import type { NextPage } from 'next'
import styles from "../styles/Header.module.scss"
import ReactMarkdown from 'react-markdown'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'


const Header :NextPage = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const title = "[hamash[hama-shell]](/)"

    const b = 'red';
    return(
        <div className={styles.header_container}>
            
            <ReactMarkdown className={styles.header_title} children={title} />
            
            <div className={styles.header_menu}>
                <Button aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                size='large'
                color='inherit'
                style={{color: 'red'}}
                >
                    Projects
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <a href='https://yanireview-mk2.vercel.app/' target='_brank'>
                        <MenuItem onClick={handleClose} href='https://yanireview-mk2.vercel.app/'>YaniReview</MenuItem>
                    </a>
                    <MenuItem onClick={handleClose}>MovieClip</MenuItem>
                    <MenuItem onClick={handleClose}>CSS play room</MenuItem>
                    <MenuItem onClick={handleClose}>coming soon...</MenuItem>
                </Menu>
            </div>

        </div>
    )
}

export default Header