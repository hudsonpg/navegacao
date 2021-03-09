import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'TelaA') {
                    iconName = focused
                        ? 'information-circle-outline'
                        : 'information-outline';
                } else if (route.name === 'TelaB') {
                    iconName = focused ? 'pause-circle-outline' : 'pause-outline';
                } else if (route.name === 'TelaC') {
                    iconName = focused ? 'pause-circle-outline' : 'pause-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            // labelStyle: { fontSize: 30, fontWeight: 'bold' },
        }} initialRouteName="TelaB"
    >
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB} />
        <Tab.Screen name='TelaC' component={TelaC} />
    </Tab.Navigator>
)