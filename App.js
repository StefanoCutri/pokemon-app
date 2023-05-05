import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonsView from "./src/screens/PokemonsView";
import PokemonsDetailsView from "./src/screens/PokemonDetailsView";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Provider store={store}>

        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={PokemonsView}
            options={{
              headerShown: false,
            }}
            />
          <Stack.Screen
            name="Details"
            component={PokemonsDetailsView}
            options={{
              headerShown: false,
              headerShown: false,
            }}
            />
        </Stack.Navigator>
            </Provider>
    </NavigationContainer>
  );
};

export default App;
