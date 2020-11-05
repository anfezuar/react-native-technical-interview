import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Book from '../Book';
import styles from '../Header/styles';

export default class ListBooks extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }

  render(){
    return(
      <View style={styles.viewList}>
        <View >
          <FlatList 
            data={this.props.listBooks}
            renderItem={({item}) => (
              <Book 
                {...item}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item, index) => {index.toString()}}
          />
        </View>
        
      </View>
    )
  }
}