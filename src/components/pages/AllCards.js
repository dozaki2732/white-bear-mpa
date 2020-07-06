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
         order: '[["createdAt"], ["desc"]]',
         displayedMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
         allMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   filterByInput() {
      const input = document.getElementById("search-input").value;
      const lowerCasedInput = input.toLowerCase();
      console.log(lowerCasedInput);
      const copyOfAllMemoryCards = [...this.state.allMemoryCards];
      const filteredMemoryCards = copyOfAllMemoryCards.filter((memoryCard) => {
         const lowerCasedImagery = memoryCard.imagery.toLowerCase();
         const lowerCasedAnswer = memoryCard.answer.toLowerCase();
         if (
            lowerCasedImagery.includes(lowerCasedInput) ||
            lowerCasedAnswer.includes(lowerCasedInput)
         ) {
            return true;
         }
         return false;
      });
      this.setState({ displayedMemoryCards: filteredMemoryCards }, () => {
         this.setMemoryCards();
      });
   }

   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder); //"['totalSuccessfulAttempts',' createdAt'], ['desc', 'desc']"
      this.setState({ order: newOrder }, () => {
         this.setMemoryCards();
      });
   }

   setMemoryCards() {
      console.log("set memory cards");
      const copyofDisplayedMemoryCards = [...this.state.displayedMemoryCards]; //copy of all the memory cards, cannot alter state only a copy of state
      const toJson = JSON.parse(this.state.order); //spread operator only works on function arguments
      console.log(...toJson);
      const orderedMemoryCards = orderBy(copyofDisplayedMemoryCards, ...toJson); //converting string to object
      this.setState({ displayedMemoryCards: orderedMemoryCards });
   }

   // setMemoryCardsOrder(e) {
   //    const newOrder = e.target.value;
   //    console.log(newOrder); //"['totalSuccessfulAttempts',' createdAt'], ['desc', 'desc']"
   //    const copyOfMemoryCards = [...this.state.memoryCards]; //copy of all the memory cards, cannot alter state only a copy of state
   //    const toJson = JSON.parse(newOrder); //spread operator only works on function arguments
   //    const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson); //converting string to object
   //    this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   // }

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
                     id="search-input"
                  />
               </div>
               <div className="form-group d-inline col-3 float-right">
                  <button
                     className="btn btn-primary btn-lg"
                     onClick={() => this.filterByInput()}
                  >
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
                     onChange={(e) => this.setOrder(e)}
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

            {this.state.displayedMemoryCards.map((memoryCard) => {
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
