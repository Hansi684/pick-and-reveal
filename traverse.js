const numbers = [10, 20, 30, 40, 50];

// Method A: Traditional 'for' loop (Excellent for control)
console.log("Using traditional for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Element at index ${i} is: ${numbers[i]}`);
}

// Method B: Modern 'forEach' loop (Cleanest approach)
console.log("\nUsing forEach loop:");
numbers.forEach((element, index) => {
    console.log(`Element at index ${index} is: ${element}`);
});
// spread operator in object
const obj2={
    name:"rahul",
    age =10,
    city="delhi"
}
const newobj={...ojj,...obj2};
console.log(newobj);
//destructing lin object
const {name:myname,age}=obj2;
console.log(age);

//object inside array
const users={
    {username:"ajay",email:"abc@gmsil.com",gender:"male"},
    {username:"pooja",email:"abc@gmsil.com",gender:"female"}, 
    {username:"vijay",email:"abc@gmsil.com",gender:"male"},
}
for(let user of users)
{
    console.log(user);
}
for(let user of users)
{
    console.log(user.username,user,email,user.gender);
}
const{}