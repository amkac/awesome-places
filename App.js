import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Places from './src/containers/places';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Places />
      </Provider>
    );
  }
}


// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedItem: state.places.selectedItem
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);
