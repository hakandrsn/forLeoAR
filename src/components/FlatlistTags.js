import React, { useState, useEffect } from 'react'
import {Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from '../GlobalStyles';

const FlatlistTags = () => {
    const [data, setData] = useState({})
    const [showData, setShowData] = useState([]);
    const [musicType, setMusicType] = useState()



    const getData = async () => {
        try {
            const uri = "https://gist.githubusercontent.com/ardalahmet/5eb3126d9a9d9ca1c689f3ee309e2972/raw/bdabb92aa83ed3ea8354a8015660fa444228e12a/musicData.json"
            let response = await fetch(uri)
            let responseData = await response.json()
            setData(responseData.data)
            const result1 = Object.keys(data).map(function (key, index) {
                return {
                    ...data[key],
                    id: key
                }
            })
            setShowData(result1)
        } catch (error) {
            console.log(error);
        }
    }
    //I listed every tags
    let obj = [];
    const filt = () => {
        for (let i = 0; i < showData.length; i++) {
            for (let j = 0; j < showData[i].tags.length; j++) {
                let list = [];
                list = showData[i].tags[j]
                obj.push(list)
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
        setMusicType(layout)

    }

    useEffect(() => {
        getData();
        filt();
        repeat();
        return () => {
            //    console.log(musicType)
        }
    }, [])

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
                data={musicType}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

export default FlatlistTags
