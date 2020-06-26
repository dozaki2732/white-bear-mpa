import React from "react";
import { Link } from "react-router-dom";

export default function CardProperties() {
   return (
      <>
         <div>
            <div className="text-center text-muted my-6">
               <h4>Card properties</h4>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Created on:</p>
               </div>
               <div className="col-8">
                  <p>Dec. 24, 2019</p>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Last attempt:</p>
               </div>
               <div className="col-8">
                  <p>Dec. 31, 2019</p>
               </div>
            </div>
            <div className="row mb-2">
               <div className="col-4">
                  <p className="text-muted">Next attempt:</p>
               </div>
               <div className="col-8">
                  <p>Jul. 14, 2020</p>
               </div>
            </div>
            <div className="row mb-4">
               <div className="col-4">
                  <p className="text-muted">Consecutives:</p>
               </div>
               <div className="col-8">
                  <p>4</p>
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
      </>
   );
}
