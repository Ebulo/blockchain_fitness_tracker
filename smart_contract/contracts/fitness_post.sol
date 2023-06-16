// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract FitnessPost {

    struct Post {
        address owner;
        string owner_name;
        string title;
        uint256[] likes;
        uint256[] comments;
    }
}