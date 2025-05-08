import { Pressable, View, Text } from "react-native";
import {style} from '../../styles/homeStyle'
import { Link } from 'expo-router'
import {AntDesign, MaterialIcons, FontAwesome6, FontAwesome} from '@expo/vector-icons'
import {useVideoPlayer, VideoView} from 'expo-video'
import { useEvent } from "expo";
import { Image } from "expo-image";
import Perfil from '../../assets/images/perfil.png' 
import video from '../../assets/videos/meu.mp4'
import { useState } from "react";

const videos = video

export default function Home(){

    const player = useVideoPlayer(videos, player => {
        player.loop = true;
        player.play()
    })

    const {isPlaying} = useEvent(player, 'playingChange', {isPlaying : player.playing})
    
    const [like, setLike] = useState(0)
    const [verificationLike, setVerificationLike] = useState(false)

    const Like = (verificationLike) => {

        if(verificationLike === false){
            setLike(like + 1)
            setVerificationLike(true)
        }else{
            setLike(like)
        }

    }

    console.log(like)
    console.log(verificationLike)

    return(
        <>
        <View style={style.searchContainer}>
            <Link push href={'/live'} style={style.backgroundSearch}><MaterialIcons name="live-tv" size={24} color="white" /></Link>
            <Link push href={"/seguindo"} style={style.textSearch}>Seguindo</Link>
            <Link push href={"#"} style={style.textSearch}>Pra você</Link>
            <Link push href={"/search"} style={style.backgroundSearch}><AntDesign name="search1" size={24} color="white" /></Link>
        </View>
        <View style={style.videoContainer}>
            <VideoView style={style.videoContainer} player={player}  allowsPictureInPicture={false} contentFit="cover" nativeControls={false}/>
            <Pressable onPress={() => isPlaying ? player.pause() : player.play()} style={style.playButton}></Pressable>
        </View>
        <View style={style.interactions}>
            <Pressable style={style.btnIterections}>
                <Image
                style={style.imagePerfil}
                source={Perfil}
                contentFit="cover"
                transition={1000}
                />
            </Pressable>

            <Pressable style={style.follow} >
                <Text style={style.colorFollow}>+</Text>
            </Pressable>

            <Pressable onPress={ () => Like(verificationLike) } style={style.btnIterections}>
                <AntDesign name="heart" size={30} color="white" />
                <Text style={style.like}>{like}</Text>
            </Pressable>

            <Pressable style={style.btnIterections}>
                <FontAwesome name="commenting" size={30} color="white" />
            </Pressable>

            <Pressable style={style.btnIterections}>
                <FontAwesome6 name="font-awesome-flag" size={30} color="white" />
            </Pressable>

            <Pressable style={style.btnIterections}>
                <FontAwesome name="share" size={24} color="white" />
            </Pressable>

            <Pressable style={style.btnIterections}>
                <Image
                    style={style.imagePerfilSb}
                    source={Perfil}
                    contentFit="cover"
                    transition={1000}
                    />
            </Pressable>

        </View>
        </>
    )
}