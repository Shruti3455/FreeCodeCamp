import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "shruti suman",
    email: "shruti@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "krivi anand",
    email: "krivi@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
