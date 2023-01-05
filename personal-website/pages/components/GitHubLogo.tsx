import styles from '../../styles/Icons.module.css'

export default function GitHubLogo(props: any) {

    return (
        <a href={props.link} target={'_blank'} rel="noreferrer" className={props.leftMargin ? styles.leftMargin : ''} style={{ ...props.style }}>
            <img src='../../GitHubLogo.png' className={styles.icon} />
        </a>
    )
}