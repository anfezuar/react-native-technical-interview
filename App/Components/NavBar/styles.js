import {Colors} from '../../Themes';

export default styles = {
    navbar: {
        height: 60,
        backgroundColor: Colors.primary,
        color: Colors.third,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 4,
        borderColor: Colors.third,
    },
    iconoNavBar: {
        color: Colors.primary,
        borderRadius: 50,
        borderColor: Colors.bgcolor,
        //padding: 10,
        backgroundColor: Colors.third,
    },
    fondoIcono: {
        //backgroundColor: Colors.third,
        padding: 10,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderColor: Colors.third,
        borderWidth: 5,
    }
}