import { MutableRefObject, useEffect, useRef, useState } from "react"
import styles from '../../../styles/FlickerWord.module.css'

const lit: object = {
    transition: 'color .8s, text-shadow .8s, -webkit-text-stroke-color .8s',
    fontSize: 120,
    lineHeight: '.8em',
    color: 'rgb(255, 255, 255)',
    WebkitTextStrokeWidth: 2,
    WebkitTextStrokeColor: 'rgb(255, 255, 255)',
    textShadow: '0px 0px 10px rgb(255, 255, 255)',
    cursor: 'default',
    userSelect: 'none',
}

const dim = {
    ...lit,
    WebkitTextStrokeWidth: 2,
    WebkitTextStrokeColor: 'rgb(0, 0, 0)',
    textShadow: '0px 0px 0px rgb(255, 255, 255)',
}

export default function FlickerWord(props: any) {

    const lettersRef: MutableRefObject<any> = useRef([])
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
            const num = Math.floor(Math.random() * props.word.length)
            if (num < props.word.length) {
                lettersRef.current[num].className = styles.flicker
                await new Promise(r => setTimeout(r, 3000))
                lettersRef.current[num].className = styles.normal
            }
            await new Promise(r => setTimeout(r, 1000))
            setRepeater(!repeater)
        }
        cycle()

    }, [repeater])


    return (
        <div style={{ display: 'flex' }} className=''>
            {props.word.split('').map((letter: string, index: number) => {
                return <div
                    ref={(element) => lettersRef.current.push(element)}
                    key={index}
                    className={styles.normal}
                >
                    {letter}

                </div>
            })}
        </div>

    )
}