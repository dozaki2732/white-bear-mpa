import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { connect } from "react-redux";
import actions from "../../store/actions";

class ReviewEmpty extends React.Component {
   goToPrevCard() {
      this.props.dispatch({
         type: actions.DECREMENT_QUEUE_INDEX,
      });
      this.props.history.push("/review-answer");
   }

   getMoreCards() {
      this.props.dispatch({
         type: actions.RESET_QUEUE,
      });
      this.props.history.push("/review-imagery");
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <h4 className="text-center text-muted mt-3 mb-3"> Out of Cards</h4>
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
               <button
                  to="/review-imagery"
                  className="btn btn-outline-primary mr-4 btn-lg"
                  onClick={() => {
                     this.getMoreCards();
                  }}
               >
                  Get more cards
               </button>
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

export default connect(mapStateToProps)(ReviewEmpty); //pass a function as a parameter, will return
// connect always needs mapStateToProps
