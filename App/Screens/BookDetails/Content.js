import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, Platform} from 'react-native';
import styles from './styles';
import Header from '../../Components/Header';
import Loading from '../../Components/Loading';
import Server from '../../Config/Server';


export default class extends React.PureComponent {
    constructor(props){
        super(props);
        console.log("ID", this.props.navigation.getParam('id'));
        console.log(this.props.navigation.getParam('genre'));
        this.state = {
            id: this.props.navigation.getParam('id'),
            author: this.props.navigation.getParam('author'),
            genre: this.props.navigation.getParam('genre'),
            image_url: this.props.navigation.getParam('image_url'),
            publisher: this.props.navigation.getParam('publisher'),
            title: this.props.navigation.getParam('title'),
            year: this.props.navigation.getParam('year'),
            books: [],
        }
    }

    componentDidMount(){
        /* const books = this.getBooks;
        this.setState({books}); */
        this.props.setLoading(true);
        fetch('http://'+Server.servidor+':'+Server.puerto+'/books')
          .then((response) => response.json())
          .then((allbooks) => {
            const books = [];
            //console.log(allbooks);
            for (let index = 0; index < allbooks.length; index++) {
                if(allbooks[index].genre === this.state.genre){
                    //if(allbooks[index].title !== this.state.title){
                        books.push(allbooks[index]);
                    //}
                }
            }
            this.setState({books})
            this.props.setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            this.props.setLoading(false);
          });
      }

      

    renderSugerencias = () => {
        return this.state.books.map((item) => {
            return (
                <View style={styles.viewImageGenre}>
                    <TouchableOpacity onPress={() => {console.log("navigation"); this.setState( 
                        {
                            id: item.id,
                            author: item.author,
                            genre: item.genre,
                            image_url: item.image_url,
                            publisher: item.publisher,
                            title: item.title,
                            year: item.year,
                        })}}>
                        {item.image_url ?
                            <Image source={{uri: item.image_url}} style={styles.imageGenre} />
                            :
                            <Image source={require('../../Image/img_book.png')} style={styles.imageGenre} />
                        }
                        
                    </TouchableOpacity>
                </View>
            )
        })
    }

    render(){
        return(
            <View style={styles.viewBookDetails}>
                
                {this.state.image_url ?
                    <ImageBackground source={{uri: this.state.image_url}} style={styles.imageBg}>
                        <View style={styles.viewBg}></View>
                    </ImageBackground>
                    :
                    <ImageBackground source={require('../../Image/img_book.png')} style={styles.imageBg}>
                    <View style={styles.viewBg}></View>
                    <View style={styles.viewImage}>
                        <Text style={styles.title}>{this.state.title}</Text>
                            <Image source={require('../../Image/img_book.png')} style={styles.imageBook} />
                        </View>
                    </ImageBackground>
                }
                <Text style={styles.title}>{this.state.title}</Text>
                <View style={Platform.OS === 'ios' && styles.layoutios}>
                    <View style={styles.viewImage}>
                        
                        <Image source={{uri: this.state.image_url}} style={styles.imageBook} />
                    </View>
                    <View style={styles.viewDetails}>
                        <Text style={styles.textDetails}>Autor: {this.state.author}</Text>
                        <Text style={styles.textDetails}>Genero: {this.state.genre}</Text>
                        <View style={{flexDirection: 'row'}}><Text style={styles.textDetails}>Año:</Text><Text style={{fontSize: 13}}>{this.state.year}</Text></View>
                        <Text style={styles.textDetails}>Editorial: {this.state.publisher}</Text>
                    </View>
                </View>
                
                <View style={styles.sugerencias}>
                    <Text style={styles.textSugerencias}>Sugerencias</Text>
                    <View style={styles.itemssugerencias}>
                    {this.renderSugerencias()}
                    {/* <FlatList 
                        data={this.state.books}
                        //numColumns={4}
                        //style={styles.booksListD}
                        horizontal={true}
                        renderItem={({item}) => (
                            <BookD 
                                {...item}
                                navigation={this.props.navigation}
                            />
                        )}
                        keyExtractor={(item) => item.id.toString}
                    /> */}
                    </View>
                </View>
                
                <Header type="details" title="DETAILS" navigation={this.props.navigation}/>

                <Loading loading={this.props.loading} />
            </View>
        )
    }
}

class BookD extends React.PureComponent {
    render(){
        return (
            <View style={styles.viewImageGenre}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookDetails', 
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
                        <Image source={{uri: this.props.image_url}} style={styles.imageGenre} />
                        :
                        <Image source={require('../../Image/img_book.png')} style={styles.imageGenre} />
                    }
                    
                </TouchableOpacity>
            </View>
        )
    }
}