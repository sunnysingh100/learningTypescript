let score: number | string = 33;

score = 44;

score = "345";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let sunny: User | Admin = {
  name: "",
  id: 456,
};

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  }
  if (typeof id === "number") {
    console.log(id + 4);
  }
}

getDbId("2345");

// Array

const data: number[] = [1, 2, 3, 4];

const data2: string[] = ["1", "2", "3", "4"];

const data3: (string | number | boolean)[] = ["1", "2", "3", "4", 6789, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

// it is not assignable
// seatAllotment = "crew";
