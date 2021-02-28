import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import Cookies from 'js-cookie';
import styles from "../styles/components/Profile.module.css";
import { UserContext } from "../contexts/UserContext";

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { user, avatar } = useContext(UserContext);

    return (
        <div className={styles.profileContainer}>
            <img src={avatar} alt={user} />
            <div>
                <strong>{user}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}