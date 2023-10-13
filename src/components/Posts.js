import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const Posts = () => {
    const [postsList, setPostsList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newPost, setNewPost] = useState({
        title: "", subtitle: "", description: "", avatar: null, active: false
    })

    const handleCreatePost = () => {
        axios.post(`http://192.168.46.190:3000/api/v1/posts/new-post`,newPost)
        .then((response) =>{
            console.log('Data', response.data)
            setModalVisible(false);

        })
        .catch((error) =>{console.log(error)})
    }
    const handleDeletePost = (postId) => {
        const updatePosts = postsList.filter((post) => post._id !== postId)
        setPostsList(updatePosts)
        axios.delete(`http://192.168.46.190:3000/api/v1/posts/delete/${postId}`)
        .then((response) =>console.log('Data', response.data))
        .catch((error) =>{console.log(error)})
            
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

        
        if (result.canceled) {
            throw Error("Camera was cancelled");
        } else {
            setNewPost({... newPost, avatar:result.assets[0].uri}); 
        }
        console.log(newPost);
    }
    const listPosts = () => {
        axios.get(`http://192.168.46.190:3000/api/v1/posts/`)
        .then((response) =>{
            setPostsList(response.data)
        })
        .catch((error) =>{console.log(error)})
    }

    useEffect(() => {
        listPosts()
    })
  return (
    <SafeAreaView style={{marginTop: 50, flex: 1}} >
        <FlatList data={postsList} keyExtractor={(item) =>item._id}
        renderItem={({item}) => (
            <View style={styles.flatListContainer}>
                <Image source={{uri: item.avatar}} style={{width: 50}}/>
                <Text>TITLE: {item.title}</Text>
                <Text>SUBTITLE: {item.subtitle}</Text>
                <Text>DESCRIPTION: {item.description}</Text>
                <Text>ACTIVE: {item.active? "Y" : "N"}</Text>
                <Button style={{ width: 10}} title="Delete" onPress={() =>handleDeletePost(item._id)} />
            </View>
        )}

        />

        <Button style={{marginBottom: 20}} title='New Post' onPress={() => setModalVisible(true)} />
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType='slide'>
            <View style={styles.modalContainer}>
                <TextInput placeholder='Title Post' style={StyleSheet.input} 
                onChangeText={(title_text) =>{
                    console.log(title_text);
                    setNewPost({... newPost, title: title_text})
                }} />

                <TextInput placeholder='SubTitle Post' style={StyleSheet.input} 
                onChangeText={(subtitle_text) =>{
                    console.log(subtitle_text);
                    setNewPost({... newPost, subtitle: subtitle_text})
                }} />

                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {newPost.avatar && <Image source={{ uri: newPost.avatar }} style={{ width: 200, height: 200 }} />}
                <TextInput placeholder='Description Post' style={StyleSheet.input} 
                onChangeText={(description_text) =>{
                    console.log(description_text);
                    setNewPost({... newPost, description: description_text})
                }} />

                <Button onPress={handleCreatePost} title='Crear'></Button>

            </View>
        </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    input:{
        marginBottom: 10,
    },

    flatListContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})