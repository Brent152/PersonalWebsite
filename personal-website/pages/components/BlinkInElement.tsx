import { MutableRefObject, useEffect, useRef, useState } from 'react';


export default function BlinkInElement(props: any) {
    const [isVisible, setVisible] = useState(false);
    const domRef: MutableRefObject<any> = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);

    return (
        <div
            className={`${props.className}`}
            style={
                isVisible ? {
                    transition: `all ${props.speedMs ? props.speedMs : 500}ms`,
                    transitionDelay: props.transitionDelay ? props.transitionDelay : '100ms',
                    ...props.style
                } : {
                    transition: `all ${props.speedMs ? props.speedMs : 500}ms`,
                    transitionDelay: props.transitionDelay ? props.transitionDelay : '100ms',
                    transform: `${props.style ? props.style.transform : ''} scaleY(0)`,
                    ...props.style,
                }
            }
            ref={domRef}
        >
            {props.children}
        </div >
    );
}