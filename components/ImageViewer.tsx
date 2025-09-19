import { Image } from "expo-image"
import React from "react"
import { StyleSheet } from "react-native"

type Props = {
    imageSource: string
    selectedImage?: string
}

export default function ImageViewer({ imageSource, selectedImage }: Props) {
    const imgSource = selectedImage ? { uri: selectedImage } : imageSource

    return <Image source={imgSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})
