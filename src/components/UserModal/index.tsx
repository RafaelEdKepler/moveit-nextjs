import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container, LeftSide, RightSide, GitInput, GitImage } from './style';

export function UserModal() {
    const { settingUser } = useContext(UserContext);

    return (
        <Container>
            <LeftSide>
                <img src="./background.png" alt="Imagem de fundo" />
            </LeftSide>
            <RightSide>
                <div>
                    <img src="./Logo.png" alt="Logo" />
                </div>
                <div>
                    <strong>Bem-vindo</strong>
                    <GitImage>
                        <img src="./icons/Git.png" alt="Github" />
                    </GitImage>
                    <GitInput>
                        <input type="text" name="user" placeholder="Digite seu username" />
                        <button type="button">
                            <img src="./icons/arrow.png" alt="Arrow" onClick={settingUser} />
                        </button>
                    </GitInput>
                </div>
            </RightSide>
        </Container>
    )
}