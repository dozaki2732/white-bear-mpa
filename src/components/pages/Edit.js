import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";
import classnames from "classnames";
import { checkIsOver, MAX_CARD_CHARS } from "../../utils/helpers";

const memoryCard = memoryCards[2];

export default class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("edit");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
      };
   }

   checkHasInvalidCharCount() {
      if (
         this.state.answerText.length > MAX_CARD_CHARS ||
         this.state.imageryText.length > MAX_CARD_CHARS ||
         this.state.answerText.length === 0 ||
         this.state.imageryText.length === 0
      ) {
         return true;
      } else return false;
   }

   setImageryText(e) {
      this.setState({ imageryText: e.target.value });
   }

   setAnswerText(e) {
      this.setState({ answerText: e.target.value });
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <h4 className="text-center text-muted mt-3 mb-3">Edit Card </h4>
            <div className="card">
               <div className="card-body bg-primary lead">
                  <textarea
                     className=" d-md-block"
                     rows="4"
                     defaultValue={memoryCard.imagery}
                     onChange={(e) => this.setImageryText(e)}
                  ></textarea>
               </div>
            </div>
            <div className="card">
               <div className="card-body mb-2 bg-secondary lead">
                  <textarea
                     className="d-md-block"
                     rows="4"
                     defaultValue={memoryCard.answer}
                     onChange={(e) => this.setAnswerText(e)}
                  ></textarea>
               </div>
            </div>
            <div className="float-right mb-5">
               <p>
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.imageryText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Top:&nbsp;
                     {this.state.imageryText.length}/{MAX_CARD_CHARS}
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span
                     className={classnames({
                        "text-danger": checkIsOver(
                           this.state.answerText,
                           MAX_CARD_CHARS
                        ),
                     })}
                  >
                     Bottom:
                     {this.state.answerText.length}/{MAX_CARD_CHARS}
                  </span>
               </p>
            </div>
            <div className="clearfix"></div>

            <Link to="/all-cards" className="btn btn-link">
               Discard changes
            </Link>
            <div className="float-right">
               <Link
                  to="/all-cards"
                  role="button"
                  className={classnames("btn btn-primary btn-lg ", {
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
            <div>
               <div className="text-center text-muted my-6">
                  <h4>Card properties</h4>
               </div>
               <div className="row mb-2">
                  <div className="col-4">
                     <p className="text-muted">Created on:</p>
                  </div>
                  <div className="col-8">
                     <p>{toDisplayDate(memoryCard.createdAt, "MMM. d, yyy")}</p>
                  </div>
               </div>
               <div className="row mb-2">
                  <div className="col-4">
                     <p className="text-muted">Last attempt:</p>
                  </div>
                  <div className="col-8">
                     <p>
                        {toDisplayDate(memoryCard.lastAttemptAt, "MMM. d, yyy")}
                     </p>
                  </div>
               </div>
               <div className="row mb-2">
                  <div className="col-4">
                     <p className="text-muted">Next attempt:</p>
                  </div>
                  <div className="col-8">
                     <p>
                        {toDisplayDate(memoryCard.nextAttemptAt, "MMM. d, yyy")}
                     </p>
                  </div>
               </div>
               <div className="row mb-4">
                  <div className="col-4">
                     <p className="text-muted">Consecutives:</p>
                  </div>
                  <div className="col-8">
                     <p>{memoryCard.totalSuccessfulAttempts}</p>
                  </div>
               </div>
               <div className="row col mb-4">
                  <div className="custom-control custom-checkbox text-muted">
                     <input
                        type="checkbox"
                        className="custom-control-input"
                        id="delete-check"
                     />
                     <label className="custom-control-label">
                        Show delete button
                     </label>
                  </div>
               </div>
               <Link
                  to="/all-cards"
                  id="card-delete"
                  href="all-cards.html"
                  className="btn btn-large btn-outline-danger  mb-3"
               >
                  Delete this card
               </Link>
            </div>
         </AppTemplate>
      );
   }
}

/*  editableCard: {
prevRoute: {}
card:{ 
   all the card properties 
}

} 


*/
