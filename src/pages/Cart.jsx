import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <h2>Your cart is empty</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
                <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>Start Ordering</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Your Cart</h1>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                {cartItems.map(item => (
                    <div key={item.id} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.5rem',
                        paddingBottom: '1.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                                <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.1rem' }}>{item.name}</h3>
                                <p style={{ margin: 0, color: 'var(--text-muted)' }}>₹{item.price}</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem', borderRadius: '8px' }}>
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    style={{ background: 'none', border: 'none', color: 'white', padding: '0.25rem 0.5rem', cursor: 'pointer' }}
                                >-</button>
                                <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    style={{ background: 'none', border: 'none', color: 'white', padding: '0.25rem 0.5rem', cursor: 'pointer' }}
                                >+</button>
                            </div>
                            <p style={{ margin: 0, fontWeight: 'bold', minWidth: '60px', textAlign: 'right' }}>
                                ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                ))}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '2px solid rgba(255,255,255,0.1)' }}>
                    <button onClick={clearCart} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', textDecoration: 'underline' }}>
                        Clear Cart
                    </button>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Subtotal</p>
                        <h2 style={{ fontSize: '2rem', margin: '0 0 1rem 0' }}>₹{cartTotal.toFixed(2)}</h2>
                        <Link to="/checkout" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
