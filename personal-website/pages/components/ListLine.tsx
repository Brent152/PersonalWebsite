import Line from "./Line";

export default function ListLine(props: any) {

    return (
        <div className='listLine'>
            <Line variant='xSmallV' />
            <Line variant='largeH' />
            <Line variant='xSmallV' />
        </div>

    )
}