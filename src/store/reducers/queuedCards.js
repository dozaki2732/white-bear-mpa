import actions from "../actions";

export default function queuedCards(state = [], action) {
   //action.payload, actions.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload; // stuff in the objects that will be stored
      default:
         return state;
   }
}
