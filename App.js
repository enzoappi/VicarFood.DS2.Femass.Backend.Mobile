import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';

export default class App extends Component {

  state = {
    login: '',
    senha: '',
    visible: false,
    texto: ''

    
  }

  autenicar = () =>{
    if(this.state.login==="admin" && this.state.senha ==="123") {
      this.setState({visible: false, texto: ''})
      alert("Login efetuado")
    }else{
      this.setState({visible: true, texto: 'Login/senha invalidos'})
    }
  }

  sair = () => {
    this.setState({visible:false, texto: ''})
  }

  render() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../app/assets/bg_1.jpg')} resizeMode="cover" style={styles.image}>
        <Snackbar
          visible={this.state.visible}
          onDismiss={this.sair}
          action={{
            label: 'Cancelar',
            onPress: () => {
              this.setState({visible: false})
            },
          }}>
            {this.state.texto}
        </Snackbar>
        <View style={{width: "85%", alignSelf:"center"}}>
          <View style={{height: "40%", justifyContent: "top"}}>
            <Text style={{fontWeight: "600",fontSize: 30, alignSelf: "center", color:"#E0CCB3"}}>Login</Text>
          </View>
        <TextInput
        style={{ marginTop: 20 }}
        placeholder= "Login"
        value= { this.state.login }
        onChangeText={ texto => this.setState( {login: texto } ) }
        />
       <TextInput
        style={{ marginTop: 5 }}
        placeholder= "Senha"
        secureTextEntry= "true"
        value= { this.state.senha }
        onChangeText={ texto => this.setState( {senha: texto } ) }
        />
        <Button 
        style={{ marginTop: 5, backgroundColor: "#FDC029" }}
        icon="send" 
        mode="contained" 
        onPress={this.autenicar}>
          Entrar
        </Button>        
        </View>
        </ImageBackground>
      </View>
  )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#E0CCB3",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#E0CCB3"
  },
  button:{
    backgroundColor: "#00ddee",
  }
});



