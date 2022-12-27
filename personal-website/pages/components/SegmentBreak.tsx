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
            }}
        >
            <div style={{ display: 'flex', width: '48%', alignItems: 'center' }}>
                <Line style={{ height: 1 }} shownWidth={'100%'} hiddenWidth={0} />
                <Line shownHeight={60} speed={2} />
            </div>
            <div style={{ display: 'flex', width: '48%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Line shownHeight={60} speed={2} />
                <Line style={{ height: 1 }} shownWidth={'100%'} hiddenWidth={0} />
            </div>

            {/* <Line style={{ position: 'absolute', marginBlock: 50, left: '45%' }} shownHeight={50} /> */}

        </div>
    )
}