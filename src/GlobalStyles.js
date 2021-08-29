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
    //Tags Styles

    FlatConTags: {
        width: widthDim,
        paddingHorizontal: 10,
        height: 45,
        elevation: .7,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .25,
        shadowRadius: 10,
        shadowColor: "black",
        borderBottomWidth: .1
    },
    renderFlatTouch: {
        justifyContent: "space-evenly",


    },
    renderFlatTxt: {
        padding: 10,
        color: "grey",

    },
    //Music list styles
})