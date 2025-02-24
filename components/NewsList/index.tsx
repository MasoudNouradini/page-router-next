import React from "react";
import { NewsListProps } from "./types";

const NewsList = ({ list = [] }: NewsListProps) => {
  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h3>{item?.address?.city}</h3>
          <p>{item.website}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
