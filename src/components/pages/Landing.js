import React from "react";
import SignUpCard from "../ui/SignUpCard";
import LogInCard from "../ui/LogInCard";
import LandingLogo from "../../images/logo-landing.png";

export default function Landing() {
   return (
      <>
         <div className="landing-pg-bg">
            <div className="row mb-8 pt-7 ml-2 justify-content-left">
               <div className="d-flex mt-5">
                  <img
                     className="img-fluid"
                     src={LandingLogo}
                     alt="white bear constellation"
                  />
                  <h1 className="logo-font d-line ml-5">White Bear</h1>
               </div>
            </div>
            <div className="row">
               <SignUpCard />
               <LogInCard />
            </div>
         </div>
      </>
   );
}
