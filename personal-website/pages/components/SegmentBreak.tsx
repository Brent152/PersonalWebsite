import { forwardRef } from "react";
import Line from "./Line";


export default function SegmentBreak(props: any) {

    return (
        <div
            className={`${props.className}`}
            style={{
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...props.style
            }}
        >
            <div style={{ display: 'flex', width: '48%', alignItems: 'center' }}>
                <Line variant='fullH' />
                <Line variant='smallV' />
            </div>
            <div style={{ display: 'flex', width: '48%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Line variant='smallV' />
                <Line variant='fullH' />
            </div>

            {/* <Line style={{ position: 'absolute', marginBlock: 50, left: '45%' }} shownHeight={50} /> */}

        </div>
    )
}