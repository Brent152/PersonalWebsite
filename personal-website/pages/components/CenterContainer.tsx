import Line from "./Line";


export default function CenterContainer(props: any) {

    return (
        <div
            className={`${props.className} `}
            style={{
                display: 'flex',
                alignSelf: 'center',
                alignItems: 'center',
                marginBottom: 30
            }}
        >
            <Line style={{ height: 1, marginBlock: 30, overflow: 'hidden' }} shownWidth={400} hiddenWidth={0} />
            <Line style={{ marginRight: 30 }} shownHeight={props.lineHeight ? props.lineHeight : 300} />
            <Line style={{ marginLeft: 30 }} shownHeight={props.lineHeight ? props.lineHeight : 300} />
            <Line style={{ height: 1, marginBlock: 50 }} shownWidth={400} hiddenWidth={0} />
        </div>
    )
}