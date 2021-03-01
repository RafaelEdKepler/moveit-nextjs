import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ExpBar, CurrentExperience } from './style';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <ExpBar>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </CurrentExperience>

            </div>
            <span>{experienceToNextLevel} xp</span>
        </ExpBar>
    );
};