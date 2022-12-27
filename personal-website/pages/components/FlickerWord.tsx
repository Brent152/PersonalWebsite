import { MutableRefObject, useEffect, useRef, useState } from "react"


export default function FlickerWord(props: any) {

    const lettersRef: MutableRefObject<[any] | []> = useRef([])
    const [repeater, setRepeater] = useState<boolean>(false)
    const [startCycle, setStartCycle] = useState<boolean>(false)

    // Wait to start cycle on initial page load
    useEffect(() => {
        const pageLoadWait = async () => {
            await new Promise(r => setTimeout(r, 1500))
            setStartCycle(true)
            setRepeater(!repeater)
        }
        pageLoadWait()
    }, [])

    // Cycle Effect, this is a bit scuffed
    useEffect(() => {
        const cycle = async () => {
            if (!startCycle) { return }
            if (Math.floor(Math.random() * props.word.length) === 5) {
                console.log('test')
            }
            console.log(Math.floor(Math.random() * props.word.length) === 5)
            await new Promise(r => setTimeout(r, 200))
            setRepeater(!repeater)
        }

    }, [repeater])


    return (
        <div style={{ display: 'flex' }}>
            {props.word.split('').map((letter: string, index: number) => {
                return <div
                    ref={(element) => lettersRef.current.push(element)}
                    key={index}
                    style={{
                        transition: 'color .8s, text-shadow .8s, -webkit-text-stroke-color .8s',
                        fontSize: 120,
                        lineHeight: '.8em',
                        color: 'rgb(255, 255, 255)',
                        WebkitTextStrokeWidth: 2,
                        WebkitTextStrokeColor: 'rgb(255, 255, 255)',
                        textShadow: '0px 0px 10px rgb(255, 255, 255)',
                        cursor: 'default',
                        userSelect: 'none',
                    }}>
                    {letter}

                </div>
            })}
        </div>

    )
}