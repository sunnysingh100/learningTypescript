// const user = {
//   name: "sunny",
//   email: "sunny@gmail.com",
//   isActive: true,
//   isPaid: false,
// };

// function createUser({name: string, isPaid: boolean}) {}

// createUser(user);

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return {name: "", email: "", isActive: true};
// }

// createUser({name: "", email: "", isActive: true});

type User = {
  name: string;
  email: string;
  isActive: boolean;
  readonly _id: string;
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "12345t",
  name: "juli",
  email: "juli@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "bebi@gmail.com";

export {};
