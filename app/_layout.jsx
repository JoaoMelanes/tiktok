import { Stack } from 'expo-router'
import { View, Text, StatusBar } from 'react-native'

export default function RootLayout(){

  return(
    <>
    <StatusBar barStyle='light-content' backgroundColor="black" />
    <Stack>
      
      <Stack.Screen name='(tabs)' options={{headerShown: false}}/>

    </Stack>
  </>
  )
}