import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./routes";
import Nav from "./components/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator>
        <Nav />
      </Navigator>
    </>
  );
}
