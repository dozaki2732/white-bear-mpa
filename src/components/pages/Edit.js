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
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import without from "lodash/without";
import actions from "../../store/actions";

const memoryCard = memoryCards[2];

class Edit extends React.Component {
   constructor(props) {
      super(props);
      console.log("edit");
      this.state = {
         answerText: memoryCard.answer,
         imageryText: memoryCard.imagery,
         isDeleteChecked: false,
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
   showDeleteButton() {
      this.setState({ isDeleteChecked: !this.state.isDeleteChecked });
   }

   deleteCard() {
      //delete from database

      if (this.props.editableCard.prevRoute === "/review-answer") {
         this.deleteCardFromStore();
      }
      if (this.props.editableCard.prevRoute === "/all-cards") {
         this.props.history.push("/all-cards");
      }
   }

   deleteCardFromStore() {
      const deletedCard = this.props.editableCard.card;
      const cards = this.props.queue.cards;
      const filteredCards = without(cards, deletedCard);
      console.log(filteredCards);
      this.props.dispatch({
         type: actions.STORE_QUEUED_CARDS,
         payload: filteredCards,
      });
      if (filteredCards[this.props.queue.index] === undefined) {
         this.props.history.push("/review-empty");
      } else {
         this.props.history.push("/review-imagery");
      }
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <h4 className="text-center text-muted mt-3 mb-3">Edit Card </h4>
            {isEmpty(this.props.editableCard) === false && (
               <>
                  <div className="card">
                     <div className="card-body bg-primary lead">
                        <textarea
                           className=" d-md-block"
                           rows="4"
                           defaultValue={this.props.editableCard.card.imagery}
                           onChange={(e) => this.setImageryText(e)}
                        ></textarea>
                     </div>
                  </div>
                  <div className="card">
                     <div className="card-body mb-2 bg-secondary lead">
                        <textarea
                           className="d-md-block"
                           rows="4"
                           defaultValue={this.props.editableCard.card.answer}
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

                  {/* BUTTONS BELOW THE CARD */}

                  <Link
                     to={this.props.editableCard.prevRoute}
                     className="btn btn-link"
                  >
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

                  {/* card properties */}
                  <div>
                     <div className="text-center text-muted my-6">
                        <h4>Card properties</h4>
                     </div>
                     <div className="row mb-2">
                        <div className="col-4">
                           <p className="text-muted">Created on:</p>
                        </div>
                        <div className="col-8">
                           <p>
                              {toDisplayDate(
                                 this.props.editableCard.card.createdAt,
                                 "MMM. d, yyy"
                              )}
                           </p>
                        </div>
                     </div>
                     <div className="row mb-2">
                        <div className="col-4">
                           <p className="text-muted">Last attempt:</p>
                        </div>
                        <div className="col-8">
                           <p>
                              {toDisplayDate(
                                 this.props.editableCard.card.lastAttemptAt,
                                 "MMM. d, yyy"
                              )}
                           </p>
                        </div>
                     </div>
                     <div className="row mb-2">
                        <div className="col-4">
                           <p className="text-muted">Next attempt:</p>
                        </div>
                        <div className="col-8">
                           <p>
                              {toDisplayDate(
                                 this.props.editableCard.card.nextAttemptAt,
                                 "MMM. d, yyy"
                              )}
                           </p>
                        </div>
                     </div>
                     <div className="row mb-4">
                        <div className="col-4">
                           <p className="text-muted">Consecutives:</p>
                        </div>
                        <div className="col-8">
                           <p>
                              {
                                 this.props.editableCard.card
                                    .totalSuccessfulAttempts
                              }
                           </p>
                        </div>
                     </div>

                     {/* delete component */}
                     <div className="row col mb-4">
                        <div className="custom-control custom-checkbox text-muted">
                           <input
                              type="checkbox"
                              className="custom-control-input"
                              checked={this.state.isDeleteChecked}
                              onChange={() => {
                                 this.showDeleteButton();
                              }}
                           />
                           <label className="custom-control-label">
                              Show delete button
                           </label>
                        </div>
                     </div>

                     <button
                        className="btn btn-large btn-outline-danger  mb-3"
                        onClick={() => {
                           this.deleteCard();
                        }}
                     >
                        Delete this card
                     </button>
                  </div>
               </>
            )}
         </AppTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      editableCard: state.editableCard,
      queue: state.queue,
   };
}

export default connect(mapStateToProps)(Edit);
