import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import Header from "../ui/Header";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-lx-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <Header />

               <div
                  className="btn-group d-flex mt-1 mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a href="create-answer.html" className="btn btn-secondary">
                     Create new
                  </a>
                  <a
                     href="review-imagery.html"
                     className="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     className="btn btn-secondary tab-separator"
                  >
                     All cards
                  </a>
               </div>

               <div className="mb-5">
                  <div className="card bg-primary">
                     <div className="card-body">
                        One morning, when Gregor Samsa woke from troubled
                        dreams, he found himself transformed in his bed into a
                        horrible vermin. He lay on his armour-like back, and if
                        he lifted his head a little he could see his brown
                        belly, slightly domed
                     </div>
                  </div>

                  <div className="card bg-secondary">
                     <div className="card-body">
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
               <a href="edit.html" role="button" className="btn btn-link">
                  Edit card
               </a>
               <div className="float-right">
                  <a
                     role="button"
                     href="review-empty.html"
                     className="btn btn-outline-primary mr-4"
                  >
                     Needs work
                  </a>
                  <a
                     role="button"
                     href="review-empty.html"
                     className="btn btn-primary"
                  >
                     <img
                        src={thumbsUpIcon}
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "8px" }}
                        // className="mr-2"
                        alt=""
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
