import { ChangeEvent, useEffect, useState } from "react";
import CardUser from "../components/CardUser";
import { HeaderCmp } from "../components/HeaderCmp";
import styles from '../styles/Home.module.css';

interface Dados {
    dados: Array<Member>
}

interface Member {
    login: string,
    name: string,
    avatar_url: string,
    public_repos: number,
    followers: number,
    created_at: Date,
}

export default function HomePage(props: Dados) {
    const [arrayMembers, setArrayMembers] = useState<[Member] | any>(props.dados);
    const [notFound, setNotFound] = useState(false);
    const [pesquisar, setPesquisar] = useState<string>("");

    function onChangePesquisar(e: ChangeEvent<HTMLInputElement>) {
        setPesquisar(e.currentTarget.value)
    }

    function pesquisarUser() {
        if (pesquisar.trim().length) {
            let membersFinded = props.dados.filter(member => member.login.toLowerCase().includes(pesquisar.trim().toLowerCase()));
            if (membersFinded.length) {
                setArrayMembers(membersFinded)
                setNotFound(false)
            } else {
                setNotFound(true)
            }
        } else {
            setArrayMembers(props.dados)
            setNotFound(false)
        }
    }

    useEffect(() => {
        pesquisarUser()
    }, [pesquisar])

    return <div className={styles.containerPrincipal}>
        <HeaderCmp />
        <h3>Membros do Tesseract no github</h3>
        <div className={styles.containerInput}>
            <input
                type="text"
                name="pesquisar"
                onChange={onChangePesquisar}
                placeholder="Digite o usuário a pesquisar"
            />
        </div>

        {notFound ? <div><h2>Nao foi encontrado o usuário</h2></div> :
            <ul className={styles.gridMember}>
                {arrayMembers.map((member: Member, index: number) => {
                    return <CardUser
                        key={index}
                        login={member.login}
                        urlAvatar={member.avatar_url}
                    />
                })}
            </ul>
        }
    </div>
}

HomePage.getInitialProps = async () => {
    const response = await fetch('https://api.github.com/orgs/grupotesseract/public_members')
    const json = await response.json()
    return {
        dados: json
    }
}