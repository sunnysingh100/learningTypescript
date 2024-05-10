var score = 33;
score = 44;
score = "345";
var sunny = {
    name: "",
    id: 456,
};
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    if (typeof id === "number") {
        console.log(id + 4);
    }
}
getDbId("2345");
// Array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
var data3 = ["1", "2", "3", "4", 6789, true];
var seatAllotment;
seatAllotment = "aisle";
// it is not assignable
// seatAllotment = "crew";
