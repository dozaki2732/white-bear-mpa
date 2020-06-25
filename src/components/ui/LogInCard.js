import React from "react";
import { Link } from "react-router-dom";

export default function LogInCard() {
   return (
      <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-1 col-lg-4 offset-xl-1 col-xl-4">
         <div className="card">
            <div className="card-body">
               <div className="landing-card">
                  <h2>Welcome back!</h2>
                  <p className="card-text mb-4">
                     Log in with your email address and password
                  </p>
                  <div className="form-group">
                     <label className="input-text" for="email">
                        Email address
                     </label>
                     <input
                        type="email"
                        className="form-control"
                        id="emailText"
                     />
                  </div>

                  <div className="form-group">
                     <label className="input-text" for="password">
                        Password
                     </label>
                     <input
                        type="password"
                        className="form-control"
                        id="password"
                     />
                  </div>
                  <Link
                     to="/create-answer"
                     role="button"
                     className="btn btn-success btn-lg btn-landing float-right"
                  >
                     Log in
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
