import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const placeDetail = props => {
    return (
        <Modal visible={props.selectedItem ? true : false} animationType="slide" onRequestClose={props.closeItem}>
            <View style={styles.modal}>
                <Image style={styles.image} source={props.selectedItem ? props.selectedItem.image : null}/>
                <Text style={styles.nameText}>{props.selectedItem ? props.selectedItem.name : null}</Text>
                <View>
                    <TouchableOpacity onPress={props.deleteItem} style={styles.deleteButton}>
                        <Icon name="ios-trash" size={30} color="red" />
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.closeItem} />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modal: {
        margin: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    },
    nameText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 22
    },
    deleteButton: {
        alignItems: 'center'
    }
});

export default placeDetail;