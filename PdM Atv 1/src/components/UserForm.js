import React from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { formLabels } from "./labels";
import { formStyles } from "../Styles/styles";

const RegistrationForm = ({ 
  valorNome, 
  valorTelefone, 
  onChangeNome, 
  onChangeTelefone, 
  onPressCadastrar 
}) => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.headerText}>{formLabels.header}</Text>

      <View style={formStyles.fieldGroup}>
        <Text style={formStyles.fieldLabel}>{formLabels.nameField}</Text>
        <TextInput
          style={formStyles.textField}
          value={valorNome}
          onChangeText={onChangeNome}
          placeholder="Digite seu nome completo"
        />
      </View>

      <View style={formStyles.fieldGroup}>
        <Text style={formStyles.fieldLabel}>{formLabels.phoneField}</Text>
        <TextInput
          style={formStyles.textField}
          value={valorTelefone}
          onChangeText={onChangeTelefone}
          inputMode="tel"
          placeholder="Informe seu telefone"
        />
      </View>

      <Pressable 
        style={formStyles.submitButton} 
        onPress={onPressCadastrar}
        android_ripple={{ color: '#f0f0f0' }}
      >
        <Text style={formStyles.buttonLabel}>{formLabels.submitButton}</Text>
      </Pressable>

      <View style={formStyles.divider} />
    </View>
  );
};

export default RegistrationForm;