import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { globalStyles } from "../styles";

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
  // TODO: add pagination
  // TODO: add debounce
  function handleScroll(event) {
    const width = event.nativeEvent.layoutMeasurement.width;
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.floor(x / width);
    console.log(index);
  }

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <FlatList
          data={sliderData}
          horizontal
          pagingEnabled // snaps to the screen
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          renderItem={({ item }) => <SliderItem {...item} />}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
}

function SliderItem({ title, description, image }) {
  return (
    <View style={styles.slide}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    fontWeight: "light",
    margin: 10,
    textAlign: "center",
  },
  slide: {
    width: 400,
  },
  image: { width: 400, height: 300 },
});
