import React, { useCallback, useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import FormCadastro from "./src/components/UserForm";
import ListaCadastros from "./src/components/UserList";
import { styles } from "./src/Styles/styles";

const dadosInicio = [
  { nomeCompleto: "João Pedro Gurgel", contato: "61 99808-2206" },
  { nomeCompleto: "Nathan Gonçalves", contato: "61 00084-0804"}
];

export default function Aplicativo() {
  const [dadosFormulario, setDadosFormulario] = useState({
    campoNome: "",
    campoTelefone: ""
  });

  const [registros, setRegistros] = useState(dadosInicio);

  const atualizarCampo = useCallback((campo, valor) => {
    setDadosFormulario(prev => ({ ...prev, [campo]: valor }));
  }, []);

  const submeterFormulario = useCallback(() => {
    if (dadosFormulario.campoNome && dadosFormulario.campoTelefone) {
      setRegistros(prev => [
        ...prev,
        {
          nomeCompleto: dadosFormulario.campoNome,
          contato: dadosFormulario.campoTelefone
        }
      ]);
      setDadosFormulario({ campoNome: "", campoTelefone: "" });
    }
  }, [dadosFormulario]);

  const memoizedForm = useMemo(() => (
    <FormCadastro
      valorNome={dadosFormulario.campoNome}
      valorTelefone={dadosFormulario.campoTelefone}
      onChangeNome={(texto) => atualizarCampo("campoNome", texto)}
      onChangeTelefone={(texto) => atualizarCampo("campoTelefone", texto)}
      onPressCadastrar={submeterFormulario}
    />
  ), [dadosFormulario, atualizarCampo, submeterFormulario]);

  const memoizedList = useMemo(() => (
    <ListaCadastros dados={registros} />
  ), [registros]);

  return (
    <View style={styles.container}>
      {memoizedForm}
      <ScrollView>
        {memoizedList}
      </ScrollView>
    </View>
  );
}