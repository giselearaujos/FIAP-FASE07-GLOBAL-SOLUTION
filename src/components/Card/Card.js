import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const Card = ({ image, isFlipped, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={isFlipped ? styles.flippedCard : styles.card}>
        {isFlipped ? (
          <Image source={image} style={styles.image} />
        ) : (
          <Image
            source={require("../../../assets/icon-fish.png")}
            style={styles.image}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
