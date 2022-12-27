import XDisplay from "./XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import FadeInElement from "./FadeInElement"
import { SymbolDisplayPartKind } from "typescript"
import { SlMenu } from "react-icons/sl";
import Line from "./Line"
import BlinkInElement from "./BlinkInElement"
import FlickerWord from "./FlickerWord"


export default function LandingSection(props: any) {

    const landingSectionRef = useRef<HTMLDivElement>(null)


    return (
        <>
            <div className='section' ref={landingSectionRef}>

                <SlMenu style={{ width: 30, height: 30, marginLeft: 25, marginTop: 20 }} />

                <div style={{ position: 'absolute', fontSize: 40, color: 'white', textAlign: 'center', width: '100%' }}>- WORK IN PROGRESS -</div>


                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80 }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <BlinkInElement speed={.8}><FlickerWord word='Brent' /></BlinkInElement>
                        <Line style={{ height: 1, marginBlock: 50, alignSelf: 'flex-end' }} shownWidth={400} hiddenWidth={0} />
                        <div className='bigDimText'>&nbsp;</div>
                    </div>

                    <Line style={{ alignSelf: 'center', marginRight: 30 }} shownHeight={400} />
                    <BlinkInElement><XDisplay handleCollectionClick={props.handleCollectionClick} /></BlinkInElement>
                    <Line style={{ alignSelf: 'center', marginLeft: 30 }} shownHeight={400} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <div className='bigDimText'>&nbsp;</div>
                        <Line style={{ height: 1, marginBlock: 30, alignSelf: 'flex-start', overflow: 'hidden' }} shownWidth={400} hiddenWidth={0} />
                        <BlinkInElement className='bigDimText' speed={.8}>Julius</BlinkInElement>
                    </div>
                </div>



            </div>
        </>
    )



}