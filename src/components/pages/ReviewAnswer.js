import React from "react";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-lx-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               <img src="icons/logo-app.svg" width="32px" alt="" />
               <h3 className="d-inline text-brand">White Bear</h3>
               <a
                  href="index.html"
                  className="btn btn-link float-right"
                  role="button"
               >
                  Log out
               </a>

               <div
                  className="btn-group d-flex mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  <a
                     href="create-answer.html"
                     role="button"
                     className="btn btn-secondary"
                  >
                     Create new
                  </a>
                  <a
                     href="review-imagery.html"
                     role="button"
                     className="btn btn-secondary tab-separator tab-active"
                  >
                     Review
                  </a>
                  <a
                     href="all-cards.html"
                     role="button"
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
                        src="/icons/thumbs-up.svg"
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "4px" }}
                        className="mr-2"
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
