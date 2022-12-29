import Line from "./Line";

export default function ListLine(props: any) {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            marginBlock: 30,
        }}>
            <Line style={{}} shownHeight={30} />
            <Line style={{ height: 1, }} shownWidth={1100} hiddenWidth={0} />
            <Line style={{}} shownHeight={30} />
        </div>

    )
}