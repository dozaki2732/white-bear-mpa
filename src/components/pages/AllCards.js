import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <form className="row d-flex">
            <div className="form-group col-9">
               <input
                  className="form-control border"
                  type="text"
                  placeholder="Search for a word"
                  aria-label="Search"
               />
            </div>
            <div className="form-group d-inline col-3 float-right">
               <button className="btn btn-primary btn-lg" type="submit">
                  Search
               </button>
            </div>
         </form>
         <form className="row mt-2">
            <div className="text-muted col-5">
               <h4>Sort cards by</h4>
            </div>
            <div className="form-group col-7">
               <select className="form-control border">
                  <option>Most Recent</option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </form>
         <div className="row mb-4">
            <div className="col-9">
               <div className="card bg-primary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed.
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed.
                  </div>
               </div>
            </div>
            <div className="col-3 justify-content-left">
               <Link to="/edit" className="btn btn-link float-right">
                  <img alt="" src={editIcon} width="20px" />
                  Edit
               </Link>
            </div>
         </div>
         <div className="row mb-4">
            <div className="col-9">
               <div className="card bg-primary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed.
                  </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could see his brown belly, slightly
                     domed.
                  </div>
               </div>
            </div>
            <div className="col-3 justify-content-left">
               <Link to="/edit" className="btn btn-link float-right">
                  <img alt="" src={editIcon} width="20px" />
                  Edit
               </Link>
            </div>
         </div>
      </AppTemplate>
   );
}
