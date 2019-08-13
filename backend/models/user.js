const db = require("../db");
const bcrypt = require("bcrypt");

const BCRYPT_WORK_FACTOR = 12;

class User {
  static async authenticate(data) {
    // check if user exists
    const result = await db.query(
      `SELECT username,
      hashed_password,
      first_name,
      last_name,
      email,
      seller_status
      FROM users
      WHERE username = $1`,
      [data.username]
    );

    const user = result.rows[0];

    if (user) {
      // compare hashed password to a new hash from password
      const isValid = await bcrypt.compare(data.password, user.hashed_password);
      if (isValid) {
        return user;
      }
    }

    const invalidPassword = new Error("Invalid Credentials");
    invalidPassword.status = 401;
    throw invalidPassword;
  }

  // Register user with data. Returns new user data.

  static async register(data) {
    const duplicateCheck = await db.query(
      `SELECT username
      FROM users
      WHERE username = $1`,
      [data.username]
    );

    if (duplicateCheck.rows[0]) {
      const err = new Error(
        `There already exists a user with username '${data.username}`);
        err.status = 409;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);

    const result = await db.query(
      `INSERT INTO users
      (username, hashed_password, first_name, last_name, email, seller_status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING username, hashed_password, first_name, last_name, email, seller_status`,
      [
        data.username,
        hashedPassword,
        data.first_name,
        data.last_name,
        data.email,
        data.seller_status
      ]);

      return result.rows[0];
  }

}