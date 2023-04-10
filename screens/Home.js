import React from "react";
import Slider from "../components/slider";

const sliderData = [
  {
    title: "Title 1",
    description: "Description 1",
    image: require("../assets/img1.png"),
  },
  {
    title: "Title 2",
    description: "Description 2",
    image: require("../assets/img2.png"),
  },
  {
    title: "Title 3",
    description: "Description 3",
    image: require("../assets/img3.png"),
  },
];

export default function Home() {
  return <Slider sliderData={sliderData} />;
}
