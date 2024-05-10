function addTwo(num: number): number {
  return num + 456;
}

addTwo(4);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("sunny");

function signupUser(name: string, email: string, isPaid: boolean = false) {}
signupUser("ravi", "ravi@gmail.com");

function newFun(myVal: number): boolean | string {
  if (myVal > 20) {
    return true;
  }
  return "200 OK";
}

const getter = (s: string): boolean => {
  return false;
};

const heroes = ["thor", "spiderman", "marvel"];

export {};
