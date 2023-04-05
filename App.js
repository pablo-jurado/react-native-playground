import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigator from "./routes";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
    </>
  );
}
