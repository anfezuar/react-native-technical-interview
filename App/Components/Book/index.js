import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles'

export default class Book extends React.PureComponent {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TouchableOpacity 
                style={styles.item}
                onPress={() => {this.props.navigation.navigate('BookDetails', 
                    {
                        id: this.props.id,
                        author: this.props.author,
                        genre: this.props.genre,
                        image_url: this.props.image_url,
                        publisher: this.props.publisher,
                        title: this.props.title,
                        year: this.props.year,
                    })}}>
                {this.props.image_url ?
                    <Image 
                        source={{uri: this.props.image_url}}
                        style={styles.image}
                    />
                    :
                    <Image 
                        source={require('../../Image/img_book.png')}
                        style={styles.image}
                    />
                }
                <View style={styles.textItem}>
                    <Text style={styles.titulo}>{this.props.title}</Text>
                    <Text style={styles.autor}>{this.props.author}</Text>
                </View>
                
            </TouchableOpacity>
        )
    }
}