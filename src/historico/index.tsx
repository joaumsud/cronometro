import React from 'react'
import { View, Text } from "react-native";
import { s } from './style'

type HistoricoProps = {
    ultimoValor: number;
}

export default function Historico({ ultimoValor }: HistoricoProps) {
    return(
        <View>
            <Text style={s.texto}>Última contagem: </Text>
            <Text style={s.valor}>{ultimoValor.toFixed(2)} </Text>
        </View>
    )
}