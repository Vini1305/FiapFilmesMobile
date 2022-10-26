import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeRoute from './routes/HomeRoute'
import About from './screens/About'

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeRoute} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            )}}/>
        <Tab.Screen name="About" component={About} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="information" size={24} color="black" />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

