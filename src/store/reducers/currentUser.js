import actions from "../actions";
//redux boiler plate

export default function currentUser(state = {}, action) {
   //action.GET_USER = "GET_USER"
   //pass me some state, if you dont , default will be used
   //switch statements
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload;
      default:
         return state;
   }
}
