import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 100,
    height: 100,
    backgroundColor: "#4cbcfe",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",

    transform: [{ perspective: 1000 }],
  },
  flippedCard: {
    transform: [{ rotateY: "180deg" }],
  },
  image: {
    width: 80,
    height: 80,
  },
});
