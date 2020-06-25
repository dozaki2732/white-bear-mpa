import React from "react";
import SignUpCard from "../ui/SignUpCard";
import LogInCard from "../ui/LogInCard";

export default function Landing() {
   return (
      <>
         <div className="row">
            <SignUpCard />
            <LogInCard />
         </div>
      </>
   );
}
