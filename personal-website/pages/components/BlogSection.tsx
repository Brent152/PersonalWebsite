import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";


const BlogSection = forwardRef((props, ref: any) => {


    return (
        <div className='section'>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'white' }}>BLOG</h1>
            </FadeInElement>
        </div >
    )

})

BlogSection.displayName = 'BlogSection'

export default BlogSection