import React, { useContext } from 'react';
import { Container } from './style';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <h1>Hello World</h1>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={colors.secundary}
                onColor={colors.secundary}
            />
        </Container>
    );
};


//export default(Header);
