import { forwardRef, MutableRefObject } from 'react'
import styles from '../../styles/IntroSection.module.css'
import FadeInElement from './FadeInElement'


const IntroSection = forwardRef((props, ref: any) => {

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
                <h1 ref={ref} style={{ color: 'black' }}>BRENT JULIUS</h1>
            </FadeInElement>
        </div >
    )

})

export default IntroSection