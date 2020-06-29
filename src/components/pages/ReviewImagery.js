import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">{memoryCard.imagery}</div>
            </div>
         </div>
         <Link to="/review-answer" role="button" className="btn btn-link">
            Previous Card
         </Link>
         <div className="float-right">
            <Link to="/review-answer" className="btn btn-outline-primary mr-4">
               Show Answer
            </Link>
         </div>
      </AppTemplate>
   );
}
