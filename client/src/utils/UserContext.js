import {createContext} from 'react';

export const UserContext = createContext({
    id: "",
    name: "",
    email: "",
    auth0Id: ""
});