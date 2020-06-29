import React from "react";
import classnames from "classnames";

export default class SignUpCard extends React.Component {
   constructor(props) {
      super(props);
      console.log("new");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   validateAndCreateUser() {
      const emailInput = document.getElementById("email-input").value;
      //eslint-disable-next-line
      const loweredCasedEmailInput = emailInput.toLowerCase();
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address",
            hasEmailError: true,
         });
      //changing state from empty string to error message
      else if (emailRegex.test(loweredCasedEmailInput) === false) {
         this.setState({
            emailError: "Please enter a valid email address",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   render() {
      return (
         <div className="offset-1 col-10 offset-sm-1 col-sm-9 offset-md-1 col-md-4 offset-lg-2 col-lg-4 offset-xl-2 col-xl-4 mb-6">
            <div className="card">
               <div className="card-body">
                  <div className="landing-card">
                     <h2>Nice to meet you</h2>
                     <p className="card-text mb-5">
                        Sign up for White Bear, Free Forever.
                     </p>
                     {!this.state.isDisplayingInputs && (
                        <button
                           className="btn btn-landing btn-success btn-block"
                           onClick={() => {
                              this.showInputs();
                           }}
                        >
                           Sign up
                        </button>
                     )}

                     {this.state.isDisplayingInputs && (
                        <>
                           <p className="signup-text mb-4">
                              Lets get you signed up
                           </p>
                           <div className="form-group">
                              <label
                                 className="text-muted"
                                 htmlFor="email-input"
                              >
                                 Email address
                              </label>
                              <input
                                 type="email"
                                 className={classnames({
                                    "form-control": true,
                                    "is-invalid": this.state.hasEmailError,
                                 })}
                                 id="email-input"
                              />
                              {this.state.hasEmailError !== "" && (
                                 <p className="text-danger">
                                    {this.state.emailError}
                                 </p>
                              )}
                           </div>
                           <div className="form-group">
                              <label
                                 className="text-muted"
                                 htmlFor="password-input"
                              >
                                 Create a password
                              </label>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="password-input"
                              />
                           </div>
                           <button
                              className="btn btn-success btn-landing btn-block mt-5"
                              to="/create-answer"
                              onClick={() => {
                                 this.validateAndCreateUser();
                              }}
                           >
                              Lets go!
                           </button>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
