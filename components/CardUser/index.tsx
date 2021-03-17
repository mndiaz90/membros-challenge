import styles from '../../styles/components/CardUser.module.css'

interface CardUserProps {
    login: string,
    urlAvatar: string,
    setDadosUser: Function,
    setModalUserDetail: Function,
}

const CardUser: React.FC<CardUserProps> = (props) => {
    function onClickUser() {
        fetch(`https://api.github.com/users/${props.login}`)
            .then(response => response.json())
            .then(data => {
                props.setDadosUser(data);
                props.setModalUserDetail(true);
            });
    }
    return (
        <li className={styles.rowGridMember} onClick={onClickUser}>
            <img className={styles.imgProfile} src={props.urlAvatar} alt="avatar" />
            <p>{props.login}</p>
        </li>
    )
}

export default CardUser