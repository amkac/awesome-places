import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux'


import PlaceInput from "../components/PlaceInput/PlaceInput";
import PlaceList from "../components/PlaceList/PlaceList";
import PlaceDetail from '../components/placeDetail/PlaceDetail';
import emoji from '../assets/emoji.png';

import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions/index';

class Places extends Component {
  
    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    };
  
    placeDeletedHandler = () => {
        this.props.onDeletePlace();
    }
  
    itemSelectedHandler = (key) => {
        this.props.onSelectPlace(key);
    }
  
    closeItemHandler = () => {
        this.props.onDeselectPlace()
    }
  
    render() {
      return (
          <View style={styles.container}>
            <PlaceDetail
              selectedItem={this.props.selectedItem}
              deleteItem={this.placeDeletedHandler}
              closeItem={this.closeItemHandler}/>
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler}/>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 26,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    }
});

  const mapStateToProps = state => {
   return {
     places: state.places.places,
     selectedItem: state.places.selectedItem
   };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};
  export default connect(mapStateToProps, mapDispatchToProps)(Places);