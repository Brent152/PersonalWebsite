import { forwardRef, MutableRefObject } from 'react'
import BlinkInElement from '../BlinkInElement'
import Line from '../Line'
import SegmentBreak from '../SegmentBreak'


const IntroSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div ref={ref} className='section'>
                <div
                    className={` `}
                    style={{
                        display: 'flex',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginBottom: 80,
                        marginTop: 50
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                        <Line style={{ height: 1, marginBlock: 30 }} shownWidth={400} hiddenWidth={0} />
                        <Line style={{ height: 1, marginBlock: 30 }} shownWidth={400} hiddenWidth={0} />
                    </div>

                    <Line style={{ marginRight: 30 }} shownHeight={400} />

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <BlinkInElement className='headerText mb15' speed={.8} >About Me</BlinkInElement>
                        <BlinkInElement className='paragraphText'>
                            <p style={{ maxWidth: 600, lineHeight: '2rem' }}>
                                Hey!
                                <br />
                                {`I'm Brent, a versatile software engineer fueled by a passion for building cool things.
                                I was born and raised in Arizona, and will be graduating from ASU with a degree in Computer Science in May.
                                I believe that this world is a puzzle, and we as humans possess the tools not only to find, but
                                to create the pieces. I believe that every path to a better planet is derived from a deep
                                understanding not just of the latest technologies and sciences, but also of one another.`}
                            </p>
                        </BlinkInElement>
                    </div>
                    <Line style={{ marginLeft: 30 }} shownHeight={400} />

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Line style={{ height: 1, marginBlock: 30 }} shownWidth={400} hiddenWidth={0} />
                        <Line style={{ height: 1, marginBlock: 30 }} shownWidth={400} hiddenWidth={0} />
                    </div>
                </div>
            </div >
            <SegmentBreak />
        </>
    )

})

IntroSection.displayName = 'IntroSection'
export default IntroSection