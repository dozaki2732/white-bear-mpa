import React from "react";

export default function Navigation() {
   return (
      <div
         className="btn-group mb-5 mt-1 d-flex "
         role="navigation"
         aria-label="navigation"
      >
         <a
            href="create-answer.html"
            role="button"
            className="btn btn-secondary"
         >
            Create new
         </a>
         <a
            href="review-imagery.html"
            role="button"
            className="btn btn-secondary tab-separator"
         >
            Review
         </a>
         <a
            href="all-cards.html"
            role="button"
            className="btn btn-secondary tab-separator"
         >
            All cards
         </a>
      </div>
   );
}
