import { View, Pressable, Text, Button} from "react-native";
import {style} from '../../styles/homeStyle'
import { Link } from 'expo-router'
import {AntDesign, MaterialIcons} from '@expo/vector-icons'
import {useVideoPlayer, VideoView} from 'expo-video'
import { useEvent } from "expo";
import video from '../../assets/videos/meu.mp4'

const videos = video

export default function Home(){

    const player = useVideoPlayer(videos, player => {
        player.loop = true;
        player.play()
    })

    const {isPlaying} = useEvent(player, 'playingChange', {isPlaying : player.playing})
    
    return(
        <>
        <View style={style.searchContainer}>
            <Link push href={'/live'} style={style.backgroundSearch}><MaterialIcons name="live-tv" size={24} color="white" /></Link>
            <Link push href={"/seguindo"} selectable style={style.textSearch}>Seguindo</Link>
            <Link push href={"#"} selectable style={style.textSearch}>Pra você</Link>
            <Link push href={"/search"} style={style.backgroundSearch}><AntDesign name="search1" size={24} color="white" /></Link>
        </View>
        <View style={style.videoContainer}>
            <VideoView style={style.videoContainer} player={player} allowsFullscreen allowsPictureInPicture />
        </View>
        </>
    )
}