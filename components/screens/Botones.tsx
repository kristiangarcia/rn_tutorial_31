import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button, Chip, FAB, IconButton, SegmentedButtons, Snackbar, Switch, Text, ToggleButton } from 'react-native-paper'

export default function Botones() {
    const [switchActivado, setSwitchActivado] = useState(false)
    const [toggleSeleccionado, setToggleSeleccionado] = useState("")
    const [segmentedSeleccionado, setSegmentedSeleccionado] = useState("")
    const [menuDesplegado, setMenuDesplegado] = useState(false)
    const [snackVisible, setSnackVisible] = useState(false)
    return (
        <ScrollView className='flex-1 justify-center p-4'>
            <Text variant='titleMedium'>Botones de texto</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Button onPress={()=>console.log("Pulsado")}>Aceptar</Button>
                <Button onPress={()=>console.log("Pulsado 2")} disabled={true}>Deshabilitado</Button>
                <Button onPress={()=>console.log("Pulsado 3")} icon={"camera"}>Deshabilitado</Button>
                <Button onPress={()=>console.log("Pulsado 4")} loading={true}>Deshabilitado</Button>
            </View>
            <Text variant='titleMedium'>Botones outlined</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Button mode="outlined" onPress={()=>console.log("Pulsado 4")}>Aceptar</Button>
                <Button mode="outlined" onPress={()=>console.log("Pulsado 5")} disabled={true}>Deshabilitado</Button>
                <Button mode="outlined" onPress={()=>console.log("Pulsado 6")} icon={"camera"}>Deshabilitado</Button>
                <Button mode="outlined" onPress={()=>console.log("Pulsado 7")} loading={true}>Deshabilitado</Button>
            </View>
            <Text variant='titleMedium'>Botones contained</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Button mode="contained" onPress={()=>console.log("Pulsado 4")}>Aceptar</Button>
                <Button mode="contained" onPress={()=>console.log("Pulsado 5")} disabled={true}>Deshabilitado</Button>
                <Button mode="contained" onPress={()=>console.log("Pulsado 6")} icon={"camera"}>Deshabilitado</Button>
                <Button mode="contained" onPress={()=>console.log("Pulsado 7")} loading={true}>Deshabilitado</Button>
            </View>
            <Text variant='titleMedium'>Botones tonales</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Button mode="contained-tonal" onPress={()=>console.log("Pulsado 9")}>Aceptar</Button>
                <Button mode="contained-tonal" onPress={()=>console.log("Pulsado 9")} disabled={true}>Deshabilitado</Button>
                <Button mode="contained-tonal" onPress={()=>console.log("Pulsado 10")} icon={"camera"}>Deshabilitado</Button>
                <Button mode="contained-tonal" onPress={()=>console.log("Pulsado 11")} loading={true}>Deshabilitado</Button>
            </View>
            <Text variant='titleMedium'>Otros botones</Text>
            <View className='flex-row px-4 flex-wrap'>
                <IconButton mode="contained" icon="camera"/>
                <IconButton mode="contained-tonal" icon="camera"/>
                <IconButton mode="outlined" icon="camera"/>
                <IconButton icon="camera"/>
                <Switch value={switchActivado} onValueChange={setSwitchActivado}/>
            </View>
            <Text variant='titleMedium'>Avatares</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Avatar.Image source={require("../../assets/favicon.png")} size={48}/>
                <Avatar.Icon icon="account" size={48}/>
                <Avatar.Text label="JD" size={48}/>
            </View>
            <Text variant='titleMedium'>Chips</Text>
            <View className='flex-row px-4 flex-wrap'>
                <Chip>normal</Chip>
                <Chip selected={true}>seleccionado</Chip>
                <Chip icon="camera">con icono</Chip>
                <Chip onPress={()=>console.log("pulsado el chip")}>pulsable</Chip>
                <Chip onPress={()=>setSnackVisible(true)}>cerrable</Chip>
            </View>
            <Text variant='titleMedium'>Toggle buttons</Text>
            <View className='flex-row px-4 flex-wrap'>
                <ToggleButton.Row value={toggleSeleccionado} onValueChange={setToggleSeleccionado}>
                    <ToggleButton icon="format-align-left" value="izquierda"/>
                    <ToggleButton icon="format-align-center" value="centro"/>
                    <ToggleButton icon="format-align-right" value="derecha"/>
                </ToggleButton.Row>
            </View>
            <Text variant='titleMedium'>Segmented buttons</Text>
            <View className='flex-row px-4 flex-wrap'>
                <SegmentedButtons
                    value={segmentedSeleccionado}
                    onValueChange={setSegmentedSeleccionado}
                    buttons = {[
                        { label: "Opción 1", value: "op1"},
                        { label: "Opción 2", value: "op2"},
                        { label: "Opción 3", value: "op3"}
                    ]}
                />
            </View>
            <FAB
                icon="plus"
                label="Añadir"
                onPress={()=>console.log("FAB pulsado")}
                style={styles.fab}
            />
            <FAB.Group
                open={menuDesplegado}
                visible={true}
                icon={menuDesplegado ? "minus" : "plus"}
                backdropColor='rgba(0,0,0,0.8'
                onStateChange={()=> setMenuDesplegado(!menuDesplegado)}
                actions={[
                    {icon:"email", label:"Correo", onPress: ()=>console.log("Correo pulsado")},
                    {icon:"email", label:"Cámara", onPress: ()=>console.log("Cámara pulsada")},
                    {icon:"email", label:"Reenviar", onPress: ()=>console.log("Reenviar pulsado")}
                ]}
            />
            <Snackbar visible={snackVisible} onDismiss={()=>setSnackVisible(false)}
                    duration={Snackbar.DURATION_SHORT}
                    action={{
                        label:"Aceptar",
                        onPress: () => {
                            console.log("Pulsada la acción del Snackbar")
                            setSnackVisible(false)
                        }
                    }}>
                <Text>El botón ha sido pulsado</Text>
            </Snackbar>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    fab:{
        position:"absolute",
        margin:16,
        left:0,
        bottom:0
    }
})