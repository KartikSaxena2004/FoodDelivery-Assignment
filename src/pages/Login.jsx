import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, signup } = useAuth();
    const navigate = useNavigate();

    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        phone: ''
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isLoginMode) {
            if (login(formData.username, formData.password)) {
                navigate('/'); // Go to Home instead of Admin by default
            } else {
                setError('Invalid credentials');
            }
        } else {
            // Signup Mode
            if (!formData.name || !formData.username || !formData.password || !formData.phone) {
                setError('All fields are required');
                return;
            }

            const result = signup(formData);
            if (result.success) {
                navigate('/');
            } else {
                setError(result.message);
            }
        }
    };

    return (
        <div className="container" style={{ maxWidth: '450px', margin: '4rem auto', textAlign: 'center' }}>
            <div className="glass-panel" style={{ padding: '2.5rem' }}>
                <h2 style={{ marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: '800' }}>
                    {isLoginMode ? 'Welcome Back' : 'Create Account'}
                </h2>
                <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    {isLoginMode ? 'Login to continue your food journey' : 'Join us for delicious meals'}
                </p>

                {error && (
                    <div style={{ color: '#ef4444', marginBottom: '1.5rem', fontSize: '0.9rem', background: '#fee2e2', padding: '0.75rem', borderRadius: '0.5rem' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {!isLoginMode && (
                        <div className="animate-enter">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Username"
                            value={formData.username}
                            onChange={e => setFormData({ ...formData, username: e.target.value })}
                        />
                    </div>

                    {!isLoginMode && (
                        <div className="animate-enter">
                            <input
                                type="tel"
                                className="input-field"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    )}

                    <div>
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>
                        {isLoginMode ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                        <button
                            onClick={() => {
                                setIsLoginMode(!isLoginMode);
                                setError('');
                                setFormData({ name: '', username: '', password: '', phone: '' });
                            }}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'var(--primary)',
                                fontWeight: '600',
                                marginLeft: '0.5rem',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}
                        >
                            {isLoginMode ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
