import { Picker } from '@react-native-picker/picker'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const RegisterForm = () => {

    const [userName, setUserName] = useState('')
    const [lastName, setLastName] = useState('')
    const [documentType, setDocumentType] = useState('Cédula de ciudadania')
    const [documentNumber, setDocumentNumber] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        console.log("Información del usuario", {userName, lastName, documentType, documentNumber, email})
    }
  return (
    <View style={styles.container}>
        <Text style={styles.header}> Formulario de Registro </Text>
        <TextInput style={styles.input} placeholder='Nombre(s)' value={userName} onChangeText={setUserName}/>
        <TextInput style={styles.input} placeholder='Apellido(s)' value={lastName} onChangeText={setLastName}/>
        <Picker selectedValue={documentType} onValueChange={(itemSelected) =>setDocumentType(itemSelected)} >
            <Picker.Item  label='Cédula de ciudadania' value="Cédula de ciudadania"/>
            <Picker.Item  label='Cédula de extranjera' value="Cédula de extranjera"/>
            <Picker.Item  label='Pasaporte' value="Pasaporte"/>
        </Picker>    
        <TextInput style={styles.input} placeholder='Número de Documento' value={documentNumber} onChangeText={setDocumentNumber}
            keyboardType='numeric'
        />
        <TextInput style={styles.input} placeholder='Correo electrónico' value={email} onChangeText={setEmail}
            keyboardType='email-address'
        />

        <Button title='Registrarse' onPress={handleSubmit} />

    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20
    },

    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: "center"
    },
    
    input: {
        marginBottom: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 3
    }

})

export default RegisterForm
