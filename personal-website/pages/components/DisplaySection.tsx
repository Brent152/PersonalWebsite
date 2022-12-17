import XDisplay from "./XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { MutableRefObject, useEffect, useRef } from "react"
import FadeInElement from "./FadeInElement"



export default function DisplaySection(props: any) {

    const displayRef = useRef(null)

    return (
        <div style={{
            backgroundColor: 'black',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className={styles.fadeIn} ref={displayRef}>
                <FadeInElement>
                    <XDisplay handleCollectionClick={props.handleCollectionClick} />
                </FadeInElement>
            </div>
        </div>
    )



}