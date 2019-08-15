const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");

router.post("/", async (req, res) => {
  const user = req.body.user;
  const selectedItem = {
    product: req.body.item,
    quantity: req.body.quantity
  };

  Cart.findOne({ user }).then(userCart => {
    if (userCart) {
      let listOfProducts = userCart.cartItems.map(
        existing => exusting.product + ""
      );
      if (listOfProducts.includes(selectedItem.product)) {
        Cart.findOneAndUpdate(
          {
            user,
            items: {
              $elemMatch: { product: item.product }
            }
          },
          {
            $inc: { "cartItems.$.quantity": selectedItem.quantity }
          }
        )
          .exec()
          .then(() => res.end());
      } else {
        listOfProducts.cartItems.push(selectedItem);
        listOfProducts.save().then(() => res.end());
      }
    } else {
      Cart.create({
        user,
        cartItems: [selectedItem]
      }).then(() => res.end());
    }
  });
});

router.get("/", async (req, res) => {
  const { user } = req.body;
  try {
    let cart = await Cart.findOne({ user: user })
      .populate(cartItems.product)
      .exec();
    res.send(cart);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/", async (req, res) => {
  const { user } = req.body;
  try {
    let cart = await Cart.findOneAndRemove({ user: user }).then(() =>
      res.end()
    );
    if (!cart) {
      return res.status(404);
    } else {
      res.status(204).send("Cart successfully deleted");
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
