import React from "react";
import rootReducer from "./rootReducer";
import reducer from "./rootReducer";
import db from './data.json';

describe("Test reducer", function () {
  it("Adds to cart successfully", function () {

    const state = {
      ...db,
      cart: {
      }
    };

    let action = {
      type: "ADD_TO_CART",
      id: "test id"
    };

    let result = reducer(state, action);
    expect(result).toEqual({
      ...db,
      cart: {
        "test id": 1
      }
    });
  });

  // UNNCESSARY. WILL NEVER BE UNDEFINED
  // it("Won't add to cart if id is undefined", function () {

  //   const state = {
  //     ...db,
  //     cart: {
  //     }
  //   };

  //   let action = {
  //     type: "ADD_TO_CART"
  //   };

  //   let result = reducer(state, action);
  //   expect(result).toEqual({
  //     ...db,
  //     cart: {
  //     }
  //   })
  // });
  it("Removes from cart successfully", function () {

    const state = {
      ...db,
      cart: {
      }
    };

    let addAction = {
      type: "ADD_TO_CART",
      id: "test id"
    };

    let cartWithItem = reducer(state, addAction);
    expect(cartWithItem).toEqual({
      ...db,
      cart: {
        "test id": 1
      }
    });

    let removeAction = {
      type: "REMOVE_FROM_CART",
      id: "test id"
    }

    let removed = reducer(cartWithItem, removeAction);

    expect(removed).toEqual({
      ...db,
      cart: {
      }
    });
  });

  it("Items in cart cannot have a negative count", function () {

    const state = {
      ...db,
      cart: {
      }
    };

    let addAction = {
      type: "ADD_TO_CART",
      id: "test id"
    };

    let cartWithItem = reducer(state, addAction);
    expect(cartWithItem).toEqual({
      ...db,
      cart: {
        "test id": 1
      }
    });

    let removeAction = {
      type: "REMOVE_FROM_CART",
      id: "test id"
    }

    let removed = reducer(cartWithItem, removeAction);

    let removedTwice = reducer(removed, removeAction);

    expect(removedTwice).toEqual({
      ...db,
      cart: {
      }
    });
  });
});
