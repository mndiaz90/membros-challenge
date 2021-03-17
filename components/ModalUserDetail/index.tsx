import styles from '../../styles/components/ModalUserDetail.module.css'

interface ModalUserDetailProps {
    dadosUser: {
        login: string,
        name: string,
        avatar_url: string,
        public_repos: number,
        followers: number,
        created_at: Date
    },
    setModalUserDetail: Function
}

const ModalUserDetail: React.FC<ModalUserDetailProps> = (props) => {
    function onClickClose() {
        props.setModalUserDetail(false);
    }

    function DataFormatada() {
        let data = new Date(props.dadosUser.created_at)
        return ("0" + data.getDate()).substr(-2) + "/"
            + ("0" + (data.getMonth() + 1)).substr(-2) + "/" +
            data.getFullYear();
    }
    return (
        <div className={styles.modalUserDetail}>
            <div className={styles.containerDados}>
                <p style={{ margin: 0 }}><strong>Mais acerca de {props.dadosUser.login}</strong></p>
                <hr style={{
                    border: '1px solid gray',
                    width: '100%'
                }} />
                <div className={styles.containerImgClose} onClick={onClickClose}>
                    <img src="/close.svg" alt="close" />
                </div>
                <img className={styles.imgProfile} src={props.dadosUser.avatar_url} alt="image-profile" />
                <p><strong>Nome</strong>: {props.dadosUser.name}</p>
                <p><strong>Quantidade de repositórios</strong>: {props.dadosUser.public_repos}</p>
                <p><strong>Quantidade de seguidores</strong>: {props.dadosUser.followers}</p>
                <p><strong>Data entrada no Github</strong>: {DataFormatada()}</p>

            </div>
        </div>
    )
}

export default ModalUserDetail;