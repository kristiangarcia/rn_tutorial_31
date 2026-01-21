import { View } from 'react-native'
import React from 'react'
import { Divider, Text, useTheme } from 'react-native-paper'

export default function Textos() {
    const tema = useTheme()
    return (
        <View className='flex-1' style={{backgroundColor:tema.colors.background}}>
            <Text variant="displayLarge">Portada grande</Text>
            <Text variant="displayMedium">Portada mediana</Text>
            <Text variant="displaySmall">Portada pequeña</Text>
            <Divider/>
            <Text variant="headlineLarge">Encabezado grande</Text>
            <Text variant="headlineMedium">Encabezado mediano</Text>
            <Text variant="headlineSmall">Encabezado pequeño</Text>
            <Divider/>
            <Text variant="titleLarge">Título grande</Text>
            <Text variant="titleMedium">Título mediano</Text>
            <Text variant="titleSmall">Título pequeño</Text>
            <Divider/>
            <Text variant="bodyLarge">Texto grande</Text>
            <Text variant="bodyMedium">Texto mediano</Text>
            <Text variant="bodySmall">Texto pequeño</Text>
            <Divider/>
            <Text variant="labelLarge">Etiqueta grande</Text>
            <Text variant="labelMedium">Etiqueta mediano</Text>
            <Text variant="labelSmall">Etiqueta pequeño</Text>
        </View>
    )
}