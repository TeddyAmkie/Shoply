import { addToCart, removeFromCart } from "./actionCreators";

describe("Action creators CRUD", function () {
    it("Create an action with type 'ADD_TO_CART' and a second key of id", function () {
        const id = "test"

        expect(addToCart(id)).toEqual({
            type: "ADD_TO_CART",
            id: "test"
        });
    });

    it("Create an action with type 'REMOVE_FROM_CART' and a second key of id", function () {
        const id = "test"

        expect(removeFromCart(id)).toEqual({
            type: "REMOVE_FROM_CART",
            id: "test"
        });
    });


})