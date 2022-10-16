import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);
    console.log('object', user);
    return (
        <div>
            <h1> This is home for :{user?.displayName}</h1>
        </div>
    );
};

export default Home;