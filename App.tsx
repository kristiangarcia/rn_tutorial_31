import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { temaClaro } from 'themes/TemaClaro'
import { useColorScheme } from 'react-native'
import { temaOscuro } from 'themes/TemaOscuro'
import Textos from 'components/screens/Textos'
//import Botones from 'components/screens/Botones'
//import Formularios from 'components/screens/Formularios'

import './global.css'

export default function App() {
  const temaActivo = useColorScheme()
  return (
    <PaperProvider theme={temaActivo === "light" ? temaClaro : temaOscuro}>
      <Textos/>
      {/* <Botones/> */}
      {/* <Formularios/> */}
    </PaperProvider>
  )
}