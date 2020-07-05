import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import memoryCards from "../../mock-data/memory-cards";
import orderBy from "lodash/orderBy";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["createdAt"], ["desc", "asc]"]]',
         memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   filterByInput(e) {}

   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder); //"['totalSuccessfulAttempts',' createdAt'], ['desc', 'desc']"
      this.setState({ order: newOrder }, this.setMemoryCards());
   }

   setMemoryCards() {}

   setMemoryCardsOrder(e) {}

   render() {
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
                  <select
                     value={this.state.order}
                     className="form-control form-control-sm"
                     onChange={(e) => this.setMemoryCardsOrder(e)}
                  >
                     <option value='[["createdAt"], ["desc"]]'>
                        Most Recent
                     </option>
                     <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                        Hardest
                     </option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                        Easiest
                     </option>
                  </select>
               </div>
            </form>

            {this.state.memoryCards.map((memoryCard) => {
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
}
