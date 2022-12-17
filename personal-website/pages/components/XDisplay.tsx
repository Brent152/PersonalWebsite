
import styles from '../../styles/XDisplay.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"


export default function XDisplay(props: any) {


    const displayItemRefs: MutableRefObject<{ [key: string]: any }> = useRef({})
    const [hoveringAny, setHoveringAny] = useState(false)
    const [repeater, setRepeater] = useState(false)
    const [curCycleIndex, setCurCycleIndex] = useState(0)


    const collections = ['Introduction', 'Projects', 'Blog', 'WorkExperience', 'Contact']

    // Cycle Effect, this is a bit scuffed
    useEffect(() => {
        const cycle = async (curCycleIndex: number) => {

            if (hoveringAny) {
                await new Promise(r => setTimeout(r, 1000));
                setRepeater(!repeater)
                return
            }
            // console.log(`index: ${curCycleIndex}`)
            lightCollection(collections[curCycleIndex])
            await new Promise(r => setTimeout(r, 2000));
            dimCollection(collections[curCycleIndex])
            await new Promise(r => setTimeout(r, 1500));
            setRepeater(!repeater)
            if (curCycleIndex === collections.length - 1) {
                setCurCycleIndex(0)
            } else {
                setCurCycleIndex(curCycleIndex += 1)
            }
        }
        cycle(curCycleIndex)

    }, [repeater])


    type displayItem = {
        text: string,
        collection: string
    }

    let data: displayItem[][] = [
        [
            { text: 'What', collection: 'Blog' },
            { text: 'Who', collection: 'Introduction' },
            { text: 'Contact', collection: 'Contact' },
        ],
        [
            { text: 'Where', collection: 'WorkExperience' },
            { text: 'I', collection: 'Blog' },
            { text: 'I', collection: 'Introduction' },
            { text: 'information', collection: 'Contact' },
        ],
        [
            { text: 'What', collection: 'Projects' },
            { text: 'I', collection: 'WorkExperience' },
            { text: 'write', collection: 'Blog' },
            { text: 'I', collection: 'Projects' },
        ],
        [
            { text: 'am', collection: 'Introduction' },
            { text: 'make', collection: 'Projects' },
            { text: 'work', collection: 'WorkExperience' },
        ]
    ]

    return (
        <div className={styles.display}>
            {data.map((row: displayItem[], index1: number) => {
                return <div key={index1} className={styles.displayRow}>
                    {
                        row.map((item: displayItem, index2: number) => {
                            return <div
                                className={styles.displayItem}
                                ref={(element) => displayItemRefs.current[`${item.text}:${item.collection}`] = element}
                                key={index2}
                                onMouseEnter={() => { setHoveringAny(true); mouseEnterCollection(item.collection) }}
                                onMouseLeave={() => { dimCollection(item.collection); setHoveringAny(false) }}
                                onClick={() => { props.handleCollectionClick(item.collection) }}
                            >
                                {item.text}
                            </div>
                        })
                    }
                </div>
            })}

        </div >
    )

    function lightCollection(collection: string) {
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItemLit;
            }
        }
    }

    function dimCollection(collection: string) {
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItem;
            }
        }
    }

    function mouseEnterCollection(collection: string) {
        // Light current and dim all others
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItemLit;
            } else {
                displayItemRefs.current[key].className = styles.displayItem;
            }
        }
    }

}