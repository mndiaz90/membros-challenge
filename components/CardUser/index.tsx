import styles from '../../styles/components/CardUser.module.css'

interface CardUserProps {
    login: string,
    urlAvatar: string
}

const CardUser: React.FC<CardUserProps> = (props) => {
    return (
        <li className={styles.rowGridMember}>
            <img className={styles.imgProfile} src={props.urlAvatar} alt="avatar" />
            <p>{props.login}</p>
        </li>
    )
}

export default CardUser