
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
            "None:1": "X",
            "Introduction": "",
            "Projects": "",
            "None:2": "n",
            "WorkExperience": "",
            "Contact": "Get",
        },
        {
            "None:1": "j",
            "WorkExperience": "Where",
            "Projects": "",
            "Blog": "I",
            "None:2": "q",
            "Introduction": "",
            "None:3": "s",
            "Contact": "",
        },
        {
            "Introduction": "",
            "Projects": "Personal",
            "Blog": "",
            "None:1": "k",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "Projects": "",
            "Contact": "In",
            "None:1": "z",
            "Blog": "",
            "WorkExperience": "I",
            "Introduction": "About",
        },
        {
            "None:1": "o",
            "Introduction": "",
            "Projects": "Projects",
            "Blog": "",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "None:1": "d",
            "Projects": "",
            "Introduction": "Me",
            "Blog": "Write",
            "None:2": "c",
            "WorkExperience": "",
            "Contact": "",
        },
        {
            "Projects": "",
            "None:1": "",
            "Introduction": "",
            "Blog": "",
            "WorkExperience": "Work",
            "None:2": "",
            "Contact": "Touch",
        },
    ]

const data: displayItem[][] = parseData(inputData)

export default function XDisplay(props: any) {

    const displayItemRefs: MutableRefObject<{ [key: string]: any }> = useRef({})
    const [currentlyHovering, setCurrentlyHovering] = useState<string>('')
    const [repeater, setRepeater] = useState<boolean>(false)
    const [startCycle, setStartCycle] = useState<boolean>(false)
    const [curCycleIndex, setCurCycleIndex] = useState<number>(0)

    const collections = ['Introduction', 'Projects', 'WorkExperience', 'Blog', 'Contact']

    const currentlyHoveringRef = useRef(currentlyHovering)
    currentlyHoveringRef.current = currentlyHovering;

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
            if (currentlyHovering !== 'None') {
                await new Promise(r => setTimeout(r, 1000))
                setRepeater(!repeater)
                return
            }
            lightCollection(collections[curCycleIndex], displayItemRefs, currentlyHoveringRef)
            await new Promise(r => setTimeout(r, 2000))
            dimCollection(collections[curCycleIndex], displayItemRefs, currentlyHoveringRef)
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
                                onMouseEnter={() => { setCurrentlyHovering(item.collection); mouseEnterCollection(item.collection, displayItemRefs) }}
                                onMouseLeave={() => {
                                    const dim = async () => {
                                        await new Promise(r => setTimeout(r, 300))
                                        dimCollection(item.collection, displayItemRefs, currentlyHoveringRef)
                                    }
                                    dim()
                                    setCurrentlyHovering('None')
                                }}
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

async function lightCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>, currentlyHoveringRef: MutableRefObject<string>) {
    for (const key of Object.keys(displayItemRefs.current)) {
        if (key.split(':')[1] === collection) {
            await new Promise(r => setTimeout(r, 80))
            if (currentlyHoveringRef.current.split(':')[0] !== 'None') { return }
            displayItemRefs.current[key].className = styles.displayItemLit;
        }
    }
}

async function dimCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>, currentlyHoveringRef: MutableRefObject<string>) {
    for (const key of Object.keys(displayItemRefs.current)) {
        if (key.split(':')[1] === collection) {
            await new Promise(r => setTimeout(r, 80))
            if (currentlyHoveringRef.current.split(':')[0] !== 'None') { return }
            displayItemRefs.current[key].className = styles.displayItem;
        }
    }
}

async function mouseEnterCollection(collection: string, displayItemRefs: MutableRefObject<{ [key: string]: any }>) {
    // Light current and dim all others
    if (collection.split(':')[0] !== 'None') {
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