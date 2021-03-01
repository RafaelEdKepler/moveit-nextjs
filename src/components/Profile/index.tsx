import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { UserContext } from "../../contexts/UserContext";
import { ProfileContainer } from './style';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const { user, avatar } = useContext(UserContext);

    return (
        <ProfileContainer>
            <img src={avatar} alt={user} />
            <div>
                <strong>{user}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    );
}