import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5"></div>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">{memoryCard.answer}</div>
            </div>
         </div>
         <Link to="/edit" role="button" className="btn btn-link">
            Edit card
         </Link>
         <div className="float-right">
            <Link
               role="button"
               to="/review-empty"
               className="btn btn-outline-primary mr-4"
            >
               Needs work
            </Link>
            <Link
               role="button"
               to="/review-imagery"
               className="btn btn-primary"
            >
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "8px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
