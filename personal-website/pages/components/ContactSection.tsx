import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";



const ContactSection = forwardRef((props, ref: any) => {


    return (
        <div className='section'>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'white' }}>CONTACT</h1>
            </FadeInElement>

        </div >
    )

})

ContactSection.displayName = 'ContactSection'
export default ContactSection