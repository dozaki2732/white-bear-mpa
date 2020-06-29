import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function MemoryCard(props) {
   return (
      <div className="row mb-4">
         <div className="col-9">
            <div className="card flex-fill bg-primary">
               <div className="card-body">{props.imagery} </div>
            </div>
            <div className="card bg-secondary">
               <div className="card-body">{props.answer} </div>
            </div>
         </div>
         <div className="col-3 flex-fill justify-content-left">
            <Link to="/edit" className="btn btn-link float-right">
               <img alt="" src={editIcon} width="20px" />
               Edit
            </Link>
         </div>
      </div>
   );
}
