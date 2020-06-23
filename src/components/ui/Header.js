import React from "react";
import appLogo from "../../icons/logo-app.svg";

export default function Header() {
   return (
      <div>
         <img src={appLogo} width="32px" alt="White Bear Logo" />
         <h3 className="d-inline text-brand text-dark ">White Bear</h3>
         <button className="btn btn-link float-right">Log out</button>
         <div className="clearfix"></div>
      </div>
   );
}
