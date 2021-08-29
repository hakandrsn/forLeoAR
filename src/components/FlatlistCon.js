import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { styles } from '../GlobalStyles';

const Flat = () => {
    const [data, setData] = useState({})
    const [showData, setShowData] = useState([]);

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
    useEffect(() => {
        getData();
        return () => {
            //  console.log(showData)
        }
    }, [])

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
                    data={showData}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}


                />
            </SafeAreaView>
        )
    }

    export default Flat
