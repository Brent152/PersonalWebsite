import Line from "./Line";

export default function ListLine(props: any) {

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            marginBlock: 30,
        }}>
            <Line variant='xSmallV' />
            <Line variant='largeH' />
            <Line variant='xSmallV' />
        </div>

    )
}