import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';

const OrderList = () => {
    const { orders, updateOrderStatus, togglePaymentStatus } = useOrders();
    const [filterType, setFilterType] = useState('all'); // all, paid, unpaid
    const [maxDist, setMaxDist] = useState('');

    const filteredOrders = orders.filter(order => {
        // 1. Status Filter
        if (filterType === 'paid' && !order.isPaid) return false;
        if (filterType === 'unpaid' && order.isPaid) return false;

        // 2. Distance Filter (View-only filter, distinct from Assignment)
        if (maxDist && order.deliveryDistance > parseFloat(maxDist)) return false;

        return true;
    });

    const statusOptions = ['Preparing', 'Out for Delivery', 'Delivered'];

    return (
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Incoming Orders ({filteredOrders.length})</h2>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <select
                        className="input-field"
                        style={{ width: 'auto' }}
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All Payment</option>
                        <option value="paid">Paid Only</option>
                        <option value="unpaid">Unpaid Only</option>
                    </select>

                    <input
                        type="number"
                        placeholder="Max KM..."
                        className="input-field"
                        style={{ width: '120px' }}
                        value={maxDist}
                        onChange={(e) => setMaxDist(e.target.value)}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                {filteredOrders.length === 0 ? (
                    <p style={{ color: 'var(--text-muted)', textAlign: 'center', gridColumn: '1/-1', padding: '2rem' }}>No orders found.</p>
                ) : (
                    filteredOrders.map(order => (
                        <div key={order.orderId} className="glass-panel animate-enter" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{order.restaurantName}</span>
                                <button
                                    onClick={() => togglePaymentStatus(order.orderId)}
                                    title="Click to Toggle Payment Status"
                                    style={{
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '999px',
                                        fontSize: '0.75rem',
                                        background: order.isPaid ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                        color: order.isPaid ? '#4ade80' : '#f87171',
                                        border: `1px solid ${order.isPaid ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                                        cursor: 'pointer',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {order.isPaid ? 'PAID' : 'UNPAID'}
                                </button>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                <span>Items: {order.itemCount}</span>
                                <span>{order.deliveryDistance} km</span>
                            </div>
                            <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Total: ₹{order.totalAmount ? order.totalAmount.toFixed(2) : '0.00'}
                            </div>

                            <div style={{ marginTop: '1rem' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Update Status:</label>
                                <select
                                    className="input-field"
                                    style={{ padding: '0.5rem', fontSize: '0.9rem' }}
                                    value={order.status || 'Preparing'}
                                    onChange={(e) => updateOrderStatus(order.orderId, e.target.value)}
                                >
                                    {statusOptions.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#64748b', textAlign: 'right' }}>ID: {order.orderId.substring(0, 8)}...</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default OrderList;
