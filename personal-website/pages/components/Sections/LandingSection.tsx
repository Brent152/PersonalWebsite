import XDisplay from "../XDisplay"
import styles from '../../styles/DisplaySection.module.css'
import { useRef, useState, useEffect } from "react"
import Line from "../Line"
import BlinkInElement from "../BlinkInElement"
import SegmentBreak from "../SegmentBreak"
import NavBar from "../NavBar"


export default function LandingSesction(props: any) {

    const [navIsVisible, setNavIsVisible] = useState(false)

    // Move down when nav is visible
    useEffect(() => {
        const pageLoadWait = async () => {
            await new Promise(r => setTimeout(r, 5000))
            setNavIsVisible(true)
        }
        pageLoadWait()
    }, [])


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
            {/* <div className='workInProgress'>- WORK IN PROGRESS -</div> */}
            {/* <NavBar handleMenuItemClick={props.handleMenuItemClick} isVisible={navIsVisible} /> */}
            <div className='section landingSection' ref={landingSectionRef}>
                <SegmentBreak />

                <div>
                    <div className='landingSectionContainer'>


                        {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                            <BlinkInElement className='nameText' speedMs={800} >Brent</BlinkInElement>
                            {viewWidth && viewWidth >= 1024 &&
                                <>
                                    <Line variant='mediumH' style={{ height: 1, marginBlock: '5vh', alignSelf: 'flex-end' }} />
                                    <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                                </>
                            }
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {viewWidth && viewWidth >= 1024 && <Line variant='mediumV' style={{ alignSelf: 'center', marginRight: '2vw' }} />}
                            <BlinkInElement><XDisplay handleCollectionClick={props.handleCollectionClick} /></BlinkInElement>
                            {viewWidth && viewWidth >= 1024 && <Line variant='mediumV' style={{ alignSelf: 'center', marginLeft: '2vw' }} />}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', alignItems: 'center', minWidth: 320 }}>
                            {viewWidth && viewWidth >= 1024 &&
                                <>
                                    <div style={{ lineHeight: '.8em', fontSize: 120, userSelect: 'none' }}>&nbsp;</div>
                                    <Line variant='mediumH' style={{ height: 1, marginBlock: '3vh', alignSelf: 'flex-start' }} />
                                </>
                            }
                            <BlinkInElement className='nameText' speedMs={800} >Julius</BlinkInElement>
                        </div>
                        {/* <Line style={{ alignSelf: 'center' }} shownHeight={50} transitionDelay={600} /> */}
                    </div>
                </div>
                <SegmentBreak />
            </div>
        </>
    )



}