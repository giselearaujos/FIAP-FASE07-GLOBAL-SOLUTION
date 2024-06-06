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
    fontSize: 20,
    color: "#FFFFFF",
    textShadowColor: "#0959B7",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
  },
  question: {
    color: "#0959B7",
    fontSize: 25,
  },
  imageContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
  inputContainer: {
    alignItems: "center",
    gap: 2,
  },
  input: {
    height: 40,
    borderColor: "#828282",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 240,
    marginBottom: 20,
    backgroundColor: "#a4dcf8",
    color: "#828282",
    fontSize: 20,
  },
  address: {
    color: "#0959B7",
    fontSize: 20,
    textAlign: "center",
    padding: 8,
  },
  addressBtnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  dropZone: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
