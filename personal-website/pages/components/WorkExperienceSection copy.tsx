import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";



const WorkExperienceSection = forwardRef((props, ref: any) => {

    return (
        <div className='section'>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'white' }}>WORK EXPERIENCE</h1>
            </FadeInElement>
        </div >
    )

})

WorkExperienceSection.displayName = 'WorkExperienceSection'
export default WorkExperienceSection