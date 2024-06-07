import {View, Text, Button} from "react-native";

export default function ProdutosScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Produtos Screen</Text>
        <Button
          title='ir para Home'
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title='ir para Sobre'
          onPress={() => props.navigation.navigate('Sobre')}
        />
          <Button
          title='ir para Contato'
          onPress={() => props.navigation.navigate('Contato')}
        />
      </View>
    );
  }
  