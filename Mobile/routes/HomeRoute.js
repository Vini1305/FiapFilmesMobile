import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import Detail from '../screens/Detail'
import Favorites from '../screens/Favorites';
import Recents from '../screens/Recents'
import { FavoritesProvider } from '../contexts/FavoritesContext';

export default function HomeRoute(){
  const Stack = createNativeStackNavigator();

  return(
    <FavoritesProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Recents" component={Recents} />
      </Stack.Navigator>
    </FavoritesProvider>
  )
}