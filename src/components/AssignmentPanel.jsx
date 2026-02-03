import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';

const AssignmentPanel = () => {
    const { assignDelivery } = useOrders();
    const [maxDist, setMaxDist] = useState(10);
    const [result, setResult] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    const handleAssign = () => {
        const foundOrder = assignDelivery(maxDist);
        setResult(foundOrder);
        setHasSearched(true);
    };

    return (
        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                🚀 Dispatch Center
            </h2>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Max Delivery Range (KM)
                    </label>
                    <input
                        type="number"
                        className="input-field"
                        value={maxDist}
                        onChange={(e) => setMaxDist(e.target.value)}
                        min="0.1"
                        step="0.5"
                    />
                </div>
                <button
                    onClick={handleAssign}
                    className="btn-primary"
                    style={{ height: '44px', minWidth: '160px', fontSize: '1rem' }}
                >
                    Auto Assign
                </button>
            </div>

            {hasSearched && (
                <div className="animate-enter" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '0.75rem', padding: '1.5rem', border: '1px solid var(--glass-border)' }}>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--text-muted)', marginBottom: '1rem' }}>Assignment Result</h3>

                    {result ? (
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ padding: '0.75rem', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '0.5rem', fontSize: '1.5rem' }}>
                                🛵
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Order #{result.orderId.substring(0, 6)}</div>
                                <div style={{ color: 'var(--accent)' }}>{result.restaurantName} • {result.deliveryDistance} km</div>
                                <div style={{ fontSize: '0.875rem', color: '#f87171', marginTop: '0.25rem' }}>● Payment Pending</div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>⚠️</span> No suitable unpaid orders found within {maxDist}km.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AssignmentPanel;
