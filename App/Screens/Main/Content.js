import React from 'react';
import {View, Modal, Text, TouchableOpacity} from 'react-native';

import Header from '../../Components/Header';
import ListBooks from '../../Components/ListBooks';
import NavBar from '../../Components/NavBar';
import Loading from '../../Components/Loading';
import styles from './styles';
import {ApplicationStyles} from '../../Themes';
import Icon from 'react-native-vector-icons/Ionicons';

class Main extends React.PureComponent {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.setLoading(true);
    this.props.getBooks('');
    this.props.setLoading(false);
    console.log("usuario", this.props.user)
  }

  render(){
    return(
      <View style={styles.viewList}>
        <Modal
          style={styles.modal}
          animationType="slide"
          transparent={true}
          visible={this.props.modal}>
          <View style={styles.viewModal}>
            <View style={styles.intermodal}>
              <Text style={styles.titulo}>Hola {this.props.user.nombre}!</Text>
              <Text style={styles.texto}>Gracias por usar nuestra App</Text>
              <Text style={styles.texto}>Este item estara activo proximamente</Text>
              <Icon name="happy-outline" style={[ApplicationStyles.icono, {marginTop: 10, fontSize: 40}]} />
              <TouchableOpacity style={styles.btncerrar} onPress={() => this.props.setModal(false)}>
                <Icon name="ios-close" style={[ApplicationStyles.icono, {fontSize: 30}]} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.lista}>
          <ListBooks navigation={this.props.navigation} listBooks={this.props.list}/>
        </View>
        
        <Header getBooks={this.props.getBooks} setLoading={this.props.setLoading} navigation={this.props.navigation} />
        {/* <View style={styles.positionnavbar}>
          
        </View> */}
        <NavBar setModal={this.props.setModal} />  
        <Loading loading={this.props.loading} />
      </View>
    )
  }
}

export default Main
