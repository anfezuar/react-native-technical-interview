import { Platform } from 'react-native';
import { Colors, Fuentes } from '../../Themes';

export default styles = {
    imageBg: {
        width: '100%',
        height: 220,
        marginTop: '22%',
    },
    viewBg: {
        width: '100%',
        height: 220,
        backgroundColor: Colors.third,
        opacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.gray,
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageBook: {
        //marginTop: 100,
        width: 150,
        height: 220,
        borderRadius: 5,
        shadowColor: Colors.gray,
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    viewImage: {
        marginTop: -80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        /* shadowColor: Colors.gray,
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, */
    },
    title: {
        fontFamily: Fuentes.fuente,
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: Platform.OS === 'ios' ? -50: -100,
        marginBottom: Platform.OS === 'ios' ? 40: 100,
        color: Colors.secondary,
    },
    viewBookDetails: {
        justifyContent: 'center',
        //alignItems: 'center',
        alignItems: 'stretch',
    },
    viewDetails: {
        
        textAlign: 'center',
        marginTop: 20,
        borderBottomColor: Colors.bgcolor,
        paddingBottom: 10,
        borderBottomWidth: 3,
        alignItems: 'center',
    },
    separador: {
        borderBottomWidth: 1,
        borderColor: Colors.secondary,
        flex: 1,
    },
    imageGenre: {
        height: '100%',
        width: '100%',
        
    },
    viewImageGenre: {
        height: 90,
        width: 60,
        margin: 10,
        shadowColor: Colors.gray,
        shadowColor: Colors.secondary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sugerencias: {
        marginTop: 10,
    },
    textSugerencias: {
        fontSize: 19,
        marginLeft: 10,
        fontFamily: Fuentes.fuente,
    },
    itemssugerencias: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    layoutios: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 65,
    },
    textDetails: {
        fontFamily: Fuentes.fuente,
        fontSize: 16,
    }
}