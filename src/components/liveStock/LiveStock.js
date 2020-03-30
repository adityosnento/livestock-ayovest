import React from "react";
import CardComponent from "../home/CardComponent";
import PaginationComponent from "../PaginationComponent";
import Investment from "../liveStock/Investment";

export default function LiveStock() {
  return (
    <div>
      <Investment />
      <CardComponent />
      <PaginationComponent />
    </div>
  );
}
