import { LinkingContext } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    videoContainer: {
        height: "100%",
        with: "100%",
        backgroundColor: "black"
    },
    searchContainer: {
        display: 'flex',
        flexDirection: "row",
        width: "100%",
        justifyContent:'space-between',
        alignItems: "center",
        position:"absolute",
        zIndex: 999999,
        padding:15,
        backgroundColor:"transparent"
    },
    textSearch: {
        fontWeight: "bold",
        fontFamily:"helvetica",
        color:"white",
        margin: -80,
        fontSize: 16
    },
    visibiliteSearchText: {
        fontWeight: "bold",
        fontSize:14,
        fontFamily:"helvetica",
        color: 'gray',
        margin: -80  
    },
    playButton: {
        marginTop: 40,
        marginLeft:20,
        zIndex:99,
        position:'absolute',
        width:"90%",
        height:"80%",
    },
    interactions: {
        zIndex: 999,
        height:100,
        width: 50,
        position: 'absolute',
        display: 'flex',
        flexDirection:'column',
        top:'65%',
        left:'87%',
        marginRight:10,
        alignItems: 'center' 
       },
    btnIterections: {
        marginBottom: 10,
        alignItems: 'center'
    },
    imagePerfil: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor:"white",
        borderWidth: 1,
        marginBottom: 10,
    },
    follow: {
        backgroundColor:'#f80653',
        height:20,
        width:20,
        borderRadius: 50,
        alignItems:'center',
        bottom:'50%',
        position:'absolute'
    },
    colorFollow: {
        color: 'white'
    },
    imagePerfilSb: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginBottom: 10,
    },
    like: {
        color: 'white',
    }
})