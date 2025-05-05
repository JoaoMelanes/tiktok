import { Tabs } from 'expo-router'
import {AntDesign, Ionicons, Feather, FontAwesome6} from '@expo/vector-icons'

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {backgroundColor: "black"},
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray"
        }}>
            <Tabs.Screen name='index' options={{
                title: "Inicio",
                tabBarIcon: ({color}) => <FontAwesome6 name="house" size={24} color={color} />,
            }}/>
            <Tabs.Screen name='friends' options={{
                title: "Amigos",
                tabBarIcon: ({color}) => <Feather name="users" size={24} color={color} />,
            }}/>
            <Tabs.Screen name='addVideos' options={{
                title: "",
                tabBarIcon: ({color}) => <AntDesign name="plus" size={24} color={color} />,
                tabBarIconStyle: {
                    backgroundColor: "white",
                     width:"60%",
                      borderRadius:10,
                       borderLeftColor:"#06f2ea",
                        borderLeftWidth: 3,
                         borderRightColor:"#f80653",
                          borderRightWidth: 3,
                    },
                tabBarActiveTintColor: "black"
            }}/>
            <Tabs.Screen name='message' options={{
                title: "Caixa de entrada",
                tabBarIcon: ({color}) => <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />,
            }}/>
            <Tabs.Screen name='perfil' options={{
                title: "Perfil",
                tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />,
            }}/>
        </Tabs>
    )
}