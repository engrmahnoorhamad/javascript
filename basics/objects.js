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
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());