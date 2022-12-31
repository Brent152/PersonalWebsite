

export default function GitHubLogo(props: any) {

    return (
        <a href={props.link} target={'_blank'} rel="noreferrer" style={{ ...props.style }}>
            <img src='../../GitHubLogo.png' style={{ width: 30 }} />
        </a>
    )
}