import { Link, Stack } from "expo-router"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View style={styles.container}>
                <Text style={styles.text}>Not Found</Text>
                <Link style={styles.text} href="/">
                    Head Home
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: "5rem",
        marginTop: -100,
        backgroundColor: "#25292e"
    },
    text: {
        color: "#fff",
        fontSize: 40,
        fontWeight: 600
    }
})
