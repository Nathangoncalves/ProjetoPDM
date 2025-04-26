import React from "react";
import { View, Text, FlatList } from "react-native";
import { userLabels } from "./labels";
import { listStyles } from "../Styles/styles";

const RegisteredUsers = ({ dados }) => {
  const renderHeader = () => (
    <View style={listStyles.columnHeaders}>
      <Text style={listStyles.headerText}>{userLabels.nameColumn}</Text>
      <Text style={listStyles.headerText}>{userLabels.phoneColumn}</Text>
    </View>
  );

  const renderUserItem = ({ item, index }) => (
    <View 
      style={[
        listStyles.userItem,
        index % 2 === 0 ? listStyles.evenItem : listStyles.oddItem
      ]}
    >
      <Text style={listStyles.itemName}>{item.nomeCompleto}</Text>
      <Text style={listStyles.itemPhone}>{item.contato}</Text>
    </View>
  );

  return (
    <View style={listStyles.container}>
      {renderHeader()}
      
      <FlatList
        data={dados}
        renderItem={renderUserItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={listStyles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RegisteredUsers;