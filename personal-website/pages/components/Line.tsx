
import { useRef, useState, useEffect, MutableRefObject } from 'react'
import styles from '../../styles/Line.module.css'

export default function Line(props: any) {

    const lineRef: MutableRefObject<any> = useRef(null);
    const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(lineRef.current);
    }, []);

    console.log(styles[props.variant])

    return (
        <div
            ref={lineRef}
            className={`${styles.line} ${isVisible ? styles[props.variant] : styles[`${props.variant}--hidden`]}`}
            style={{
                ...props.style
            }}
        >
        </div>
    )

}