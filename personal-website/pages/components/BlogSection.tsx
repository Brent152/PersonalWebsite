import { forwardRef } from "react";
import FadeInElement from "./FadeInElement";


const BlogSection = forwardRef((props, ref: any) => {


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
                <h1 ref={ref} style={{ color: 'black' }}>BLOG</h1>
            </FadeInElement>
        </div >
    )

})

BlogSection.displayName = 'BlogSection'

export default BlogSection