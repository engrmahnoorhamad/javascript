// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "mahnoor",
    "full name": "mahnoor hamad",
    [mySym]: "mykey1",                  //symbol written in [] if without it ,it will be string
    age: 18,
    location: "Jaipur",
    email: "mahnoor@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "mahnoor@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "mahnoor@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


const mySymone=Symbol("keyvalue1");
const school={
    ["total rooms"]:20,
    studentName:"mahnoor",
    email:"mahnoor@gmail.com",
[mySym]: "myValue" // Using the symbol variable as a key
};

console.log(typeof school[mySym]); // Output: "string" (the value is still a string)
console.log(school[mySym]);

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
console.log(myHonda.engine.size)

const student = {
    firstName: "Mahnoor",
    lastName: "Hamad",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`; // 'this' refers to the current object
    }
};
console.log(student.fullName()); 