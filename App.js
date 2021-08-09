import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios'
import { Book } from './components/book';
import { Navbar } from './components/Navbar';

export default function App() {
  const API_KEY = 'AIzaSyAJodG-YJeqQDql5VG2XW61LhhaKTVlwyU'

  const [books, setBooks] = useState([])
  const [search, setSearch] = useState("")

  function findBooks() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+inauthor:keyes&key=` + API_KEY).then(data => {
      // console.log(data.data.items[0])
      setBooks(data.data.items)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TextInput style={styles.input} value={search} onChange={e => setSearch(e.target.value)} />
        <Button title="Найти" onPress={() => findBooks()} />
      </View>
      <ScrollView style={styles.books}>
        {books.length > 0 ? books.map(book =>
          <Book book={book} />
        ) :
          <View style={styles.error}>
            <Text>
              Your search parametrs is empty.
            </Text>
          </View>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  books: {
    width: '100%',
    height: '70%',
    overflow: 'hidden',
    // alignItems: "center"
  },
  navbar: {
    width: '100%',
    height: '10%',
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    margin: 'auto'
  },
  input: {
    backgroundColor: "grey",
    padding: 10
  }
});
