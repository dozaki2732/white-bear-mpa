import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted mb-3"> Add an Answer</h4>
         <div className="card">
            <div className="mb-5 bg-primary card-body">
               <textarea autoFocus={true} rows="11"></textarea>
            </div>
         </div>
         <div className="float-right mb-5">
            <span id="charNum"> 0 </span> /240
         </div>
         <div className="clearfix"></div>

         <Link
            to="/create-imagery"
            className="btn btn-outline-primary btn-lg float-right"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
