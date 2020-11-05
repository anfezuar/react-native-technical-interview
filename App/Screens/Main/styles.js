import { Platform } from 'react-native';
import {Colors, Fuentes} from '../../Themes';

export default styles = {
    viewList: {
        backgroundColor: Colors.bgcolor,
        flexDirection: 'column',
        flex: 1,
    },
    positionnavbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    textInput: {
        marginTop: 20,
        paddingHorizontal: 10,
        width: '70%',
        height: 30,
        borderRadius: 5,
        backgroundColor: Colors.third,
        fontFamily: Fuentes.fuente,
    },
    loading: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.opacodark,
    },
    lista: {
        marginBottom: Platform.OS === 'ios' ? 85: 50,
        marginTop: 130,
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    viewModal: {
        width: '70%',
        height: '40%',
        backgroundColor: Colors.primary,
        alignSelf: 'center',
        marginTop: '40%',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    intermodal: {
        width: '94%',
        height: '94%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.third,

        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: Colors.third,
        fontSize: Fuentes.titulo,
        fontFamily: Fuentes.fuente,
    },
    texto: {
        color: Colors.third,
        fontSize: Fuentes.texto,
        fontFamily: Fuentes.fuente,
    },
    btncerrar: {
        position: 'absolute',
        top: 5,
        right: 5,
    }
}