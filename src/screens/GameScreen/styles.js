import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C8EFFE",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadowColor: "#0959B7",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 29,
    color: "#FFFFFF",
    textShadowColor: "#0959B7",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  image: {
    width: 130,
    height: 130,
  },
  iconTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    gap: 45,
  },
  iconBack: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  gameIconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalIcon: {
    width: 20,
    height: 20,
  },
  modalImage: {
    width: 250,
    height: 250,
  },
  modalTitle: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  modalButton: {
    backgroundColor: "#4cbcfe",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
