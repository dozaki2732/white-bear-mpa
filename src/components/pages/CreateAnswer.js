import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

export default class CreateAnswer extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         answerText: "",
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0
      ) {
         return true;
      } else return false;
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <h4 className="text-center text-muted mb-3"> Add an Answer</h4>
            <div className="card">
               <div className="mb-5 bg-primary card-body">
                  <textarea autoFocus={true} rows="11"></textarea>
               </div>
            </div>
            <div className="float-right mb-5">0 / {MAX_CARD_CHARS}</div>
            <div className="clearfix"></div>

            <Link
               to="/create-imagery"
               className="btn btn-outline-primary btn-lg float-right"
            >
               Next
            </Link>
         </AppTemplate>
      );
   }
}
