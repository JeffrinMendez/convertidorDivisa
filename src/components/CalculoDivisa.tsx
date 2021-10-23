import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
export const CalculoDivisa = () => {
    const [origen, setOrigen] = useState('')

    const [destino, setDestino] = useState('')

    const [convertir, setConvertir] = useState(0);

    const [resultado, setResultado] = useState(0);

    const [AlertOrigen, setAlertOrigen] = useState('')

    const handleChangeConvertir = (texto: string) => {
        const numero = parseFloat(texto)
        setConvertir(numero)
    }
    const handleCalcular = () => {
        if (origen === 'Dolar' && destino === 'Cordoba') {
            const result = convertir * 35.18
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)
        }
        if (origen === 'Dolar' && destino === 'Euro') {
            const result = convertir * 0.86
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)

        }

        else if (origen === 'Cordoba' && destino === 'Dolar') {
            const result = convertir * 0.028
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)
        }
        else if (origen === 'Cordoba' && destino === 'Euro') {
            const result = convertir * 0.024
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)
        }
        else if (origen === 'Euro' && destino === 'Cordoba') {
            const result = convertir * 40.90
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)
        }
        else if (origen === 'Euro' && destino === 'Dolar') {
            const result = convertir * 1.16
            setResultado(result)
            const alerta = ""
            setAlertOrigen(alerta)
        }
        else if (origen === '' && destino === '') {
            const result = 0
            const alerta = "debe llenar todos los espacios"
            setAlertOrigen(alerta)

            setResultado(result)
        }


    }






    return (
        <View>


            <Button
                
                title="Calcular"
                onPress={handleCalcular}
                color='black'
            />
            <Text>Origen</Text>
            <TextInput
                placeholder="Ingrese moneda de origen"
                defaultValue={origen}
                style={styles.input}
                maxLength={7}
                onChangeText={setOrigen}
            />


            <Text>Destino </Text>
            <TextInput
                placeholder="Ingrese moneda de destino"

                defaultValue={destino}
                style={styles.input}
                maxLength={7}
                onChangeText={setDestino}
            />



            <Text>Convertir</Text>
            <TextInput
                defaultValue={convertir.toString()}
                style={styles.input}
                onChangeText={(text) => handleChangeConvertir(text)}
            />

            <Text>Resultado</Text>
            <TextInput
                defaultValue={resultado.toString()}
                style={styles.input}
            />



            <View>

                <Text

                    style={{
                        color: "red",
                        marginTop: 2.5,



                    }}
                >{AlertOrigen}</Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        marginTop: 50,
        paddingLeft:20,
        paddingTop: 20,
        backgroundColor: 'black',
        
    
        marginBottom:30

    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: 'coral'
    }
})