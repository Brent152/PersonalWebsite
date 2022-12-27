import { forwardRef, MutableRefObject } from 'react'
import styles from '../../styles/IntroSection.module.css'
import FadeInElement from './FadeInElement'


const IntroSection = forwardRef((props, ref: any) => {

    return (
        <div className='section'>
            <FadeInElement>
                <h1 ref={ref} style={{ color: 'white' }}>ABOUT ME</h1>
            </FadeInElement>
        </div >
    )

})

IntroSection.displayName = 'IntroSection'
export default IntroSection