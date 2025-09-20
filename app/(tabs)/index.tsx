import Button from "@/components/Button"
import CircleButtons from "@/components/CircleButtons"
import EmojiList from "@/components/EmojiList"
import EmojiPicker from "@/components/EmojiPicker"
import EmojiSticker from "@/components/EmojiSticker"
import IconButton from "@/components/IconButton"
import ImageViewer from "@/components/ImageViewer"
import * as ImagePicker from "expo-image-picker"
import { useState } from "react"
import { ImageSourcePropType, StyleSheet, View } from "react-native"

const PlaceholderImage = require("@/assets/images/background-image.png")

export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(
        undefined
    )
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false)
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [pickedEmoji, setPickedEmoji] = useState<
        ImageSourcePropType | undefined
    >(undefined)

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 1
        })

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
            setShowAppOptions(true)
        } else {
            alert("You did not select any image")
        }
    }

    const onReset = (): void => {
        setShowAppOptions(false)
    }

    const onAddSticker = (): void => {
        setIsModalVisible(true)
    }
    const onModalClose = (): void => {
        setIsModalVisible(false)
    }

    const onSaveImageAsync = async (): Promise<void> => {
        // we will implement this later
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer
                    imageSource={PlaceholderImage}
                    selectedImage={selectedImage}
                />
                {pickedEmoji && (
                    <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                )}
            </View>
            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton
                            icon="refresh"
                            label="Reset"
                            onPress={onReset}
                        />
                        <CircleButtons onPress={onAddSticker} />
                        <IconButton
                            icon="save-alt"
                            label="Save"
                            onPress={onSaveImageAsync}
                        />
                    </View>
                </View>
            ) : (
                <View style={styles.footerContainer}>
                    <Button
                        label="Choose a photo"
                        theme="primary"
                        onPress={pickImageAsync}
                    />
                    <Button
                        onPress={() => setShowAppOptions(true)}
                        label="Use this photo"
                    />
                </View>
            )}
            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList
                    onSelect={setPickedEmoji}
                    onCloseModal={onModalClose}
                />
            </EmojiPicker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center"
    },
    imageContainer: {
        flex: 1,
        paddingTop: 28
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: "center"
    },
    optionsContainer: {
        position: "absolute",
        bottom: 80
    },
    optionsRow: {
        alignItems: "center",
        flexDirection: "row"
    }
})
