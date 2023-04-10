import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { globalStyles } from "../styles";

const viewabilityConfig = {
  itemVisiblePercentThreshold: 50,
};

export default function Slider({ sliderData }) {
  const [current, setCurrent] = React.useState(0);

  const handleOnViewableItemsChanged = React.useCallback(
    ({ viewableItems }) => {
      setCurrent(viewableItems[0].index);
    },
    []
  );

  return (
    <View style={globalStyles.container}>
      <View
        style={{
          height: "80%",
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
          renderItem={({ item }) => <SliderItem {...item} />}
          keyExtractor={(item) => item.title}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>
      <View>
        <View style={styles.dotWrapper}>
          {sliderData.map((_, index) =>
            index === current ? (
              <View style={styles.dotActive}></View>
            ) : (
              <View style={styles.dot}></View>
            )
          )}
        </View>
      </View>
    </View>
  );
}

function SliderItem({ title, description, image }) {
  return (
    <View style={styles.slide}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image source={image} style={styles.image} />
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
  dotWrapper: {
    position: "absolute",
    bottom: 35,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#ccc",
  },
  dotActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#000",
  },
});
