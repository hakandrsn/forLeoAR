import { widthDim, heightDim } from '../utils/Dimensions'
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
})