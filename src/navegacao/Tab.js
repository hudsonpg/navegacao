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

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'logo-react'
                            : 'logo-angular';
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'logo-chrome'
                            : 'logo-edge';
                        break;
                    case 'TelaC':
                        iconName = focused
                            ? 'logo-apple'
                            : 'logo-windows';
                        break;

                    default:
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: true,
            labelStyle: { fontSize: 15 },
        }} initialRouteName="TelaB"
    >
        <Tab.Screen name='TelaA' component={TelaA} options={{ title: "Inicial" }} />
        <Tab.Screen name='TelaB' component={TelaB} options={{ title: "Meio" }} />
        <Tab.Screen name='TelaC' component={TelaC} options={{ title: "Final" }} />
    </Tab.Navigator>
)