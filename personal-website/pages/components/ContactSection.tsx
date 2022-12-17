import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";



const ContactSection = forwardRef((props, ref: any) => {


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
                <h1 ref={ref} style={{ color: 'black' }}>CONTACT</h1>
            </FadeInElement>
        </div >
    )

})

export default ContactSection