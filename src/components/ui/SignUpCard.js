import React from "react";
import { Link } from "react-router-dom";

export default function SignUpCard() {
   return (
      <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6">
         <div className="card">
            <div className="card-body">
               <div className="landing-card">
                  <h2>Nice to meet you</h2>
                  <p className="card-text mb-5">
                     Sign up for White Bear, Free Forever.
                  </p>

                  <Link
                     to="/create-answer"
                     role="button"
                     className="btn btn-landing btn-success btn-block"
                  >
                     Sign up
                  </Link>
                  <p className="signup-text mb-4">Lets get you signed up</p>
                  <div className="form-group">
                     <label className="text-muted">Email address</label>
                     <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                     <label className="text-muted">Create a password</label>
                     <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                     />
                  </div>
                  <Link
                     className="btn btn-success btn-landing btn-block mt-5"
                     role="button"
                     to="/create-answer"
                  >
                     Lets go!
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
