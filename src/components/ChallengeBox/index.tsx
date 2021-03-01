import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";
import {
    ChallengeBoxContainer,
    ChallengeNotActive,
    ChallengeActive,
    ChallengeFailedButton,
    ChallengeSucceededButton }
from './style';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    const handleChallengeSucceeded = () => {
        completeChallenge();
        resetCountdown();

    }

    const handleChallengeFailed = () => {
        resetChallenge();
        resetCountdown();
    }

    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>
                            {activeChallenge.description}
                        </p>
                    </main>

                    <footer>
                        <ChallengeFailedButton
                            type="button"
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </ChallengeFailedButton>
                        <ChallengeSucceededButton
                            type="button"
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </ChallengeSucceededButton>
                    </footer>
                </ChallengeActive>
            ) :
                (
                    <ChallengeNotActive>
                        <strong>
                            Finalize um ciclo para receber um desafio
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de level completando desafios.
                        </p>
                    </ChallengeNotActive>
                )
            }
        </ChallengeBoxContainer >
    );
}