import React from "react";
import { Link } from "react-router-dom";
import editIcon from "../../icons/edit.svg";
import { connect } from "react-redux";
import actions from "../../store/actions";

class MemoryCard extends React.Component {
   storeEditableCard() {
      console.log("storing editable card");
      this.props.dispatch({
         type: actions.STORE_EDITABLE_CARD,
         payload: {
            card: this.props.card,
            prevRoute: "/all-cards",
         },
      });
   }
   render() {
      return (
         <div className="row mb-4">
            <div className="col-9">
               <div className="card flex-fill bg-primary">
                  <div className="card-body">{this.props.card.imagery} </div>
               </div>
               <div className="card bg-secondary">
                  <div className="card-body">{this.props.card.answer} </div>
               </div>
            </div>
            <div className="col-3 flex-fill justify-content-left">
               <Link
                  to="/edit"
                  className="btn btn-link float-right"
                  onClick={() => {
                     this.storeEditableCard();
                  }}
               >
                  <img alt="" src={editIcon} width="20px" />
                  Edit
               </Link>
            </div>
         </div>
      );
   }
}
function mapStateToProps(state) {
   return {};
}

export default connect(mapStateToProps)(MemoryCard);
