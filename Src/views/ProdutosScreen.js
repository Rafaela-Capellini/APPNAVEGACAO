import { View, Text, Button, FlatList, StyleSheet } from "react-native";

import produtos from "../data/dados";
import { Divider, List } from "react-native-paper";


export default function ProdutosScreen(props) {
  function getProdutoItem({ item: prod }) {
    return (
      <View>
        <List.Item style={estilos.listItem}
          title={prod.nome}
          description={prod.preco}
          left={() => <List.Image variant="image"
            source={{ uri: prod.linkImagem }}
          />}
        />
        <Divider />
      </View>
    )

  }
  return (
    <View style={estilos.container}>
      <FlatList
        data={produtos}       //data indica onde os dados estão vindo
        keyExtractor={prod => prod.id}   //ele espera uma função (usar o produto id)
        renderItem={getProdutoItem}        //renderiza o componente
        style={estilos.flatList}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  flatList: {
    width: "95%"
  }
})