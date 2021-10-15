import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import Cats from '../views/Cats';
import Dogs from '../views/Dogs';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name = 'Gatos' 
                    component = { Cats } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'favorite' size= { size } color = { color } />
                        ) 
                    }} 
                />
                <Tab.Screen 
                    name = 'Perros' 
                    component = { Dogs } 
                    options = {{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name = 'filter-vintage' size= { size } color = { color } />
                        ) 
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;