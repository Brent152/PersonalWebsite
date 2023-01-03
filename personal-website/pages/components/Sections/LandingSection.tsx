import XDisplay from "../XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { useRef } from "react"
import Line from "../Line"
import BlinkInElement from "../BlinkInElement"
import SegmentBreak from "../SegmentBreak"


export default function LandingSection(props: any) {

    const landingSectionRef = useRef<HTMLDivElement>(null)


    return (
        <>
            <div className='workInProgress'>- WORK IN PROGRESS -</div>
            {/* <SlMenu style={{ position: 'absolute', width: 30, height: 30, marginLeft: 25, marginTop: 20, backgroundColor: 'black' }} /> */}
            <div className='section ' ref={landingSectionRef} style={{ minHeight: '100vh', justifyContent: 'space-around' }}>
                <SegmentBreak />

                <div className='' style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 30 }}>

                    {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <BlinkInElement className='nameText' speedMs={800} >Brent</BlinkInElement>
                        <Line variant='mediumH' style={{ height: 1, marginBlock: 50, alignSelf: 'flex-end' }} />
                        <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                    </div>

                    <Line variant='mediumV' style={{ alignSelf: 'center', marginRight: 50 }} />
                    <BlinkInElement><XDisplay handleCollectionClick={props.handleCollectionClick} /></BlinkInElement>
                    <Line variant='mediumV' style={{ alignSelf: 'center', marginLeft: 50 }} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                        <Line variant='mediumH' style={{ height: 1, marginBlock: 35, alignSelf: 'flex-start', overflow: 'hidden' }} />
                        <BlinkInElement className='nameText' speedMs={800} >Julius</BlinkInElement>
                    </div>
                    {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                </div>
                <SegmentBreak />
            </div>
        </>
    )



}