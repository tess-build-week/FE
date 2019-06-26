import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
    return (
        <Route
        {...props}
        render = {() => {
            if (localStorage.getItem('token')) {
                return (
                    <div>
                        <h1>Thank you for signing up for our thing. Your welcome for this awesome app.
                    
                        </h1>
                        <h2>Auth returns OoO</h2>
                    </div>
                );
            }
            else {
                return <Redirect to='/login' />
            }
        }}
        />
    );
};

export default PrivateRoute; 