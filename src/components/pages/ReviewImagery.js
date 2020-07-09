import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[2];

class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/05f2c7ff-23e4-4ab5-a8d7-b4640e90fe38")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }

   render() {
      return (
         <AppTemplate>
            <Header />
            <Navigation />
            <div className="mb-5">
               <div className="card bg-primary">
                  <div className="card-body">{memoryCard.imagery}</div>
               </div>
            </div>
            <Link to="/review-answer" role="button" className="btn btn-link">
               Previous Card
            </Link>
            <div className="float-right">
               <Link
                  to="/review-answer"
                  className="btn btn-outline-primary mr-4"
               >
                  Show Answer
               </Link>
            </div>
         </AppTemplate>
      );
   }
}
export default ReviewImagery;
