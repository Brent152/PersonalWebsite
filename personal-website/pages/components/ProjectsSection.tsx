import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";


const ProjectsSection = forwardRef((props, ref: any) => {


    return (
        <div className='section'>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'white' }}>PROJECTS</h1>
            </FadeInElement>
        </div >
    )

})

ProjectsSection.displayName = 'ProjectsSection'
export default ProjectsSection