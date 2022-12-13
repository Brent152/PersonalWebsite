
import XDisplayItem from "./XDisplayItem"
import styles from '../../styles/XDisplay.module.css'
import { MutableRefObject, useRef } from "react"


export default function () {


    const displayItemRefs: MutableRefObject<{ [key: string]: any }> = useRef({})

    type displayItem = {
        text: string,
        collection: string
    }

    let collections: string[] = ['Introduction', 'Projects', 'Blog', 'WorkExperience', 'Contact']

    let data: displayItem[][] = [
        [
            { text: 'Who', collection: 'Introduction' },
            { text: 'What', collection: 'Projects' },
            { text: 'Where', collection: 'WorkExperience' },
        ],
        [
            { text: 'What', collection: 'Blog' },
            { text: 'I', collection: 'Introduction' },
            { text: 'How', collection: 'Contact' },
            { text: 'I', collection: 'Projects' },
        ],
        [
            { text: 'I', collection: 'Blog' },
            { text: 'to', collection: 'Contact' },
            { text: 'have', collection: 'Projects' },
            { text: 'I', collection: 'WorkExperience' },
            { text: 'have', collection: 'Blog' },
        ],
        [
            { text: 'am', collection: 'Introduction' },
            { text: 'made', collection: 'Projects' },
            { text: 'contact', collection: 'Contact' },
            { text: 'have', collection: 'WorkExperience' },
        ],
        [
            { text: 'written', collection: 'Blog' },
            { text: 'worked', collection: 'WorkExperience' },
            { text: 'me', collection: 'Contact' },
        ],
    ]

    return (
        <div className={styles.display}>
            {data.map((row: displayItem[], index1: number) => {
                return <div key={index1} style={{ display: 'flex' }}>
                    {
                        row.map((item: displayItem, index2: number) => {
                            return <div
                                ref={(element) => displayItemRefs.current[`${item.text}:${item.collection}`] = element}
                                key={index2}
                                onMouseEnter={() => mouseEnterCollection(item.collection)}
                                onMouseLeave={() => mouseLeaveCollection(item.collection)}
                                className={styles.displayItem}>
                                {item.text}
                            </div>
                        })
                    }
                </div>
            })}

        </div>
    )

    function mouseEnterCollection(collection: string) {
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItemHovering;
            }
        }
    }
    function mouseLeaveCollection(collection: string) {
        for (const key of Object.keys(displayItemRefs.current)) {
            if (key.split(':')[1] === collection) {
                displayItemRefs.current[key].className = styles.displayItem;
            }
        }
    }

}