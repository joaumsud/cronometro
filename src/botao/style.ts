import {StyleSheet} from 'react-native'

export const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao:{
        borderWidth: 2,
        width: '85%',
        height: 50,
        borderRadius: 50,
        borderColor: 'white',
        backgroundColor: 'white'
    },
    texto: {
        color: "#6B91E3",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 12
    }
})