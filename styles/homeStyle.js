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
    }
})