import XDisplay from "./XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import FadeInElement from "./FadeInElement"
import { SymbolDisplayPartKind } from "typescript"
import NavBar from "./NavBar"



export default function DisplaySection(props: any) {

    const displayRef = useRef(null)

    const [curClass, setCurClass] = useState('bigDimText')

    return (
        <>
            <div style={{
                backgroundColor: 'black',
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column'
            }} ref={displayRef}>
                <NavBar />
                <FadeInElement style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2%' }}>
                    <div className={curClass}
                        onMouseEnter={() => { setCurClass('rotateboy') }}
                        onMouseLeave={() => { setCurClass('bigDimText') }}
                    >TEST</div>
                    <div className='bigDimText' style={{ marginLeft: '7%', fontSize: 140 }}>Brent</div>
                    <div className='bigDimText' style={{ marginRight: '7%', fontSize: 140 }}>Julius</div>
                </FadeInElement>

                <FadeInElement>
                    <XDisplay handleCollectionClick={props.handleCollectionClick} />
                </FadeInElement>
            </div>
        </>
    )



}