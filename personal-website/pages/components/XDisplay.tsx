
import styles from '../../styles/XDisplay.module.css'
import { MutableRefObject, useEffect, useRef, useState } from "react"

type displayItem = {
    text: string,
    collection: string
}

const inputData: { [key: string]: any }[] =
    [
        {
            "Blog": "What",
            "Random:1": "X",
            "Introduction": "",
            "Projects": "",
            "Random:2": "n",
            "WorkExperience": "",
            "Contact": "Get",
        },
        {
            "Random:1": "j",
            "WorkExperience": "Where",
            "Projects": "",
            "Blog": "I",
            "Random:2": "q",
            "Introduction": "",
            "Random:3": "s",
            "Contact": "",
        },
        {
            "Introduction": "",
            "Projects": "Personal",
            "Blog": "",
            "Random:1": "k",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "Projects": "",
            "Contact": "In",
            "Random:1": "z",
            "Blog": "",
            "WorkExperience": "I",
            "Introduction": "About",
        },
        {
            "Random:1": "o",
            "Introduction": "",
            "Projects": "Projects",
            "Blog": "",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "Random:1": "d",
            "Projects": "",
            "Introduction": "Me",
            "Blog": "Write",
            "Random:2": "c",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "Projects": "",
            "Random:1": "",
            "Introduction": "",
            "Blog": "",
            "WorkExperience": "Work",
            "Random:2": "",
            "Contact": "Touch",
        },
    ]


const data: displayItem[][] = parseData(inputData)

export default function XDisplay(props: any) {


    const displayItemRefs: MutableRefObject<{ [key: string]: any }> = useRef({})
    const [hoveringAny, setHoveringAny] = useState<boolean>(false)
    const [repeater, setRepeater] = useState<boolean>(false)
    const [startCycle, setStartCycle] = useState<boolean>(false)
    const [curCycleIndex, setCurCycleIndex] = useState<number>(0)

    const collections = ['Introduction', 'Projects', 'WorkExperience', 'Blog', 'Contact']

    // Wait to start cycle on initial page load
    useEffect(() => {
        const pageLoadWait = async () => {
            await new Promise(r => setTimeout(r, 3000))
            setStartCycle(true)
            setRepeater(!repeater)
        }
        pageLoadWait()
    }, [])

    // Cycle Effect, this is a bit scuffed
    useEffect(() => {
        const cycle = async (curCycleIndex: number) => {
            if (!startCycle) { return }
            if (hoveringAny) {
                await new Promise(r => setTimeout(r, 1000))
                setRepeater(!repeater)
                return
            }
            lightCollection(collections[curCycleIndex], displayItemRefs)
            await new Promise(r => setTimeout(r, 1500))
            dimCollection(collections[curCycleIndex], displayItemRefs)
            await new Promise(r => setTimeout(r, 600))
            if (curCycleIndex === collections.length - 1) {
                setCurCycleIndex(0)
            } else {
                setCurCycleIndex(curCycleIndex + 1)
            }
            setRepeater(!repeater)
        }
        cycle(curCycleIndex)

    }, [repeater])


    return (
        <div className={styles.display}>
            {data.map((row: displayItem[], index1: number) => {
                return <div key={index1} className={styles.displayRow}>
                    {
                        row.map((item: displayItem, index2: number) => {
                            return <div
                                className={styles.displayItem}
                                ref={(element) => displayItemRefs.current[`${item.text}-${index1}-${index2}:${item.collection}`] = element}
                                key={index2}
                                onMouseEnter={() => { setHoveringAny(true); mouseEnterCollection(item.collection, displayItemRefs) }}
                                onMouseLeave={() => { dimCollection(item.collection, displayItemRefs); setHoveringAny(false) }}
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


}

function lightCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>) {
    for (const key of Object.keys(displayItemRefs.current)) {
        if (key.split(':')[1] === collection) {
            displayItemRefs.current[key].className = styles.displayItemLit;
        }
    }
}

function dimCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>) {
    for (const key of Object.keys(displayItemRefs.current)) {
        if (key.split(':')[1] === collection) {
            displayItemRefs.current[key].className = styles.displayItem;
        }
    }
}

function mouseEnterCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>) {
    // Light current and dim all others
    if (collection.split(':')[0] !== 'Random') {
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItemLit;
            } else {
                displayItemRefs.current[key].className = styles.displayItem;
            }
        }
    }
}

function parseData(inputData: { [key: string]: any }[]): displayItem[][] {
    let result: displayItem[][] = []

    for (const row of inputData) {
        let curRow = []
        for (const collection of Object.keys(row)) {
            for (const letter of row[collection]) {
                if (letter != ' ' && letter !== '')
                    curRow.push({ "text": letter.toUpperCase(), "collection": collection })
            }
        }
        result.push(curRow)
    }


    return result;
}