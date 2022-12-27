import { forwardRef } from "react";
import SegmentBreak from "../SegmentBreak";



const WorkExperienceSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div className='section'>
                <h1 ref={ref} style={{ color: 'white' }}>WORK EXPERIENCE</h1>
            </div >
            <SegmentBreak />
        </>
    )

})

WorkExperienceSection.displayName = 'WorkExperienceSection'
export default WorkExperienceSection