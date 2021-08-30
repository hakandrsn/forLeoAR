import React, { useState, useEffect } from 'react'
import {Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../Styles/tagsStyles';
import { uri } from '../Commontype'

const FlatlistTags = () => {
    const [data, setData] = useState({})
    const [musicTags, setMusicTags] = useState([]);
    const [musicTagsData, setMusicTagsData] = useState();
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
            setMusicTags(musicData)
        } catch (error) {
            console.log(error);
        }
    }
    //I listed every tags
    let obj = [];
    const filt = () => {
        for (let i = 0; i < musicTags.length; i++) {
            for (let j = 0; j < musicTags[i].tags.length; j++) {
                let listTags = [];
                listTags = musicTags[i].tags[j]
                obj.push(listTags)
            }
        }
    }
    const repeat = () => {
        const layout = obj.filter((item, index) => {
            return obj.indexOf(item) === index;
        })
        layout.sort();
        layout.unshift("All")
        for (let i = 0; i < layout.length; i++) {
            var j = layout[i].charAt().toUpperCase();
            layout[i] = j + layout[i].substr(1).toLowerCase();
        }
        setMusicTagsData(layout)
    }
    useEffect(() => {
        getData();
        filt();
        repeat();
        return () => {
        }
    }, [data])
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.renderFlatTouch}>
                <Text style={styles.renderFlatTxt}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.FlatConTags}>
            <FlatList
                horizontal={true}
                data={musicTagsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
export default FlatlistTags
