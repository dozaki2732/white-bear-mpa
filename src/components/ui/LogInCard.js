import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";
import { EMAIL_REGEX } from "../../utils/helpers";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { withRouter } from "react-router-dom";

class LogInCard extends React.Component {
   constructor(props) {
      super(props);
      console.log("new");
      this.state = {
         emailError: "",
         passwordError: false,
         hasEmailError: false,
      };
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

   async setPasswordState(passwordInput) {
      if (passwordInput === "") {
         this.setState({
            passwordError: "Please enter your password.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   async validateAndLogUser() {
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
         console.log("created user object for POST", user);
         //mimic api response
         axios
            .get(
               "https://raw.githubusercontent.com/dozaki2732/white-bear-mpa/master/src/mock-data/user.json"
            )
            .then((res) => {
               const currentUser = res.data;
               console.log(currentUser);
               this.props.dispatch({
                  type: actions.UPDATE_CURRENT_USER,
                  payload: res.data,
               });
            })
            .catch((error) => {
               // handle error
               console.log(error);
            });

         this.props.history.push("/create-answer");
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
function mapStateToProps(state) {
   return {};
}

export default withRouter(connect(mapStateToProps)(LogInCard));
