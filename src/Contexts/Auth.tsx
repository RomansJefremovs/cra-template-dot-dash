import React, {createContext, ReactNode, useContext, useState} from 'react';

interface User {
    token: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<number>;
    logout: () => void;
    isLoading:boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}
// Define a type for the function that makes the API call


export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(() => {
        const savedToken = localStorage.getItem('userToken');
        return savedToken ? { token: savedToken } : null;
    });
    const [isLoading,setIsLoading]=useState<boolean>(false)
    const host = 'https://adminpanelvinebar.azurewebsites.net'
    const login = async (username: string, password: string) => {
        try {
            setIsLoading(true)
            const response = await fetch(`${host}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "username":username, "password":password }),
            });

            if (!response.ok) {
                return 500;
            }

            const { token } = await response.json();
            localStorage.setItem('userToken', token);
            setUser({ token });
            console.log('Login successful!', user);
            setIsLoading(false)
            return response.status;
        } catch (error) {
            console.error('Login error:', error);
            setIsLoading(false)
            return 500;
        }
    };

    const logout = () => {
        localStorage.removeItem('userToken');
        setUser(null);
        window.location.href = '/login';
    };


    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
