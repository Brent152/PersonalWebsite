import { forwardRef } from "react";
import SegmentBreak from "../SegmentBreak";



const ContactSection = forwardRef((props, ref: any) => {


    return (
        <>
            <div ref={ref} className='section'>
                <h1 style={{ color: 'white' }}>CONTACT</h1>
            </div >
            <SegmentBreak />
            <div style={{ height: 60, backgroundColor: 'black' }}>

            </div>
        </>
    )

})

ContactSection.displayName = 'ContactSection'
export default ContactSection