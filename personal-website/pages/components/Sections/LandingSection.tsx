import XDisplay from "../XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"
import { SymbolDisplayPartKind } from "typescript"
import { SlMenu } from "react-icons/sl";
import Line from "../Line"
import BlinkInElement from "../BlinkInElement"
import FlickerWord from "../Unused/FlickerWord"
import SegmentBreak from "../SegmentBreak"


export default function LandingSection(props: any) {

    const landingSectionRef = useRef<HTMLDivElement>(null)


    return (
        <>
            <div style={{ position: 'absolute', fontSize: 40, color: 'white', textAlign: 'right', width: '100%', right: 100 }}>- WORK IN PROGRESS -</div>
            {/* <SlMenu style={{ position: 'absolute', width: 30, height: 30, marginLeft: 25, marginTop: 20, backgroundColor: 'black' }} /> */}
            <div className='section ' ref={landingSectionRef} style={{ minHeight: '100vh', justifyContent: 'space-around' }}>

                <SegmentBreak />

                <div className='' style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 30 }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <BlinkInElement className='nameText' speed={.8} >Brent</BlinkInElement>
                        <Line style={{ height: 1, marginBlock: 50, alignSelf: 'flex-end' }} shownWidth={400} hiddenWidth={0} />
                        <div style={{ lineHeight: '.8em', fontSize: 120 }}>&nbsp;</div>
                    </div>

                    <Line style={{ alignSelf: 'center', marginRight: 30 }} shownHeight={400} />
                    <BlinkInElement><XDisplay handleCollectionClick={props.handleCollectionClick} /></BlinkInElement>
                    <Line style={{ alignSelf: 'center', marginLeft: 30 }} shownHeight={400} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <div style={{ lineHeight: '.8em', fontSize: 120 }}>&nbsp;</div>
                        <Line style={{ height: 1, marginBlock: 30, alignSelf: 'flex-start', overflow: 'hidden' }} shownWidth={400} hiddenWidth={0} />
                        <BlinkInElement className='nameText' speed={.8} >Julius</BlinkInElement>
                    </div>
                </div>
                <SegmentBreak />
            </div>
        </>
    )



}