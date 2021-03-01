import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox/index';
import { Countdown } from '../components/Countdown/index';
import { CompletedChallenges } from '../components/CompletedChallenges/index';
import { ExperienceBar } from '../components/ExperienceBar/index';
import { Profile } from '../components/Profile/index';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserContextProvider } from '../contexts/UserContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <UserContextProvider>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Inicio | Move It</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </UserContextProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted, isLogged } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
