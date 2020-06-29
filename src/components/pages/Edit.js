import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";
import memoryCards from "../../mock-data/memory-cards";
import toDisplayDate from "date-fns/format";

const memoryCard = memoryCards[2];

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted mt-3 mb-3">Edit Card </h4>
         <div className="card">
            <div className="card-body bg-primary lead">
               <textarea
                  className="d-md-none"
                  rows="7"
                  defaultValue={memoryCard.imagery}
               ></textarea>

               <textarea
                  className="d-non d-md-block"
                  rows="4"
                  defaultValue={memoryCard.imagery}
               ></textarea>
            </div>
         </div>
         <div className="card">
            <div className="card-body bg-primary lead">
               <textarea
                  className="d-md-none"
                  rows="7"
                  defaultValue={memoryCard.answer}
               ></textarea>

               <textarea
                  className="d-non d-md-block"
                  rows="4"
                  defaultValue={memoryCard.answer}
               ></textarea>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="mb-5">
                  <Link to="/all-cards" className="btn btn-link">
                     Discard changes
                  </Link>

                  <Link
                     to="/all-cards"
                     role="button"
                     className="btn btn-primary btn-lg "
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
            </div>
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
                  <p> {toDisplayDate(memoryCard.createdAt, "MMM. d, yyy")} </p>
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
