import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";
import classnames from "classnames";

export default class CreateImagery extends React.Component {
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
            <h4 className="text-center text-muted mt-3 mb-3">
               Add memorable imagery
            </h4>
            <div className="card">
               <div className="card-body lead bg-primary">
                  <textarea
                     className="d-md-block"
                     rows="7"
                     onChange={(e) => this.setAnswerText(e)}
                     autoFocus={true}
                  ></textarea>
               </div>

               <div className="card bg-secondary mb-4">
                  <div id="answerCreated" className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                  </div>
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

            <Link to="/create-answer" className="btn btn-link">
               Back to answer
            </Link>

            <div className="float-right mb-5">
               <Link
                  to="/create-answer"
                  role="button"
                  className={classnames("btn btn-primary btn-lg", {
                     disabled: this.checkHasInvalidCharCount(),
                  })}
                  id="save-imagery"
               >
                  <img
                     alt=""
                     src={saveIcon}
                     width="20px"
                     style={{ marginBottom: "3px", marginRight: "4px" }}
                  />
                  Save
               </Link>
            </div>
         </AppTemplate>
      );
   }
}
