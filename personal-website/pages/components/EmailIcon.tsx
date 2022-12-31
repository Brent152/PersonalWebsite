

export default function EmailIcon(props: any) {

    return (
        <a href={props.link} target={'_blank'} rel="noreferrer" style={{ ...props.style }}>
            <img src='../../EmailIcon.png' style={{ width: 35 }} />
        </a>
    )
}