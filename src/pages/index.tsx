import Head from 'next/head';
import { GetServerSideProps } from 'next';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import light from '../styles/Themes/light';
import dark from '../styles/Themes/dark';
import { useState } from 'react';

import { Header } from '../components/Header/index';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from '../components/ChallengeBox/index';
import { Countdown } from '../components/Countdown/index';
import { CompletedChallenges } from '../components/CompletedChallenges/index';
import { ExperienceBar } from '../components/ExperienceBar/index';
import { Profile } from '../components/Profile/index';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserContextProvider } from '../contexts/UserContext';
import Switch from 'react-switch';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
            <Switch
              onChange={toggleTheme}
              checked={theme === dark ? true : false}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={30}
              handleDiameter={20}
              offColor='#000'
              onColor='#FFF'

            />
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
    </ThemeProvider>
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
