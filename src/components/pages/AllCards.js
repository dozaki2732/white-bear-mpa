import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";

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

         {memoryCards.map((memoryCard) => {
            return (
               <MemoryCard
                  answer={memoryCard.answer}
                  imagery={memoryCard.imagery}
                  key={memoryCard.id}
               />
            );
         })}
      </AppTemplate>
   );
}
