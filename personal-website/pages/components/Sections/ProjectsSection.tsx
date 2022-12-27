import { forwardRef } from "react";
import SegmentBreak from "../SegmentBreak";


const ProjectsSection = forwardRef((props, ref: any) => {

    return (
        <>
            <div className='section'>
                <h1 ref={ref} style={{ color: 'white' }}>PROJECTS</h1>
            </div >
            <SegmentBreak />
        </>
    )

})

ProjectsSection.displayName = 'ProjectsSection'
export default ProjectsSection