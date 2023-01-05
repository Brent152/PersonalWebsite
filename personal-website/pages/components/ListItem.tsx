import BlinkInElement from "./BlinkInElement";
import GitHubLogo from "./GitHubLogo";

export default function ListItem(props: any) {
    return (
        <BlinkInElement>
            <div style={{ display: 'flex' }}>
                <div className='smallHeaderText'>{props.title}</div>
                {props.gitHubLink && <GitHubLogo link={props.gitHubLink} leftMargin={true} />}
            </div>
            <div className='smallSubheaderText'>
                {props.subtitle}
            </div>
            <div className='paragraphText'>
                {props.text}
            </div>

        </BlinkInElement>
    )

}