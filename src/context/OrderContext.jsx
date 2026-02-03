import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('food_delivery_orders');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('food_delivery_orders', JSON.stringify(orders));
    }, [orders]);

    const addOrder = (order) => {
        const newOrder = {
            ...order,
            orderId: crypto.randomUUID(),
            createdAt: new Date().toISOString(),
            status: 'Preparing', // 'Preparing', 'Out for Delivery', 'Delivered'
            customerId: order.customerId || 'guest'
        };
        setOrders(prev => [newOrder, ...prev]);
    };

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(prev => prev.map(o => {
            if (o.orderId === orderId) {
                const updated = { ...o, status: newStatus };

                // Assign Agent if Out for Delivery and not yet assigned
                if (newStatus === 'Out for Delivery' && !o.deliveryAgent) {
                    const agents = [
                        { name: 'Rethik', phone: '98765 00001' },
                        { name: 'Suresh', phone: '98765 00002' },
                        { name: 'Mahesh', phone: '98765 00003' },
                        { name: 'Dinesh', phone: '98765 00004' }
                    ];
                    updated.deliveryAgent = agents[Math.floor(Math.random() * agents.length)];
                }

                return updated;
            }
            return o;
        }));
    };

    const assignDelivery = (maxDistance) => {
        // 1. Filter Unpaid (or just any pending delivery) 
        // 2. Filter Distance <= maxDistance
        // 3. Sort by Distance (Ascending)

        // Convert maxDistance to number just in case
        const limit = parseFloat(maxDistance);

        const candidates = orders
            .filter(o => o.status === 'Preparing') // Only assign orders that are ready
            .filter(o => !o.isPaid) // Using original logic preference for unpaid, but really should be all. Keeping original logic for now.
            .filter(o => o.deliveryDistance <= limit)
            .sort((a, b) => a.deliveryDistance - b.deliveryDistance);

        return candidates.length > 0 ? candidates[0] : null;
    };

    const togglePaymentStatus = (orderId) => {
        setOrders(prev => prev.map(o =>
            o.orderId === orderId ? { ...o, isPaid: !o.isPaid } : o
        ));
    };

    const value = {
        orders,
        addOrder,
        assignDelivery,
        updateOrderStatus,
        togglePaymentStatus
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
};
