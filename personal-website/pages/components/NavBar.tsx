import { useEffect, useState } from 'react'
import styles from '../../styles/NavBar.module.css'
import BlinkInElement from './BlinkInElement'


export default function NavBar(props: any) {


    return (
        <>
            {props.isVisible && <div
                className={styles.container}
            >
                <BlinkInElement
                    className={styles.textContainer}
                >
                    <div className={styles.navItem} onClick={() => { props.handleMenuItemClick('Introduction') }}>About Me</div>
                    <div className={styles.navItem} onClick={() => { props.handleMenuItemClick('WorkExperience') }}>Work Experience</div>
                    <div className={styles.navItem} onClick={() => { props.handleMenuItemClick('Projects') }}>Projects</div>
                    <div className={styles.navItem} onClick={() => { props.handleMenuItemClick('Contact') }}>Get In Touch</div>
                </BlinkInElement>
                <div
                    className={styles.lineContainer}
                >
                    <div className={styles.line} />
                </div>
            </div>
            }
            {props.isVisible && <div className={styles.extraSpace} />}
        </>
    )


}