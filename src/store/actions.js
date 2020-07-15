const actions = {
   //actions are global > screaming snake case
   STORE_CURRENT_USER: "STORE_CURRENT_USER", // sending a string that will tell what to do
   STORE_QUEUED_CARDS: "STORE_QUEUED_CARDS",
   INCREMENT_QUEUE_INDEX: "INCREMENT_QUEUE_INDEX",
   DECREMENT_QUEUE_INDEX: "DECREMENT_QUEUE_INDEX",
   RESET_QUEUE: "RESET_QUEUE",
};

export default actions;
