import {View, Text, Button} from "react-native";

export default function SobreScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sobre Screen</Text>
        <Button
          title='ir para Home'
          onPress={() => props.navigation.navigate('Home')}
        />
        <Button
          title='ir para Produtos'
          onPress={() => props.navigation.navigate('Produtos')}
        />
          <Button
          title='ir para Contato'
          onPress={() => props.navigation.navigate('Contato')}
        />
      </View>
    );
  }