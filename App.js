
import { useState } from 'react';
import { StyleSheet, View,SafeAreaView,Image, Text, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';

export default function App() {
  const [gasolina,setGasolina] = useState('');
  const [alcool,setAlcool] = useState('');
  const [escolha,setEscolha] = useState('');

 function calcular(){
    let gasolVal = parseFloat(gasolina.replace(',','.'));
    let alcoolVal = parseFloat(alcool.replace(',','.'));
    let valor = alcoolVal/gasolVal;

    if(alcoolVal <= 0 || gasolVal <= 0 || isNaN(alcoolVal) || isNaN(gasolVal)){
      alert('Por favor digite um valor')
      return;
    }
    if(valor>0.7){
      setEscolha('Gasolina')
    }
    else{
      setEscolha('Álcool')
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
      {escolha &&
      <Modal>
        <SafeAreaView style={styles.container}>
        <View style={styles.areaimage}>
          <Image
          source={require('./src/assets/gas.png')}
          style={styles.image}
          />
          <Text style={styles.escolhaText}>Compensa usar {escolha}</Text>
        </View>
        <View style={{marginTop:30,alignItems:'center'}}>
          <Text style={{fontSize:20,color: '#FFF',marginBottom:20,fontWeight:'bold'}}>Com os preços:</Text>
          <Text style={{fontSize:15,color: '#FFF',marginBottom:10}}>Álcool: R$ {alcool.replace('.',',')}</Text>
          <Text style={{fontSize:15,color: '#FFF',marginBottom:40}}>Gasolina: R$ {gasolina.replace('.',',')}</Text>
          <TouchableOpacity style={{padding:10,borderWidth:1,width:'70%',borderColor:'red'}} onPress={() => {setEscolha('')
            setAlcool('')
            setGasolina('')
          }}>
            <Text style={{color:'red',textAlign:'center'}}>Calcular novamente</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </Modal>
}
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
  },
  escolhaText:{
    marginTop:30,
    fontSize:24,
    color: '#00FF00'
  }

});
