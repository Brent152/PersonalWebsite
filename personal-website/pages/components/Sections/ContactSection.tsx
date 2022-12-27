import { forwardRef } from "react";
import SegmentBreak from "../SegmentBreak";



const ContactSection = forwardRef((props, ref: any) => {


    return (
        <>
            <div className='section'>
                <h1 ref={ref} style={{ color: 'white' }}>CONTACT</h1>
            </div >
            <SegmentBreak />
        </>
    )

})

ContactSection.displayName = 'ContactSection'
export default ContactSection