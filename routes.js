import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Details from "./screens/Details";
import Posts from "./screens/Posts";
import Post from "./screens/Post";

const Stack = createNativeStackNavigator();

export default function Routes({ children }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
}
