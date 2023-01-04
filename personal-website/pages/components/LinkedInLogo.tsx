import styles from '../../styles/Icons.module.css'


export default function LinkedInLogo(props: any) {

    return (
        <a href={props.link} target={'_blank'} rel="noreferrer" style={{ ...props.style }}>
            <img src='../../LinkedInLogo.png' className={styles.icon} />
        </a>
    )
}