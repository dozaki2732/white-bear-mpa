import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queuedCards from "./reducers/queuedCards";
import indexOfCurrentCard from "./reducers/indexOfCurrentCard";

export default combineReducers({
   currentUser,
   queuedCards,
   indexOfCurrentCard,
}); //key value pairs of all the other reducers
