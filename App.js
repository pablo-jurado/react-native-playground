import React from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./Home";
import Navigator from "./routes";

export default function App() {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
}
