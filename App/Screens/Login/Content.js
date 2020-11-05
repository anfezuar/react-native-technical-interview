import React from 'react';
import {View, Text, ImageBackground, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker'; 
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationActions, StackActions} from 'react-navigation';
import Server from '../../Config/Server';
import {Colors} from '../../Themes';

const edades = [
  {
    label: '',
    value: '',
  },
  {
    label: '15',
    value: '15',
  },
  {
    label: '16',
    value: '16',
  },
]
    

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            correo: '',
            edad: '<18',
            acepta: false,
            invalido: true,
        }
    }

    componentDidMount(){
        this.getData();
        
    }

    getData = async () => {
        try {
            console.log('GetData')
            const value = await AsyncStorage.getItem('userData')
            if(value !== null) {
              // value previously stored
              console.log('Value', value);
              if(value.id !== ''){
                this.props.setUser(value);  
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: 'Main'})],
                    }),
                );
              }
            }
        } catch(e) {
        // error reading value
        console.log('Error solicitando datos', e)
        }
    } 

    onChangeNombre(nombre){
        this.setState(nombre);
    }

    onChangeApellido(apellido){
        this.setState(apellido);
    }

    onChangeCorreo(correo){
        this.setState(correo);
    }

    onChangeAcepta(acepta){
        console.log("Acepta", acepta)
        this.setState(acepta);
    }

    componentDidUpdate(prevPros, prevState){
        const {nombre, apellido, correo, edad, acepta} = this.state;

        if(prevState.nombre !== this.state.nombre 
            || prevState.apellido !== this.state.apellido
            || prevState.correo !== this.state.correo
            || prevState.edad !== this.state.edad
            || prevState.acepta !== this.state.acepta){
            console.log("Nombre", nombre);
            console.log("Apellido", apellido);
            console.log("Correo", correo);
            console.log("Edad", edad);
            console.log("Acepta Terminos", acepta);
            if(nombre === '' || apellido === '' || correo === ''){
                console.log("No pueden haber campos vacios")
                this.setState({invalido: true});
            }
            else if(this.validate(correo) === false){
                console.log("Correo no valido", correo)
                this.setState({invalido: true});
            }
            else if(!acepta){
                console.log("debe aceptar los terminos y condiciones");
                this.setState({invalido: true});
            }
            else {
                this.setState({invalido: false});
            }
        }
    }

    validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase())
    }

    setData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            AsyncStorage.setItem('userData', jsonValue)
            return true;
          } catch (e) {
            console.log('Error en AsyncStorage', e)
            return false;
          }
    }

    Login = () => {
        const {nombre, apellido, correo, edad, acepta} = this.state;
        /* console.log("Login")
        console.log("Nombre", nombre);
        console.log("Apellido", apellido);
        console.log("Correo", correo);
        console.log("Edad", edad);
        console.log("Acepta Terminos", acepta); */
        fetch('http://'+Server.servidor+':'+Server.puerto+'/sign_in',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                correo: correo,
                edad: edad,
                acepta: acepta,
            }),
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("Data", data);
            if(this.setData(data)){
                this.props.setUser(data);
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: 'Main'})],
                    }),
                );
            }
        })
        .catch((error) => {
            console.log("Error", error);
        });
    }

    render(){
        return(
            <ImageBackground source={require('../../Image/bc_inicio.png')} style={styles.imageBg}>
                <View style={styles.viewLogin}>
                    <Text style={styles.title}>¡Bienvenido!</Text>
                    <Text style={styles.texto}>Si deseas continuar, {"\n"}completa los siguientes datos</Text>
                    
                    <TextInput 
                        style={styles.textInput}
                        value={this.state.nombre}
                        placeholder="Nombre"
                        onChangeText={nombre => this.onChangeNombre({nombre})}
                    />
                    <TextInput 
                        style={styles.textInput}
                        value={this.state.apellido}
                        placeholder="Apellido"
                        onChangeText={apellido => this.onChangeApellido({apellido})}
                    />
                    <TextInput 
                        style={styles.textInput}
                        value={this.state.correo}
                        placeholder="Correo"
                        onChangeText={correo => this.onChangeCorreo({correo})}
                        keyboardType="email-address"
                    />
                    <Text style={[styles.texto, {marginTop: 10}]}>Edad</Text>
                    <View style={styles.viewPicker}>
                        <Picker
                            selectedValue={this.state.edad}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({edad: itemValue})
                            }
                            dropdownIconColor={Colors.third}
                        >
                            <Picker.Item label="Menos de 18" value="<18" />
                            <Picker.Item label="18" value="18" />
                            <Picker.Item label="19" value="19" />
                            <Picker.Item label="20" value="20" />
                            <Picker.Item label="21" value="21" />
                            <Picker.Item label="22" value="22" />
                            <Picker.Item label="23" value="23" />
                            <Picker.Item label="24" value="24" />
                            <Picker.Item label="25" value="25" />
                            <Picker.Item label="26" value="26" />
                            <Picker.Item label="27" value="27" />
                            <Picker.Item label="28" value="28" />
                            <Picker.Item label="29" value="29" />
                            <Picker.Item label="30" value="30" />
                            <Picker.Item label="Mas de 30" value=">30" />
                        </Picker>
                    </View>
                    <View style={styles.aceptaTerminos}>
                        <CheckBox
                            style={styles.checkBox}
                            disabled={false}
                            value={this.state.acepta}
                            onValueChange={(acepta) => this.onChangeAcepta({acepta})}
                            tintColors={{ true: Colors.accentColor, false: Colors.third }}
                        />
                        <Text style={styles.texto}>Acepto términos y condiciones</Text>
                    </View>
                    <TouchableOpacity 
                        style={[styles.btn]} 
                        disabled={this.state.invalido}
                        onPress={this.Login}
                    >
                    
                    
                        {/*<ImageBackground source={require('../../Image/img_main_button.png')} style={styles.imageBtn}>*/}
                            <Text style={styles.textBtn}>Iniciar</Text>
                        {/*</ImageBackground>*/}
                        {this.state.invalido &&
                        <View style={styles.btnDisable}></View>    
                    }
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}