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

      if (props.queue.cards.length === 0) {
         console.log("empty arr of cards");
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
   }

   goToPrevCard() {
      this.props.dispatch({
         type: actions.DECREMENT_QUEUE_INDEX,
      });
      this.props.history.push("/review-answer");
   }

   render() {
      const memoryCard = this.props.queue.cards[this.props.queue.index];

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
            {this.props.queue.index > 0 && (
               <button
                  className="btn btn-link"
                  onClick={() => {
                     this.goToPrevCard();
                  }}
               >
                  Previous Card
               </button>
            )}

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
      queue: state.queue,
   }; //what state do you want to map
}
//take the global state, and map these certain things. will return what we want to pass from the global state

export default connect(mapStateToProps)(ReviewImagery); //pass a function as a parameter, will return
// connect always needs mapStateToProps
