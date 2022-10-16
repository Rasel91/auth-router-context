import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import  { AuthContext } from './components/Contexts/UserContext';

const Header = () => {
  const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Awesome Auth</Link>

                <Link className="btn btn-ghost normal-case text-md" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-md" to='/login'>Log in</Link>
                <Link className="btn btn-ghost normal-case text-md" to='/register'>Register</Link>
                
                 {user?.displayName && <span> Welecome,{user.displayName}</span>}
            </div>
        </div>
    );
};

export default Header;