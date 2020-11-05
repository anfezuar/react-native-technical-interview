import { Platform } from 'react-native';
import {Colors, Fuentes} from '../../Themes';

export default styles = {
    header: {
        width: '100%',
        height: 120,
        marginBottom: 20,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    imageHeader: {
        width: '100%',
        height: '100%',
        //justifyContent: 'space-between',
        //flexDirection: 'column',
        alignItems: 'center',
    },
    imageContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        color: Colors.third,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: Fuentes.fuente,
    },
    textInput: {
        //marginTop: 20,
        //fontFamily: Fuentes.fuente,
        paddingHorizontal: 10,
        width: 300,
        height: Platform.OS === 'ios' ? 30: 35,
        borderRadius: 5,
        backgroundColor: Colors.third,
        marginRight: 10,
    },
    buscador: {
        marginTop: -30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logout: {
        flexDirection: 'row',
    }
}