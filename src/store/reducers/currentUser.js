import actions from "../actions";
//redux boiler plate

export default function currentUser(currentUser = {}, action) {
   //action.GET_USER = "GET_USER"
   //pass me some state, if you dont , default will be used
   //switch statements
   // let newCurrentUser = { ...currentUser };

   switch (action.type) {
      case actions.UPDATE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
