import React from 'react';
import { useOrders } from '../context/OrderContext';

const MyOrders = () => {
    const { orders } = useOrders();
    // In a real app we would filter by logged in user ID. 
    // For this demo, we'll show all orders or filter by 'guest' if we had auth for customers.
    // Let's show all for now so the user can see the flow easily.

    // Sort by newest first
    const myOrders = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const getStatusColor = (status) => {
        switch (status) {
            case 'Delivered': return '#10b981'; // green
            case 'Out for Delivery': return '#f59e0b'; // orange
            default: return '#3b82f6'; // blue
        }
    };

    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>My Orders</h1>

            {myOrders.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '4rem' }}>
                    <p>No past orders found.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {myOrders.map(order => (
                        <div key={order.orderId} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>{order.restaurantName}</h3>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    {new Date(order.createdAt).toLocaleString()}
                                </div>
                                <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                    {order.itemCount} Items • ₹{order.totalAmount ? order.totalAmount.toFixed(2) : '0.00'}
                                </div>
                                {order.deliveryAgent && (order.status === 'Out for Delivery' || order.status === 'Delivered') && (
                                    <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                        <div style={{ fontSize: '0.85rem', color: '#0369a1', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                            Delivery Partner Assigned
                                        </div>
                                        <div style={{ fontSize: '0.9rem' }}>
                                            👤 {order.deliveryAgent.name}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            📞 {order.deliveryAgent.phone}
                                            <a href={`tel:${order.deliveryAgent.phone}`} style={{ fontSize: '0.8rem', color: '#0369a1', textDecoration: 'underline' }}>Call</a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    backgroundColor: getStatusColor(order.status),
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    marginBottom: '0.5rem'
                                }}>
                                    {order.status || 'Preparing'}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: order.isPaid ? '#10b981' : '#ef4444' }}>
                                    {order.isPaid ? 'Paid' : 'Pay on Delivery'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
