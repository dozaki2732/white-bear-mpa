import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import CardProperties from "../ui/CardProperties";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <h4 className="text-center text-muted mt-3 mb-3">Edit Card </h4>
         <div className="mb-5">
            <div className="card bg-primary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed
               </div>
            </div>

            <div className="card bg-secondary">
               <div className="card-body">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to
               </div>
            </div>
         </div>
         <CardProperties />
      </AppTemplate>
   );
}
