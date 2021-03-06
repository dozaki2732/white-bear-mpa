import React from "react";
import appLogo from "../../icons/logo-app.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

class Header extends React.Component {
   logOutCurrentUser() {
      this.props.dispatch({
         type: actions.UPDATE_CURRENT_USER,
         payload: {},
      });
   }

   render() {
      return (
         <div>
            <img src={appLogo} width="32px" alt="White Bear Logo" />
            <h3 className="d-inline text-brand text-dark ml-1">White Bear</h3>
            <Link
               to="/"
               className="btn btn-link float-right"
               onClick={() => {
                  this.logOutCurrentUser();
               }}
            >
               Log out
            </Link>
            <div className="clearfix"></div>
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {};
}

export default connect(mapStateToProps)(Header);
