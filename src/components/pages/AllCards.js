import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import MemoryCard from "../ui/MemoryCard";
import orderBy from "lodash/orderBy";
import axios from "axios";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         order: '[["createdAt"], ["desc"]]',
         displayedMemoryCards: [],
         allMemoryCards: [],
      };
   }

   componentDidMount() {
      axios
         .get(
            "https://raw.githubusercontent.com/dozaki2732/white-bear-mpa/master/src/mock-data/memory-card.json"
         )
         .then((res) => {
            // handle success
            console.log(res.data); //save to the store
            const memoryCards = res.data;
            this.setState({
               displayedMemoryCards: orderBy(
                  memoryCards,
                  ["createdAt"],
                  ["desc"]
               ),
               allMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
            });
         })
         .catch((error) => {
            // handle error
            console.log(error);
         });
   }

   filterByInput(e) {
      e.preventDefault();
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

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div>
               <form
                  className="row d-flex"
                  onSubmit={(e) => this.filterByInput(e)}
               >
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
                        className="btn btn-sm btn-primary float-right"
                        type="submit"
                     >
                        Search
                     </button>
                  </div>
               </form>
               <div className="row mt-2">
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
               </div>

               {this.state.displayedMemoryCards.map((memoryCard) => {
                  return <MemoryCard card={memoryCard} key={memoryCard.id} />;
               })}
            </div>
         </AppTemplate>
      );
   }
}
