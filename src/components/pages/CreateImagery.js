import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-lx-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />
               <Navigation />
               <h4 className="text-center text-muted mt-3 mb-3">
                  Add memorable imagery
               </h4>
               <div className="card">
                  <div className="card-body lead bg-primary">
                     <textarea
                        rows="11"
                        className="d-md-none"
                        autoFocus={true}
                     ></textarea>
                     <textarea
                        id="createImageryAnswer"
                        rows="6"
                        className="d-none d-md-block"
                        autoFocus={true}
                     ></textarea>
                  </div>

                  <div className="card bg-secondary">
                     <div id="answerCreated" className="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed and divided by arches into stiff
                        sections. The bedding was hardly able to cover it and
                        seemed ready to
                     </div>
                  </div>
               </div>
               <p className="float-right mt-2 mb-5 text-muted">205/240</p>
               <div className="clearfix"></div>
               <button className="btn btn-link">Back to answer</button>
               <div className="float-right mb-5">
                  <button className="btn btn-primary btn-lg" id="save-imagery">
                     <img
                        alt=""
                        src={saveIcon}
                        width="20px"
                        style={{ marginBottom: "3px", marginRight: "4px" }}
                     />
                     Save
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
