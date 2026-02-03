import React, { useState } from 'react';
import { dishes, restaurants } from '../data/mockData';
import DishCard from '../components/DishCard';

const Home = () => {
    const [filter, setFilter] = useState('All');

    const filteredDishes = filter === 'All'
        ? dishes
        : dishes.filter(d => d.restaurantId === parseInt(filter));

    return (
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>
                    Craving Something?
                </h1>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        className={`btn-primary ${filter === 'All' ? '' : 'outline'}`}
                        style={{ opacity: filter === 'All' ? 1 : 0.7 }}
                        onClick={() => setFilter('All')}
                    >
                        All Restaurants
                    </button>
                    {restaurants.map(r => (
                        <button
                            key={r.id}
                            className={`btn-primary ${filter === r.id ? '' : 'outline'}`}
                            style={{ opacity: filter === r.id ? 1 : 0.7 }}
                            onClick={() => setFilter(r.id)}
                        >
                            {r.name}
                        </button>
                    ))}
                </div>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {filteredDishes.map(dish => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    );
};

export default Home;
