import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import CardProperties from "../ui/CardProperties";
import { Link } from "react-router-dom";
import saveIcon from "../../icons/save.svg";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted mt-3 mb-3">Edit Card </h4>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to
               </div>
            </div>
         </div>
         <div className="container">
            <div className="row">
               <div className="mb-5">
                  <Link to="/all-cards" className="btn btn-link">
                     Discard changes
                  </Link>
                  <div className="float-right">
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
         </div>

         <CardProperties />
      </AppTemplate>
   );
}
