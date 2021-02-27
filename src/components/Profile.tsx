import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/55624017?s=400&u=d01010820c549ef7618ff605888512538acbf4e0&v=4" alt="Rafael Eduardo Kepler" />
            <div>
                <strong>Rafael Eduardo Kepler</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}