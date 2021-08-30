import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    conArea: {
        flex: 1,
        margin: 5
    },
    FlatArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",


    },
    imageStyleView: {
        padding: 4,
    },
    imageStyle: {
        height: 50,
        width: 50,
        borderRadius: 15,
        borderColor: "#f5f5f5",
        borderWidth: 3

    },

    txtName: {
        fontSize: 13,
        fontWeight: "500",

    },
    txtArtistName: {
        fontSize: 10,

        color: "#2c2c2c",
        fontWeight: "400",

    },
    txtTags: {
        color: "#2c2c2c",
        fontSize: 10,

        fontWeight: "400",

    },
    txtStyle: {
        position: "absolute",
        left: 65,
        top: 4,
        right:110,

    },
    touchChoose: {
        justifyContent: "space-evenly",
        marginRight: 10,
        borderWidth: 3,
        borderRadius: 20,
        width: 75,
        alignItems: "center",
        height: 30,
        borderColor: "#f8f4ff",
        backgroundColor: "#f8f4ff",
        marginTop: 12,



    },
    chooseTxt: {
        fontSize: 15,
        fontWeight: "300"
    },
    flatSytle: {
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: '#ff0000',
    }
})