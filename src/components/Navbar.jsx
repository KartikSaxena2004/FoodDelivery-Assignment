import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { totalItems } = useCart();
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            borderBottom: '1px solid #f3f4f6'
        }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    background: 'linear-gradient(to right, #fc8019, #ef4f5f)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: 0
                }}>
                    FoodDispatch
                </h2>
            </Link>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>
                    Home
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500', position: 'relative' }}>
                    Cart
                    {totalItems > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-15px',
                            background: '#ef4f5f',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            {totalItems}
                        </span>
                    )}
                </Link>

                <Link to="/my-orders" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>
                    My Orders
                </Link>

                {isAuthenticated ? (
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {/* Role-Based Admin Link */}
                        {useAuth().user?.role === 'admin' && (
                            <Link to="/admin" style={{
                                textDecoration: 'none',
                                color: 'white',
                                background: '#fc8019',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                fontWeight: '500'
                            }}>
                                Admin Panel
                            </Link>
                        )}

                        <div style={{ fontWeight: '600', color: 'var(--primary)', marginRight: '0.5rem' }}>
                            Hi, {useAuth().user?.name?.split(' ')[0] || 'User'}
                        </div>

                        <button
                            onClick={handleLogout}
                            style={{
                                background: 'transparent',
                                border: '1px solid #d1d5db',
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                color: '#6b7280'
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login" style={{
                        textDecoration: 'none',
                        color: '#374151',
                        fontWeight: '500'
                    }}>
                        Login / Signup
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
