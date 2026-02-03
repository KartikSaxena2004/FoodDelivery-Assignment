import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal, totalItems, clearCart } = useCart();
    const { addOrder } = useOrders();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [details, setDetails] = useState({
        name: '',
        address: '',
        card: ''
    });

    if (cartItems.length === 0) {
        navigate('/');
        return null;
    }

    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API/Payment Processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Determine Logic Variables
        const distance = (Math.random() * 10 + 1).toFixed(1); // Random distance 1-11km
        const restaurantName = [...new Set(cartItems.map(i => i.restaurantId))].length > 1
            ? "Mixed Order"
            : "Restaurant #" + cartItems[0].restaurantId;

        const isPaid = paymentMethod === 'card';

        // Add to Logic System (OrderContext)
        addOrder({
            restaurantName,
            itemCount: totalItems,
            isPaid: isPaid,
            deliveryDistance: parseFloat(distance),
            customerName: details.name,
            totalAmount: cartTotal,
            paymentMethod
        });

        clearCart();
        setLoading(false);
        navigate('/admin'); // Redirect to "Backend/Logistics" view
    };

    return (
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span>Total Items</span>
                        <strong>{totalItems}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.25rem' }}>
                        <span>Total to Pay</span>
                        <strong style={{ color: 'var(--primary)' }}>₹{cartTotal.toFixed(2)}</strong>
                    </div>
                </div>

                <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Full Name</label>
                        <input
                            required
                            type="text"
                            className="input-field"
                            value={details.name}
                            onChange={e => setDetails({ ...details, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Delivery Address</label>
                        <textarea
                            required
                            className="input-field"
                            rows="3"
                            value={details.address}
                            onChange={e => setDetails({ ...details, address: e.target.value })}
                        />
                    </div>

                    <div style={{ margin: '1rem 0' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Payment Method</label>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={paymentMethod === 'card'}
                                    onChange={() => setPaymentMethod('card')}
                                />
                                Credit/Debit Card
                            </label>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={() => setPaymentMethod('cod')}
                                />
                                Cash on Delivery
                            </label>
                        </div>
                    </div>

                    {paymentMethod === 'card' && (
                        <div className="animate-enter">
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Card Details (Simulated)</label>
                            <input
                                required
                                type="text"
                                placeholder="0000 0000 0000 0000"
                                className="input-field"
                                value={details.card}
                                onChange={e => setDetails({ ...details, card: e.target.value })}
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={loading}
                        style={{ marginTop: '1rem', height: '50px', fontSize: '1.1rem' }}
                    >
                        {loading ? 'Processing...' : (paymentMethod === 'cod' ? 'Place Order (Pay on Delivery)' : 'Pay & Place Order')}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
