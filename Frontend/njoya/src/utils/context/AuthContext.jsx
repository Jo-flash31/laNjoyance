import React , {createContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router'

// URL CONSTANT 
import URLS from '../constants/Api'
import AXIOS_INSTANCE from '../constants/AxiosInstance'

// Créer un contexte d'authentification
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

// Etat pour stocker les informations d'authentification 
    const [auth,setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        isLoggeIn();
    },[])

// Fonction pour gérer l'authentification
const login = async (user) => {
    console.log(userDataForm);
    
    try { 
        setIsLoading(true)

        // axios
        const { data, status} = await AXIOS_INSTANCE.post(URLS.POST_LOGIN,userDataForm)

        if(status === 200) {
            // Mettre à jour l'état d'authentification avec les données de l'utilisateur
            setAuth(data);
            
            // Stockez les données de l'utilisateur dans le stockage local
            localStorage.setItem('auth', JSON.stringify(data));

            // Rediriger vers la page d'accueil après la connexion réussie
            navigate('/'); 

            setIsLoading(false)
            
            
        }
            
        } catch (error) {
            console.log(error.message);
            setIsLoading(false)
        
    }
} 
    // Recupére les données d'authentification du stockage local lors du chargement initial
    const isLoggeIn = () => {
        setIsLoading(true)

    const currentUser = localStorage.getItem('auth');

    const currentUserParsed = currentUser ? JSON.parse(currentUser) : null;
    setAuth(currentUserParsed);
    setIsLoading(false)

    }

    const logout = () => {
        setIsLoading(true)

        setAuth(null); // Réinitialiser l'état d'authentification
        localStorage.removeItem('auth'); // Supprimer les données d'authentification du stockage local
        
        // Rediriger vers la page de connexion après la déconnexion
        navigate('/')
        setIsLoading(false)
    }
    return (
        <AuthContext.Provider value={{login,logout, auth, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}