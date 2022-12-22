import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";


const ProjectsSection = forwardRef((props, ref: any) => {


    return (
        <div style={{
            backgroundColor: 'white',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'black' }}>PROJECTS</h1>
            </FadeInElement>
        </div >
    )

})

ProjectsSection.displayName = 'ProjectsSection'
export default ProjectsSection