import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
import classnames from "classnames";

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
                  <textarea
                     className=" d-md-block"
                     rows="11"
                     onChange={(e) => this.setAnswerText(e)}
                     autoFocus={true}
                  ></textarea>
               </div>
            </div>

            <p className="float-right mb-5">
               <span
                  className={classnames({
                     "text-danger": checkIsOver(
                        this.state.answerText,
                        MAX_CARD_CHARS
                     ),
                  })}
               >
                  {this.state.answerText.length} / {MAX_CARD_CHARS}
               </span>
            </p>
            <div className="clearfix"></div>
            <div className="clear-fix"></div>
            <Link
               to="/create-imagery"
               className={classnames(
                  "btn btn-outline-primary btn-lg float-right",
                  { disabled: this.checkHasInvalidCharCount() }
               )}
            >
               Next
            </Link>
         </AppTemplate>
      );
   }
}
