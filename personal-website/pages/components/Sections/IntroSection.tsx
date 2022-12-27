import { forwardRef, MutableRefObject } from 'react'
import SegmentBreak from '../SegmentBreak'


const IntroSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div className='section'>
                <h1 ref={ref} style={{ color: 'white' }}>ABOUT ME</h1>
            </div >
            <SegmentBreak />
        </>
    )

})

IntroSection.displayName = 'IntroSection'
export default IntroSection