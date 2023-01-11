
import { useState } from 'react'
import styles from '../../styles/NavMenu.module.css'
import BlinkInElement from './BlinkInElement'

export default function NavMenu(props: any) {

    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div
            className={isExpanded ? styles.sectionExpanded : styles.sectionCollapsed}
            onClick={() => {
                setIsExpanded(!isExpanded)
            }}
        >
            <div className={isExpanded ? styles.menuLineExpanded : styles.menuLine} />
            <div className={isExpanded ? styles.hidden : styles.menuLine} />

            <div className={isExpanded ? styles.expanded : styles.hidden}>
                <div className={styles.menuItem} onClick={() => { props.handleMenuItemClick('Introduction') }}>Introduction</div>
                <div className={styles.menuItem} onClick={() => { props.handleMenuItemClick('WorkExperience') }}>Work Experience</div>
                <div className={styles.menuItem} onClick={() => { props.handleMenuItemClick('Projects') }}>Projects</div>
                <div className={styles.menuItem} onClick={() => { props.handleMenuItemClick('Blog') }}>Blog</div>
                <div className={styles.menuItem} onClick={() => { props.handleMenuItemClick('Contact') }}>Contact Information</div>


            </div>




            <div className={isExpanded ? styles.menuLineExpanded : styles.menuLine} />

        </div>
    )
}
