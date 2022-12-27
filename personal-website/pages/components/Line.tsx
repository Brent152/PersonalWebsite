
import { useRef, useState, useEffect, MutableRefObject } from 'react'

export default function Line(props: any) {

    const lineRef: MutableRefObject<any> = useRef(null);
    const [isVisible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(lineRef.current);
    }, []);


    return (
        <div
            ref={lineRef}
            style={
                isVisible ? {
                    backgroundColor: 'white',
                    width: props.shownWidth ? props.shownWidth : 1,
                    height: props.shownHeight ? props.shownHeight : 100,
                    transition: 'all 1s',
                    transitionDelay: props.transitionDelay ? props.transitionDelay : '100ms',
                    ...props.style
                } : {
                    backgroundColor: 'white',
                    width: props.hiddenWidth ? props.hiddenWidth : 1,
                    height: props.hiddenHeight ? props.hiddenHeight : 0,
                    transition: 'all 1s',
                    transitionDelay: '100ms',
                    ...props.style
                }
            }
        >
        </div>
    )

}