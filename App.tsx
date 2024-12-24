import React, {useState, useEffect} from 'react';
import { View } from "react-native";
import Cronometro from "./src/cronometro";
import Botao from "./src/botao";
import Contador from "./src/contador";
import Historico from './src/historico';

export default function App() {

  const [contador, setContador] = useState<number>(0.00);
  const [ativo, setAtivo] = useState<boolean>(false);
  const [ultimoValor, setUltimoValor] = useState<number>(0.00);


  useEffect(() => {
    let intervalo: NodeJS.Timeout | undefined;
    if (ativo) {
      intervalo = setInterval(() => {
        setContador((prev) => prev + 0.01);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [ativo]);
  
  const alterarContador = () => setAtivo((prev)=>!prev);

  const zerarContador =() => {
    setUltimoValor(contador);
    setAtivo(false);
    setContador(0.00);
  }


  return (
    <View style={{ flex: 1, backgroundColor: "#6B91E3" }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Cronometro />
        <Contador contador={contador}/>
        <Historico  ultimoValor={ultimoValor}/>
      </View>
      
      <View style={{ flex: 1, padding: 40, flexDirection: "row" }}>
        <Botao onPress={alterarContador}>
          {ativo ? 'Parar': 'Iniciar'}
        </Botao>
        <Botao onPress={zerarContador}>Zerar</Botao>
      </View>
    </View>
  );
}