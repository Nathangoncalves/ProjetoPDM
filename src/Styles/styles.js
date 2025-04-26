import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 16,
    color: "#2c3e50",
    alignSelf: "flex-start",
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: "100%",
  },
  fieldLabel: {
    flex: 1,
    fontSize: 15,
    color: "#34495e",
    paddingRight: 8,
  },
  listHeader: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  columnHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: "500",
    color: "#2c3e50",
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 2,
    height: 42,
    borderWidth: 1,
    borderColor: "#ced4da",
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: "#ffffff",
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: "#4dabf7",
    height: 44,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    elevation: 2,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    flex: 1,
    fontSize: 15,
    color: "#495057",
    paddingHorizontal: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#dee2e6",
    marginVertical: 24,
  },
  alternateRow: {
    backgroundColor: "#f8f9fa",
  },
});