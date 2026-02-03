import React from 'react';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';
import AssignmentPanel from '../components/AssignmentPanel';

function AdminDashboard() {
    return (
        <div className="container" style={{ padding: '2rem' }}>
            <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    background: 'linear-gradient(to right, #8b5cf6, #06b6d4, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '-2px',
                    marginBottom: '0.5rem'
                }}>
                    Kitchen & Logistics
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    Monitor incoming orders and assign delivery partners.
                </p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Left Column: Actions */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <AssignmentPanel />
                    <div style={{ position: 'relative' }}>
                        <OrderForm />
                    </div>
                </div>

                {/* Right Column: List */}
                <div>
                    <OrderList />
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </div>
    );
}

export default AdminDashboard;
