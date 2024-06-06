import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "../styles/style";
import Button from "../components/Button";
import { fetchCepData } from "../api/cep";
import { useNavigation } from "@react-navigation/native";

const CEPScreen = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const navigation = useNavigation();

  const handleDenunciarPress = () => {
    navigation.navigate("Home");
  };

  const handleCepSearch = async () => {
    try {
      const data = await fetchCepData(cep);
      console.log(
        "CEP encontrado",
        `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
      );
      setAddress(data);
    } catch (error) {
      console.log("Erro", "Não foi possível encontrar o CEP.");
      Alert.alert("Erro", "Não foi possível encontrar o CEP.");
    }
  };

  const handleDenounce = () => {
    console.log("Denúncia realizada com sucesso!");
    Alert.alert("Denúncia realizada com sucesso!");
  };

  const handleReset = () => {
    setAddress(null);
    setCep("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <TouchableOpacity onPress={handleDenunciarPress}>
          <Image
            source={require("../../assets/back.png")}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.title}>OceanGuard</Text>
      </View>
      <Text style={styles.question}>Onde você encontrou o problema?</Text>
      {address ? (
        <View>
          <Text style={styles.subtitle}>Você está na:</Text>
          <Text style={styles.address}>
            {`${address.logradouro}, ${address.bairro}, ${address.localidade} - ${address.uf}`}
          </Text>
          <View style={styles.addressBtnContainer}>
            <Button text={"Sim"} onPress={handleDenounce} />
            <Button text={"Não"} onPress={handleReset} />
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <Image
              source={require("../../assets/vacations.png")}
              style={styles.image}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite o CEP"
              value={cep}
              onChangeText={setCep}
              keyboardType="numeric"
            />
            <Button text={"Buscar"} onPress={handleCepSearch} />
          </View>
        </View>
      )}

      <Text style={styles.subtitle}>
        Não sabe o cep da sua localização? Você pode denunciar pelo nome da
        praia e da cidade em que você está!
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome da Praia"
          // value={}
          onChangeText={() => {}}
          keyboardType="string"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da Cidade"
          // value={}
          onChangeText={() => {}}
          keyboardType="string"
        />
        <Button text={"Buscar"} onPress={handleDenounce} />
      </View>
      <Text style={styles.subtitle}>
        "Seja o herói dos mares, preservando os oceanos um nível de cada vez!"
      </Text>
    </View>
  );
};

export default CEPScreen;
