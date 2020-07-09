import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { EMAIL_REGEX } from "../../utils/helpers";
import { withRouter } from "react-router-dom";

class SignUpCard extends React.Component {
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

   async setEmailState(emailInput) {
      const loweredCasedEmailInput = emailInput.toLowerCase();

      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address",
            hasEmailError: true,
         });
      //changing state from empty string to error message
      else if (EMAIL_REGEX.test(loweredCasedEmailInput) === false) {
         this.setState({
            emailError: "Please enter a valid email address",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      console.log(localPart);
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
      //.includes will return a true or false
   }

   async setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];

      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError:
               "FOR YOUR SAFETY, Your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "password must containe at least 3 unique characters",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndCreateUser() {
      const emailInput = document.getElementById("email-input").value;
      const passwordInput = document.getElementById("password-input").value;
      await this.setEmailState(emailInput);
      await this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         const user = {
            id: getUuid(),
            email: emailInput,
            password: hash(passwordInput),
            createdAt: Date.now(),
         };
         console.log(user);
         this.props.history.push("/create-answer");
      }
   }
   //click "lets go" going to run the function validateAndCreateUser, validateAndCreateUser
   //is going to take in an email input, pass it through validateEmail (change the state)
   //validateAndCreateUser breaks it down

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
                                    "mb-2": true,
                                    "form-control": true,
                                    "is-invalid": this.state.hasEmailError,
                                 })}
                                 id="email-input"
                              />
                              {this.state.hasEmailError !== "" && (
                                 <p className="text-danger">
                                    {this.state.passwordError}
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
                                 className={classnames({
                                    "form-control": true,
                                    "mb-2": true,
                                    "is-invalid": this.state.hasPasswordError,
                                 })}
                                 id="password-input"
                              />

                              {this.state.hasPasswordError && (
                                 <p className="text-danger">
                                    {this.state.passwordError}
                                 </p>
                              )}
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

export default withRouter(SignUpCard);
