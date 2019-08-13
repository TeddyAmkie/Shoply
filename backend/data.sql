CREATE TABLE users (
  id serial PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  seller_status boolean NOT NULL
);

CREATE TABLE products (
  id serial PRIMARY KEY,
  seller_id INTEGER NOT NULL REFERENCES users ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  quantity double precision,
  price double precision
);

CREATE TABLE promocodes (
  id serial PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  amount INTEGER NOT NULL,
  discount_type TEXT NOT NULL,
  promo_start timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  promo_end timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  products_applicable INTEGER NOT NULL REFERENCES products ON DELETE CASCADE
);

CREATE TABLE reviews (
  product_id INTEGER NOT NULL REFERENCES products,
  user_id INTEGER NOT NULL REFERENCES users,
  review_text TEXT NOT NULL,
  review_score INTEGER NOT NULL
);

CREATE TABLE orders (
  id serial PRIMARY KEY,
  seller_id INTEGER NOT NULL REFERENCES users,
  buyer_id INTEGER NOT NULL REFERENCES users,
  sell_price INTEGER NOT NULL,
  status TEXT NOT NULL,
  order_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  tracking_number TEXT
);

--------------------------- seed users ---------------------------



INSERT INTO users (username, hashed_password, first_name, last_name, email, seller_status)
VALUES ('testuser', 'secret', 'testfirst', 'testlast', 'test@test.com', 'true');

INSERT INTO users (username, hashed_password, first_name, last_name, email, seller_status)
VALUES ('user2', 'secret', 'test2', 'lasttest2', 'test2@test.com', 'false');



--------------------------- seed products ---------------------------



INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'TV',
  'A beautiful, big-screen TV. Because hey, Netflix isn''t going to watch itself.',
  'https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue',
  '5',
  '219.99'
  );

INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'Microwave',
  'Heat your food with the power of SCIENCE!',
  'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
  '8',
  '100.00'
  );

INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'Toaster oven',
  'Tasty bread not included.',
  'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg',
  '20',
  '20.49'
  );

INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'Chair',
  'It''s a chair. You can sit in it.',
  'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
  '152',
  '100.89'
  );

INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'Mirror',
  'Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.',
  'https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0',
  '1000',
  '20.99'
  );

INSERT INTO products (seller_id, title, description,image_url, quantity, price)
VALUES (
  '1',
  'Phone',
  'Because there are absolutely no downsides that come with easier access to social media.',
  'https://images-na.ssl-images-amazon.com/images/I/717DO5Q-aCL._SY879_.jpg',
  '250',
  '399.99'
  );


CREATE FUNCTION thirty_day_promo() RETURNS trigger
LANGUAGE plpgsql
    AS $$
BEGIN
  DELETE FROM promocodes WHERE promo_start < NOW() - INTERVAL '30 days';
  RETURN NULL;
  END;
$$;

CREATE TRIGGER trigger_thirty_day_promo
  AFTER INSERT on promocodes
  EXECUTE PROCEDURE thirty_day_promo();

-- CREATE FUNCTION thirty_day_promo() RETURNS trigger
--     LANGUAGE plpgsql
--     AS $$
-- DECLARE
--   row_count int;
-- BEGIN
--   DELETE FROM promocodes WHERE timestamp < NOW() - INTERVAL '30 days';
--   IF found THEN
--     GET DIAGNOSTICS row_count = ROW_COUNT;
--     RAISE NOTICE 'DELETED name FROM promocodes',
--   END IF;
--   RETURN NULL;
-- END;
-- $$;


INSERT INTO promocodes (name, amount, discount_type, products_applicable)
VALUES (
  'SUMMER20',
  '20',
  'percent',
  '1'
);

-- INSERT INTO promocodes(promo_end)
-- VALUES (
--   DATE_ADD (promo_start, 1, DATETIME)
-- );