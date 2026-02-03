import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('food_delivery_current_user');
        return saved ? JSON.parse(saved) : null;
    });

    // Mock "Database" initialization
    useEffect(() => {
        if (!localStorage.getItem('food_delivery_users')) {
            const initialUsers = [
                { id: 1, name: 'Admin User', username: 'admin', password: 'admin', role: 'admin' },
                { id: 2, name: 'Demo Customer', username: 'user', password: 'user', role: 'customer' }
            ];
            localStorage.setItem('food_delivery_users', JSON.stringify(initialUsers));
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('food_delivery_current_user', JSON.stringify(user));
        } else {
            localStorage.removeItem('food_delivery_current_user');
        }
    }, [user]);

    const login = (username, password) => {
        const users = JSON.parse(localStorage.getItem('food_delivery_users') || '[]');
        const foundUser = users.find(u => u.username === username && u.password === password);

        if (foundUser) {
            // Don't store password in session state
            const { password, ...safeUser } = foundUser;
            setUser(safeUser);
            return true;
        }
        return false;
    };

    const signup = (userData) => {
        const users = JSON.parse(localStorage.getItem('food_delivery_users') || '[]');

        if (users.find(u => u.username === userData.username)) {
            return { success: false, message: 'Username already exists' };
        }

        const newUser = {
            id: Date.now(),
            ...userData,
            role: 'customer' // All signups are customers
        };

        users.push(newUser);
        localStorage.setItem('food_delivery_users', JSON.stringify(users));

        // Auto login after signup
        const { password, ...safeUser } = newUser;
        setUser(safeUser);

        return { success: true };
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
