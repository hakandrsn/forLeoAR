import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { styles } from '../Styles/conStyles';
import { uri } from '../Commontype';


const FlatlistCon = () => {
    const [data, setData] = useState({})
    const [musicDataKey, setMusicDataKey] = useState([]);

    const getData = async () => {
        try {
            let response = await fetch(uri)
            let responseData = await response.json()
            setData(responseData.data)
            const musicData = Object.keys(data).map(function (key, index) {
                return {
                    ...data[key],
                    id: key
                }
            })
            setMusicDataKey(musicData)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
        return () => {
        }
    }, [data])
    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={styles.FlatArea}>
                <View style={styles.imageStyleView}>
                    <Image style={styles.imageStyle} source={{ uri: item.thumbUrl }} />
                </View>
                <View style={styles.txtStyle}>
                    <Text style={styles.txtName}>{item.name}</Text>
                    <Text style={styles.txtArtistName}>{item.artistName}</Text>
                    <Text style={styles.txtTags}>#{item.tags[0]}</Text>
                </View>
                <TouchableOpacity style={styles.touchChoose} >
                    <Text style={styles.chooseTxt} >Choose</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.conArea}>
            <FlatList
                style={styles.flatSytle}
                data={musicDataKey}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
export default FlatlistCon
