import React, {ReactNode} from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import { s } from './style'

interface BotaoProps{
    onPress: ()=> void;
    children: ReactNode;
}

export default function Botao({onPress, children}: BotaoProps){
    return(
        <View style={s.container}>
             <TouchableOpacity style={s.botao} onPress={onPress} >
                <Text style={s.texto}>{children}</Text>
            </TouchableOpacity>
        </View>
    )   
}