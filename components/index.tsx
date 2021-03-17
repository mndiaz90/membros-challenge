import styles from '../styles/components/HeaderCmp.module.css'

export function HeaderCmp() {
    return (
        <div className={styles.containerHeader}>
            <img className={styles.imgLogo} src="/logo.png" alt="logo" />
            <h1 style={{ color: 'var(--white)' }}>TESSERACT</h1>
        </div>
    )
}