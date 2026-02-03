import React from 'react';
import { useCart } from '../context/CartContext';

const DishCard = ({ dish }) => {
    const { addToCart } = useCart();

    return (
        <div className="glass-panel" style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={dish.image}
                    alt={dish.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>{dish.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flexGrow: 1, marginBottom: '1rem' }}>
                    {dish.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontWeight: '700', fontSize: '1.1rem' }}>₹{dish.price.toFixed(2)}</span>
                    <button
                        onClick={() => addToCart(dish)}
                        className="btn-primary"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DishCard;
