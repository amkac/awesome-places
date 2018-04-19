import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail = props => {
    return (
        <Modal visible={props.selectedItem ? true : false} animationType="slide" onRequestClose={props.closeItem}>
            <View style={styles.modal}>
                <Image style={styles.image} source={props.selectedItem ? props.selectedItem.image : null}/>
                <Text style={styles.nameText}>{props.selectedItem ? props.selectedItem.name : null}</Text>
                <View>
                    <Button title="Close" onPress={props.closeItem} />
                    <Button title="Delete" color="red" onPress={props.deleteItem} />
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
    }
});

export default placeDetail;