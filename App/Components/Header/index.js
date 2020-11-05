import React, {useState} from 'react';
import {View, Image, ImageBackground, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {ApplicationStyles} from '../../Themes';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationActions, StackActions} from 'react-navigation';

export default class Header extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      search: false,
      title: '',
    }
  }

  async onSearch(){
    this.props.setLoading(true);
    await this.props.getBooks(this.state.title);
    this.props.setLoading(false);
  }

  onPressSearch(){
    if(this.state.search){
      this.props.setLoading(true);
      this.props.getBooks('');
      this.props.setLoading(false);
      this.setState({search: false});
    }
    else {
      this.setState({search: true});
    }
  }

  onPressLogout(){
      if(this.removeItemValue('userData')){
        this.props.navigation.dispatch(
          StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: 'Login'})],
          }),
        );
      }
  }

  async removeItemValue(key) {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
  }

  render(){
    return(
      <View style={styles.header}>
        <ImageBackground source={require('../../Image/bc_nav_bar.png')} style={styles.imageHeader}>
          <View style={styles.imageContent}>
          {this.props.type === 'main' ?
            <TouchableOpacity>
              <Icon name="notifications" style={ApplicationStyles.icono} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
              <Icon name="chevron-back" style={ApplicationStyles.icono} />
            </TouchableOpacity>
          }
            <Text style={styles.title}>{this.props.title}</Text>
          {this.props.type === 'main' ?
            <View style={styles.logout}>
              <TouchableOpacity onPress={() => {this.onPressSearch()}}>
                <Icon name="search" style={ApplicationStyles.icono} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.onPressLogout()}}>
                <Icon name="log-out-outline" style={ApplicationStyles.icono} />
              </TouchableOpacity>
            </View>
            :
            <View></View>
          }
          </View>
          {this.state.search &&
            <View style={styles.buscador}>
              <TextInput
                placeholder="Buscar Nombre"
                style={styles.textInput}
                onChangeText={(text) => {this.setState({title: text})}}
                value={this.state.title}
              />
              <TouchableOpacity onPress={() => {this.onSearch()}}>
                <Icon name="search" style={ApplicationStyles.icono} />
              </TouchableOpacity>
            </View>
          }
        </ImageBackground>
      </View>
    )
  }
}

Header.defaultProps = {
  type: 'main',
  title: 'LIBRARY',
}