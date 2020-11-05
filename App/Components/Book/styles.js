import {Colors, Fuentes} from '../../Themes';
export default styles = {
    titulo: {
        fontFamily: Fuentes.fuente,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
    },
    autor: {
        fontFamily: Fuentes.fuente,
        fontSize: 15,
        color: Colors.gray,
        textAlign: 'center',
    },
    image: {
        height: 90,
        width: 60,
    },
    item: {
        flexDirection: 'row',
        margin: 6,
        marginHorizontal: 30,
        backgroundColor: Colors.third,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
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
    textItem: {
        flexDirection: 'column',
        flexBasis: '80%',
    }
}