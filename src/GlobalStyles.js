import React from "react"
import { widthDim, heightDim } from './utils/Dimensions'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    // App Styles
    container: {
        flex: 1,

    },
    //Header Styles

    HeaderBar: {
        flexDirection: "row",
        width: widthDim,
        flex: .12,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottomWidth: .2
    },
    HeaderBarCancel: {
        marginRight: 45
    },
    HeaderBarChoose: {

    },
    HeaderBarDone: {
        marginLeft: 45
    },
    HeaderTxt: {
        fontSize: 17,
        fontWeight: "bold",

    },
    HeaderTxtSide: {
        fontSize: 14,
        fontWeight: "400"
    },

})