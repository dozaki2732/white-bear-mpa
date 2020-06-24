import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed
               </div>
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
