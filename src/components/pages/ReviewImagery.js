import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/dozaki2732/white-bear-mpa/master/src/mock-data/memory-card.json"
         )
         .then(function (res) {
            // handle success
            console.log(res); //save to the store
            props.dispatch({
               type: actions.STORE_QUEUED_CARDS,
               payload: res.data,
            });
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }

   render() {
      const memoryCard = this.props.queuedCards[this.props.indexOfCurrentCard];

      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">
                     {memoryCard && memoryCard.imagery}
                  </div>
               </div>
            </div>
            <Link to="/review-answer" role="button" className="btn btn-link">
               Previous Card
            </Link>
            <div className="float-right">
               <Link
                  to="/review-answer"
                  className="btn btn-outline-primary mr-4"
               >
                  Show Answer
               </Link>
            </div>
         </AppTemplate>
      );
   }
}

function mapStateToProps(state) {
   //global
   return {
      queuedCards: state.queuedCards,
      indexOfCurrentCard: state.indexOfCurrentCard,
   }; //what state do you want to map
}
//take the global state, and map these certain things. will return what we want to pass from the global state

export default connect(mapStateToProps)(ReviewImagery); //pass a function as a parameter, will return
// connect always needs mapStateToProps
