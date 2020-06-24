import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted mt-3 mb-3"> Out of Cards</h4>
         <Link to="/review-answer" className="btn btn-link">
            Previous cards
         </Link>
         <div className="float-right">
            <Link
               role="button"
               to="/create-answer"
               className="btn btn-outline-primary mr-4 btn-lg"
            >
               Get more cards
            </Link>
         </div>
      </AppTemplate>
   );
}
