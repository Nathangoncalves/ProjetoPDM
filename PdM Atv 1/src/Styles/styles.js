import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  fieldGroup: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 16,
    marginBottom: 8,
  },
  textField: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  submitButton: {
    backgroundColor: '#4dabf7',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
});

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  columnHeaders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  evenItem: {
    backgroundColor: '#f8f9fa',
  },
  oddItem: {
    backgroundColor: '#fff',
  },
  itemName: {
    flex: 1,
  },
  itemPhone: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
});