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
    setModalUserDetail: Function,
    setDadosUser: Function
}

const ModalUserDetail: React.FC<ModalUserDetailProps> = (props) => {

    function onClickClose() {
        props.setDadosUser({
            login: "",
            name: "",
            avatar_url: "",
            public_repos: 0,
            followers: 0,
            created_at: new Date,
        })
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
                <div className={styles.containerImgClose} onClick={onClickClose}>
                    <img src="/close.svg" alt="close" />
                </div>
                {props.dadosUser.login ?
                    <>
                        <p style={{ margin: 0 }}><strong>Mais acerca de {props.dadosUser.login}</strong></p>
                        <hr style={{
                            border: '1px solid gray',
                            width: '100%'
                        }} />
                        <img className={styles.imgProfile} src={props.dadosUser.avatar_url} alt="image-profile" />
                        <p><strong>Nome</strong>: {props.dadosUser.name}</p>
                        <p><strong>Quantidade de repositórios</strong>: {props.dadosUser.public_repos}</p>
                        <p><strong>Quantidade de seguidores</strong>: {props.dadosUser.followers}</p>
                        <p><strong>Data entrada no Github</strong>: {DataFormatada()}</p>
                    </>
                    :
                    <div style={{ display: 'flex' }}>
                        <h2>Carregando dados </h2>
                        <img className={styles.gifLoading} src="/loading.gif" alt="loading" />
                    </div>
                }
            </div>
        </div>
    )
}

export default ModalUserDetail;