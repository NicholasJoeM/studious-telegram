///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  
console.log(summedPrice);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

  const cartTotal = 50;
  const couponValue = 10;
  const tax = 0.06;

function calcFinalPrice(cartTotal, couponValue, tax) {
    
    const taxAmount = cartTotal * tax;
  
    const discountedTotal = cartTotal - couponValue;
  
    const finalPrice = discountedTotal + taxAmount;
  
    return finalPrice;
  }
  const finalPrice = calcFinalPrice(cartTotal, couponValue, tax);
  console.log(finalPrice);

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
firstName: This property would store the first name of the customer. This information is important for the restaurant to address 
the customer properly and personalize their experience on the website.

lastName: This property would store the last name of the customer. This information is also important 
for the restaurant to address the customer properly and personalize their experience on the website.

email: This property would store the email address of the customer. This information is important for the restaurant to communicate 
with the customer regarding their order, payment, and delivery details.

phoneNumber: This property would store the phone number of the customer. This information is important for the restaurant to contact 
the customer in case there are any issues with their order or delivery.

I have chosen the data type string for all of the properties because they all contain textual information. The string data type is ideal for storing textual data in JavaScript.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    firstName: "Nicholas",
    lastName: "Mills",
    email: "nicholasmills@email.com",
    phoneNumber: "000-000-4321",
  };
  