import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../../components/Card/Card";
import Button from "../../components/Button";
import { styles } from "./styles";

const images = [
  require("../../../assets/can.png"),
  require("../../../assets/recycle-bin.png"),
  require("../../../assets/beach.png"),
  require("../../../assets/lixo.png"),
  require("../../../assets/garrafa-de-vidro.png"),
  require("../../../assets/banana.png"),
];

const GameScreen = () => {
  const navigation = useNavigation();

  const handleDenunciarPress = () => {
    navigation.navigate("Home");
  };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matchedPairs.length === images.length) {
      setShowModal(true);
    }
  }, [matchedPairs]);

  const initializeGame = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image, isFlipped: false }));
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  const handleCardPress = (index) => {
    const newCards = [...cards];
    if (!newCards[index].isFlipped && flippedCards.length < 2) {
      newCards[index].isFlipped = true;
      setCards(newCards);
      setFlippedCards([...flippedCards, index]);

      if (flippedCards.length === 1) {
        const firstIndex = flippedCards[0];
        if (newCards[firstIndex].image === newCards[index].image) {
          setMatchedPairs([...matchedPairs, newCards[firstIndex].image]);
          setFlippedCards([]);
        } else {
          setTimeout(() => {
            newCards[firstIndex].isFlipped = false;
            newCards[index].isFlipped = false;
            setCards(newCards);
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconTextContainer}>
        <TouchableOpacity onPress={handleDenunciarPress}>
          <Image
            source={require("../../../assets/back.png")}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.title}>OceanGuard</Text>
      </View>
      <Text style={styles.subtitle}>Jogo da Memória</Text>
      <View style={styles.grid}>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            isFlipped={card.isFlipped || matchedPairs.includes(card.image)}
            onPress={() => handleCardPress(index)}
          />
        ))}
      </View>
      <Button text={"Reiniciar Jogo"} onPress={resetGame} />
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
                alignItems: "center",
              }}
            >
              <Text style={styles.modalTitle}>
                Parabéns! Você completou o jogo!
              </Text>
              <Image
                source={require("../../../assets/happy-face.png")}
                style={styles.modalIcon}
              />
            </View>
            <Image
              source={require("../../../assets/animal.png")}
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>
              Você sabia que o descarte inadequado de lixo nas praias tem um
              impacto devastador na vida marinha, incluindo espécies como as
              cachalotes, que estão em risco de extinção. Esses majestosos
              mamíferos marinhos podem confundir o lixo com comida e acabar
              ingerindo plásticos, sacolas e outros resíduos. Além disso, o lixo
              também pode enredar esses animais, dificultando sua capacidade de
              se mover e caçar. Portanto, é crucial que todos nós façamos nossa
              parte para manter as praias limpas e livres de lixo.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GameScreen;
