const db = require("../db");

class Product {

  // Get all products
  static async getAll() {

    const result = await db.query(
      `SELECT 
      id,
      title,
       price,
        quantity,
         description,
          seller_id,
          image_url
           FROM products`
    );
    return result.rows;
  }

  static async checkPromo(data) {
    const result = await db.query(
      `SELECT name, amount, discount_type, products_applicable
      FROM promocodes
      WHERE name ILIKE $1`,
      [data.promocode]
    )
    return result.rows[0];
  }
}
module.exports = Product;