import { StyleSheet } from "react-native";

const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#E7F0DC",
  },
  pageTitle: {
    fontSize: 37,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
  },
  inputBox: {
    height: 40,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,
    color: "#000000",
  },
  submitBtn: {
    backgroundColor: "#508D4E",
    height: 50,
    marginHorizontal: 25,
    borderRadius: 80,
    justifyContent: "center",
    marginBottom: 20,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
  },
  linkText: {
    textAlign: "center",
    fontSize: 17,
    marginBottom: 20,
  },
  link: {
    color: "red",
    textDecorationLine: "underline",
  },
  card: {
    backgroundColor: "#D6EFD8",
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info: {
    marginBottom: 20,
    marginTop: 20,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "400",
  },
});

export default registerStyle;
