import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { temaClaro } from 'themes/TemaClaro'
import { useColorScheme } from 'react-native'
import { temaOscuro } from 'themes/TemaOscuro'
import Textos from 'components/screens/Textos'
import Formularios from 'components/screens/Formularios'
import Botones from 'components/screens/Botones'

export default function App() {
  const temaActivo = useColorScheme()
  return (
    <PaperProvider theme={temaActivo === "light" ? temaClaro : temaOscuro}>
      <Botones/>
    </PaperProvider>
  )
}