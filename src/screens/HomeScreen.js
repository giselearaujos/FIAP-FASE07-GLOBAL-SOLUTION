import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "../styles/style";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleDenunciarPress = () => {
    navigation.navigate("CEP");
  };

  const handleGamePress = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OceanGuard</Text>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/fish.png")} style={styles.image} />
        <Button text={"Jogar"} onPress={handleGamePress} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/photo.png")}
          style={styles.image}
        />
        <Button text={"Denunciar"} onPress={handleDenunciarPress} />
      </View>
      <Text style={styles.subtitle}>
        "Seja o herói dos mares, preservando os oceanos um nível de cada vez!"
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;
