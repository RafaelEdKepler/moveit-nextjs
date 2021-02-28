import styles from "../styles/components/UserModal.module.css";

export function UserModal() {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img src="./background.png" alt="Imagem de fundo" />
            </div>
            <div className={styles.rightSide}>
                <div>
                    <img src="./Logo.png" alt="Logo" />
                </div>
                <div>
                    <strong>Bem-vindo</strong>
                    <div className={styles.gitImage}>
                        <img src="./icons/Git.png" alt="Github" />
                    </div>
                    <div className={styles.gitInput}>
                        <input type="text" placeholder="Digite seu username" />
                        <button type="button">
                            <img src="./icons/arrow.png" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}