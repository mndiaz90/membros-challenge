import { useState } from 'react';
import styles from '../../styles/components/CardUser.module.css'
import ModalUserDetail from '../ModalUserDetail';

interface CardUserProps {
    login: string,
    urlAvatar: string
}

interface Member {
    login: string,
    name: string,
    avatar_url: string,
    public_repos: number,
    followers: number,
    created_at: Date,
}

const CardUser: React.FC<CardUserProps> = (props) => {
    const [modalUserDetail, setModalUserDetail] = useState(false);
    const [dadosUser, setDadosUser] = useState<Member>({
        login: "",
        name: "",
        avatar_url: "",
        public_repos: 0,
        followers: 0,
        created_at: new Date,
    });

    function onClickUser() {
        setModalUserDetail(true);
        fetch(`https://api.github.com/users/${props.login}`).then(response => {
            if (response.ok) {
                return response.json().then(data => {
                    setDadosUser(data);
                });
            } else {
                alert('Erro na chamada')
            }
        }).catch(function (error) {
            alert('Existe problema com a chamada Fetch:' + error.message);
        });
    }

    return (
        <>
            <li className={styles.rowGridMember} onClick={onClickUser}>
                <img className={styles.imgProfile} src={props.urlAvatar} alt="avatar" />
                <p>{props.login}</p>
            </li>

            {
                modalUserDetail && < ModalUserDetail
                    dadosUser={dadosUser}
                    setModalUserDetail={setModalUserDetail}
                    setDadosUser={setDadosUser}
                />
            }
        </>
    )
}

export default CardUser