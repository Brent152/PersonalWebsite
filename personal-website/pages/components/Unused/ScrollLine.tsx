
import React, { useRef, useEffect } from 'react'



export default function ScrollLine(props: any) {

    const pathRef = useRef<SVGPathElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    let pathLength: number | undefined

    useEffect(() => {
        pathLength = pathRef.current?.getTotalLength()
        if (pathRef.current && pathLength && containerRef.current) {
            pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`
            pathRef.current.style.strokeDashoffset = `${pathLength}`
        }

        window.addEventListener('scroll', () => {
            if (pathRef.current && pathLength) {
                // Calculate scroll Percentage
                var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
                // Length to offset dashes
                var drawLength = pathLength * scrollPercentage
                // Draw in reverse
                pathRef.current.style.strokeDashoffset = `${pathLength - drawLength}`
            }
        })

    }, []);


    return (
        <div
            ref={containerRef}
            style={{
                position: 'absolute',
                width: '100%',
                overflow: 'show',
                pointerEvents: 'none'
            }}
        >

            <svg viewBox={props.viewBox} fill="none" preserveAspectRatio="xMidYMax meet">
                <path ref={pathRef} d={props.path} stroke="white" strokeWidth="4" />
            </svg>

        </div >
    )

}
