import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Posts from "./screens/Posts";
import Post from "./screens/Post";
import Contacts from "./screens/Contacts";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes({ children }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
      {children}
    </NavigationContainer>
  );
}
