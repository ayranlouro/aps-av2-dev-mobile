import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () =>{
    return (
        <NavigationContainer>
            {/* <AuthRoutes/> */}
            <AppRoutes/>
        </NavigationContainer>
    )
}

export default Routes;