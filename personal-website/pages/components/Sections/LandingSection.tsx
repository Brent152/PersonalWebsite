import XDisplay from "../XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { useRef, useState, useEffect } from "react"
import Line from "../Line"
import BlinkInElement from "../BlinkInElement"
import SegmentBreak from "../SegmentBreak"


export default function LandingSesction(props: any) {

    const [viewWidth, setViewWidth] = useState<number | null>(null)

    useEffect(() => {
        const handleResize = () => {
            setViewWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    // const { viewWidth, viewHeight }: { viewWidth: number | null, viewHeight: number | null } = useWindowDimensions();


    const landingSectionRef = useRef<HTMLDivElement>(null)


    return (
        <>
            <div className='workInProgress'>- WORK IN PROGRESS -</div>
            {/* <SlMenu style={{ position: 'absolute', width: 30, height: 30, marginLeft: 25, marginTop: 20, backgroundColor: 'black' }} /> */}
            <div className='section ' ref={landingSectionRef} style={{ minHeight: '100vh', justifyContent: 'space-around' }}>
                <SegmentBreak />

                <div className='landingSectionContainer'>

                    {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <BlinkInElement className='nameText' speedMs={800} >Brent</BlinkInElement>
                        {viewWidth && viewWidth >= 1024 && <Line variant='mediumH' style={{ height: 1, marginBlock: '5vh', alignSelf: 'flex-end' }} />}
                        <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        {viewWidth && viewWidth >= 1024 && <Line variant='mediumV' style={{ alignSelf: 'center', marginRight: '2vw' }} />}
                        <BlinkInElement><XDisplay handleCollectionClick={props.handleCollectionClick} /></BlinkInElement>
                        {viewWidth && viewWidth >= 1024 && <Line variant='mediumV' style={{ alignSelf: 'center', marginLeft: '2vw' }} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                        <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                        {viewWidth && viewWidth >= 1024 && <Line variant='mediumH' style={{ height: 1, marginBlock: '3vh', alignSelf: 'flex-start', overflow: 'hidden' }} />}
                        <BlinkInElement className='nameText' speedMs={800} >Julius</BlinkInElement>
                    </div>
                    {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                </div>
                <SegmentBreak />
            </div>
        </>
    )



}