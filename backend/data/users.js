import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "Robert",
    email: "robert@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Rachel Green",
    email: "rachel@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Ross Geller",
    email: "ross@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Monica Geller",
    email: "monica@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Joey Tribbiani",
    email: "joey@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Chandler Bing",
    email: "chandler@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Phoebe Buffay",
    email: "phoebe@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Ursula Buffay",
    email: "ursula@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Malcolm Wilkerson",
    email: "malcolm@example.com",
    password: bcrypt.hashSync("password", 10),
  },
  {
    name: "Barney Stinson",
    email: "barney@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
];

export default users;
