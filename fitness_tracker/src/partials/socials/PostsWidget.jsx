import React, { useState, useEffect, useContext } from "react";
import PostWidget from "./PostWidget";
import { allPosts } from "../../utils/dummyPosts";

import { TransactionContext } from "../../context/TransactionContext";

const AllPostsWidget = () => {
  const _allPosts = allPosts;
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div>
      {currentAccount && (
        <div>
          {transactions.reverse().map((post, index) => (
            <PostWidget key={index} {...post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPostsWidget;
