import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { SlSocialYoutube } from 'react-icons/sl';


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
                    transition: `all ${props.speed ? props.speed : .5}s`,
                    transitionDelay: props.transitionDelay ? props.transitionDelay : '100ms',
                    ...props.style
                } : {
                    transition: `all ${props.speed ? props.speed : .5}s`,
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