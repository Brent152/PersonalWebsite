import { forwardRef } from "react";
import SegmentBreak from "../SegmentBreak";


const BlogSection = forwardRef((props, ref: any) => {


    return (
        <>
            <div className='section'>
                <h1 ref={ref} style={{ color: 'white' }}>BLOG</h1>
            </div >
            <SegmentBreak />
        </>
    )

})

BlogSection.displayName = 'BlogSection'

export default BlogSection