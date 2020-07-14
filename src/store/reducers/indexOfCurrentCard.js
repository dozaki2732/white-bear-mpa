import actions from "../actions";

export default function indexOfCurrentCard(state = 0, action) {
   //action.payload, actions.type
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         return state + 1; // stuff in the objects that will be stored
      default:
         return state;
   }
}
