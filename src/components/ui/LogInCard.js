import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class SignUpCard extends React.Component {
   constructor(props) {
      super(props);
      console.log("new");
      this.state = {
         emailError: "",
         passwordError: false,
         hasEmailError: false,
      };
   }

   setEmailState(emailInput) {
      const loweredCasedEmailInput = emailInput.toLowerCase();
      //eslint-disable-next-line
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

   setPasswordState(passwordInput) {
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   validateAndLogUser() {
      const emailInput = document.getElementById("email-input").value;
      const passwordInput = document.getElementById("password-input").value;
      this.setEmailState(emailInput);
      this.setPasswordState(passwordInput, emailInput);
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
      }
   }

   render() {
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
                        <label className="input-text" htmlFor="email">
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
                              {this.state.emailError}
                           </p>
                        )}
                     </div>

                     <div className="form-group">
                        <label className="input-text" htmlFor="password">
                           Password
                        </label>
                        <input
                           type="password"
                           className={classnames({
                              "mb-2": true,
                              "form-control": true,
                              "is-invalid": this.state.hasPasswordError,
                           })}
                           id="password-input"
                        />
                        {this.state.hasPasswordError !== "" && (
                           <p className="text-danger">
                              {this.state.passwordError}
                           </p>
                        )}
                     </div>
                     <button
                        className="btn btn-success btn-landing btn-block mt-5"
                        to="/create-answer"
                        onClick={() => {
                           this.validateAndLogUser();
                        }}
                     >
                        Log in
                     </button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
