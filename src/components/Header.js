import React from 'react'
import {Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from '../GlobalStyles'


const Header = () => {
    return (
        <SafeAreaView style={styles.HeaderBar}>
            <TouchableOpacity style={styles.HeaderBarCancel}>
                <Text style={styles.HeaderTxtSide}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.HeaderTxt}>Choose Music</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.HeaderBarDone}>
                <Text style={styles.HeaderTxtSide}>Done</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Header
