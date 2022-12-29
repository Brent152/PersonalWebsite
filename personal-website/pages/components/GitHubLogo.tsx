

export default function GitHubLogo(props: any) {

    return (
        <a href={props.link} target={'_blank'}>
            <img src='../../GitHubLogo.png' style={{ width: 30, height: 30 }} />
        </a>
    )
}