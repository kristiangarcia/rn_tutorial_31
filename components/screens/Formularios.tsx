import { View } from 'react-native'
import React, { useState } from 'react'
import { useTheme, Checkbox, HelperText, RadioButton, Searchbar, Text, TextInput } from 'react-native-paper'

export default function Formularios() {
    const tema = useTheme()
    const [edad, setEdad] = useState("")
    const [errorEdad, setErrorEdad] = useState("")
    const [contraseñaOculta, setContraseñaOculta] = useState(true)
    const [textoBusqueda, setTextoBusqueda] = useState("")
    const [terminosLeidos, setTerminosLeidos] = useState(false)
    const [cursoSeleccionado, setCursoSeleccionado] = useState("")
    
    function validarEdad(){
        const validadorEdad = /^\d+$/
        setErrorEdad(validadorEdad.test(edad) ? "" : "La edad no es un número válido")
    }

    return (
        <View className='flex-1 p-4' style={{backgroundColor:tema.colors.background}}>
            <Text variant="titleLarge">Formularios</Text>
            <TextInput label="Nombre" mode='flat'/>
            <TextInput label="Edad" value={edad} onChangeText={setEdad} mode="outlined" onBlur={validarEdad}/>
            <HelperText type="error" visible={errorEdad!==""}>{errorEdad}</HelperText>
            <TextInput
                label="Contraseña"
                mode='outlined'
                secureTextEntry={contraseñaOculta}
                right={<TextInput.Icon
                    icon={contraseñaOculta?"eye-off":"eye"}
                    onPress={()=>setContraseñaOculta(!contraseñaOculta)}/>
                }
            />
            <Searchbar
                value={textoBusqueda}
                onChangeText={setTextoBusqueda}
                placeholder='Buscar cursos'
            />
            <View className='flex-tow items-center'>
                <Checkbox status={ terminosLeidos?"checked" : "unchecked" }
                            onPress={() => setTerminosLeidos(!terminosLeidos)}/>
                <Text>He leído y acepto los términos</Text>
            </View>
            <RadioButton.Group value={cursoSeleccionado} onValueChange={setCursoSeleccionado}>
                <View className='flex-row items-center'>
                    <RadioButton value='1dam'/>
                    <Text>1º Desarrollo Multiplataforma</Text>
                </View><View className='flex-row items-center'>
                    <RadioButton value='2dam'/>
                    <Text>2º Desarrollo Multiplataforma</Text>
                </View><View className='flex-row items-center'>
                    <RadioButton value='otro'/>
                    <Text>Otro curso</Text>
                </View>
            </RadioButton.Group>
            <TextInput
                mode="outlined" label="Observaciones" style={{height:120}}
                maxLength={200} multiline={true} numberOfLines={4}
            />
        </View>
    )
}