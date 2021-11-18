import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Chat from '../pages/Chat'
import Settings from '../pages/Settings'

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Grupos" component={Chat} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="chat" color={color} size={32}/>)}}></Tab.Screen>
            <Tab.Screen name="Configurações" component={Settings} options={{tabBarIcon: ({color}) => (<MaterialCommunityIcons name="robot" color={color} size={32}/>)}}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default AppRoutes;