
import { useState } from 'react';
import { StyleSheet, View,SafeAreaView,Image, Text, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  const [gasolina,setGasolina] = useState(0);
  const [alcool,setAlcool] = useState(0);

 function calcular(){
    let valor =alcool/gasolina;
    if(valor>0.7){
      console.log('Gasolina compensa mais');
    }
    else{
      console.log('Alcool Compensa mais');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.areaimage}>
        <Image
        source={require('./src/assets/logo.png')}
        style={styles.image}
        />
        <Text style={styles.imageText}>Qual melhor opção?</Text>
      </View>
      <View style={styles.areaInput}>
      <Text style={{color: '#FFF',marginBottom:10}}>Álcool (preço por litro):</Text>
      <TextInput
      style={styles.input}
      placeholder='Ex: 3,20'
      value={alcool}
      onChangeText={(valor) => setAlcool(valor)}
      />
       <Text style={{color: '#FFF',marginTop:10,marginBottom:10}}>Gasolina (preço por litro):</Text>
      <TextInput
      style={styles.input}
      placeholder='Ex: 2,20'
      value={gasolina}
      onChangeText={(valor) => setGasolina(valor)}
      />

      <TouchableOpacity style={styles.button} onPress={() => calcular()}>
      <Text style={{color: '#FFF',fontSize:20}}>Calcular</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212022',
  },
  areaimage:{
alignItems: 'center',
justifyContent: 'center'
  },
  image:{
    marginTop:40,
    width:200,
    height:200
  },
  imageText:{
    marginTop:20,
    color: '#FFF',
    fontSize:20
  },
  areaInput:{
    marginTop:60,
    margin:10,
    justifyContent: 'center'
  },
  input:{
    backgroundColor: '#FFF',
    fontSize:18,
    borderWidth:1,
    padding:10,
    borderRadius:5
  },
  button:{
    marginTop:10,
    backgroundColor: '#fb4b57',
    borderRadius:5,
    borderWidth:1,
    padding:10,
    alignItems: 'center'
  }

});
