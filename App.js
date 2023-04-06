import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./routes";
import Nav from "./components/Navigation";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          height: "100%",
        }}
      >
        <StatusBar style="auto" />
        <Navigator>
          <Nav />
        </Navigator>
      </SafeAreaView>
    </>
  );
}
