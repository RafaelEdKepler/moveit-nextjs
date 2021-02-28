import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { UserModal } from "../components/UserModal";

interface UserContextData {
    settingUser: () => void;
    avatar: string;
    user: string;
}

export const UserContext = createContext({

} as UserContextData)

export function UserContextProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (Cookies.get('isLogged') === 'true') {
            setIsLogged(true);
            setAvatar(Cookies.get('avatar_url'));
            setUser(Cookies.get('name'));
        } else {
            setIsLogged(false);
        }

    }, [])

    const settingUser = (event) => {
        connectUser(event.nativeEvent.path[2].childNodes[0].value);
    }

    function connectUser(user: string) {
        axios.get(`https://api.github.com/users/${user}`).then((response) => {
            Cookies.set('isLogged', 'true');
            Cookies.set('name', response.data.name);
            Cookies.set('avatar_url', response.data.avatar_url);
            setIsLogged(true);
            setAvatar(response.data.avatar_url);
            setUser(response.data.name);
            console.log(Cookies);
        })
    }

    return (
        <UserContext.Provider value={{
            settingUser,
            isLogged,
            user,
            avatar
        }}>
            {children}
            {!isLogged && (<UserModal />)}
        </UserContext.Provider>
    )
}