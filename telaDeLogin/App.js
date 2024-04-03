import { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { Button, TextInput, Text} from 'react-native-paper';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;


export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      
      <View style={styles.Header}>
          <Image source={require('./src/img/logo.png')}/>
          <Text style={{marginLeft: widthScreen*0.6, paddingTop: heightScreen*0.06, color: 'white', fontSize: 16}}>Register</Text>
      </View>

      <InputsLogin style={{backgroundColor: '#000'}}></InputsLogin>

      <View style={{alignItems: 'center'}}>
        <Button style={styles.Button}
          mode='contained'
          buttonColor='#F16D00'
        >REGISTER</Button>
        <View style={{flexDirection: 'row', marginBottom: heightScreen*0.03}}> <Text>Already a member?</Text> <Text style={{color: '#F16D00'}}> Login</Text> </View>
      </View>
    </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
  },
  Inputs: {
    borderRadius: 100,
    width: widthScreen*0.75,
    marginBottom: heightScreen*0.02,
    backgroundColor: 'white',
  },
  Button: {
    borderRadius: 100,
    width: widthScreen*0.75,
    marginBottom: heightScreen*0.05
  },
  viewInputs: {
    alignItems:'flex-end',
    justifyContent:'space-evenly',
  },
  TextStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header: {
    alignItems: 'center',
    justifyContent:'center',
    width: widthScreen,
    height: heightScreen*0.3,
    backgroundColor: '#F16D00',
    borderBottomLeftRadius: widthScreen*0.25
  }
});

const InputsLogin = () => {

  return(
    <View style={styles.viewInputs}>
      <TextInput style={styles.Inputs}
        mode='outlined'
        label="Fullname"
        activeUnderlineColor=''
        underlineColor='none'
        left={<TextInput.Icon icon="account"/>}
      />
      <TextInput style={styles.Inputs}
        mode='outlined'
        label="Email"
        activeUnderlineColor=''
        underlineColor='none'
        left={<TextInput.Icon icon="email"/>}
      />
      <TextInput style={styles.Inputs}
        mode='outlined'
        label="Phone Number"
        activeUnderlineColor=''
        underlineColor='none'
        left={<TextInput.Icon icon="phone"/>}
      />
      <TextInput style={styles.Inputs}
        mode='outlined'
        label="Password"
        activeUnderlineColor=''
        underlineColor='none'
        left={<TextInput.Icon icon="key"/>}
      />
    </View>
  )
}