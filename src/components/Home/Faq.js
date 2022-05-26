import React from "react";
import Collapse from "./Collapse";

const Faq = () => {
  return (
    <div className="mb-4 mb-32">
      <div className="flex justify-center align-center">
        <h1 className="text-5xl p-4 m-4">FAQ</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid">
        <div>
          <Collapse
            title="What is toolero Warehouse?"
            description="toolero Warehouse resells millions of like-new, open-box, and pre-owned items that have been returned by customers at a great discount."
          />
        </div>
        <div>
          <Collapse
            title="Why buy from Toolero Warehouse?"
            description="Smart shoppers can find great deals on millions of quality used products at Toolero Warehouse. All items are inspected and graded using Toolero’s rigorous 20-point quality inspection process and sold at a discount. Purchases are Prime-eligible and backed by Toolero’s 30-day return policy and award-winning customer service."
          />
        </div>

        <div>
          <Collapse
            title="Do products sold on Toolero Warehouse come with a manufacturer’s warranty?"
            description="No. Used products generally do not come with a manufacturer's warranty but all of our items are backed by Toolero’s standard 30-day return policy, and a 90-day return policy for Renewed items."
          />
        </div>
        <div>
          <Collapse
            title="What is the replacement policy for Toolero Warehouse products? warranty"
            description="Toolero Warehouse offers free replacements within 30-days from purchase when there is a product with the same listing condition available in our inventory. Due to the unique nature of each used product sold on Toolero Warehouse, we may not have similar conditions available. Customers can return any item within 30-days of receipt for a full refund."
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
