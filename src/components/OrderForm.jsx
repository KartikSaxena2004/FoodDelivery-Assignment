import React, { useState } from 'react';
import { useOrders } from '../context/OrderContext';

const OrderForm = () => {
    const { addOrder } = useOrders();
    const [formData, setFormData] = useState({
        restaurantName: '',
        itemCount: 1,
        isPaid: false,
        deliveryDistance: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.restaurantName || !formData.deliveryDistance) return;

        addOrder({
            restaurantName: formData.restaurantName,
            itemCount: parseInt(formData.itemCount),
            isPaid: formData.isPaid === 'true' || formData.isPaid === true, // Handle select/bool
            deliveryDistance: parseFloat(formData.deliveryDistance)
        });

        setFormData({
            restaurantName: '',
            itemCount: 1,
            isPaid: false,
            deliveryDistance: ''
        });
    };

    return (
        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: '600' }}>Add New Order</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Restaurant Name</label>
                    <input
                        type="text"
                        className="input-field"
                        value={formData.restaurantName}
                        onChange={e => setFormData({ ...formData, restaurantName: e.target.value })}
                        placeholder="e.g. Pizza Hut"
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Item Count</label>
                    <input
                        type="number"
                        className="input-field"
                        value={formData.itemCount}
                        onChange={e => setFormData({ ...formData, itemCount: e.target.value })}
                        min="1"
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Distance (KM)</label>
                    <input
                        type="number"
                        step="0.1"
                        className="input-field"
                        value={formData.deliveryDistance}
                        onChange={e => setFormData({ ...formData, deliveryDistance: e.target.value })}
                        placeholder="0.0"
                        required
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Payment Status</label>
                    <select
                        className="input-field"
                        value={formData.isPaid}
                        onChange={e => setFormData({ ...formData, isPaid: e.target.value === 'true' })}
                    >
                        <option value="false">Unpaid</option>
                        <option value="true">Paid</option>
                    </select>
                </div>

                <button type="submit" className="btn-primary" style={{ height: '42px' }}>
                    + Add Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
