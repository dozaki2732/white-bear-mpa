import actions from "../actions";

export default function queue(queue = [], action) {
   //action.payload, actions.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         queue.cards = action.payload;
         return queue; // stuff in the objects that will be stored
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         queue.index = queue.index + 1;
         return queue; // stuff in the objects that will be stored
      default:
         return queue;
   }
}
