import { ADD_PLACE, DELETE_PLACE,  SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes'
import emoji from '../../assets/emoji.png';


const initialState = {
    places: [],
    selectedItem: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    name: action.placeName,
                    key: Math.random(),
                    image: emoji
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(el => {
                    return el.key !== state.selectedItem.key;
                }),
                selectedItem: null
            };
        case SELECT_PLACE:
            const newSelectedPlace = state.places[action.placeKey];
            return {
                ...state,
                selectedItem: newSelectedPlace
            };
        case DESELECT_PLACE: 
            return {
                ...state,
                selectedItem: null
            };
        default:
            return state;
    }
};

export default reducer;