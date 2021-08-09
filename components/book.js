import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const Book = ({ book }) => {
    return (
        <View key={book.id} style={styles.block} key={book.id}>
            {book.volumeInfo.imageLinks && <Image style={styles.image} source={{ uri: book.volumeInfo.imageLinks.smallThumbnail }} />}
            <View style={styles.textBlock}>
                <Text>{book.volumeInfo.title}</Text>
                <Text style={styles.author}>{book.volumeInfo.authors}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        width: 250,
        height: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: "auto"
    },
    image: {
        width: 70,
        height: 70
    },
    textBlock: {
        width: '100%'
    },
    author: {
        fontSize: 10
    }
})