

export default function LinkedInLogo(props: any) {

    return (
        <a href={props.link} target={'_blank'} rel="noreferrer" style={{ ...props.style }}>
            <img src='../../LinkedInLogo.png' style={{ width: 30 }} />
        </a>
    )
}