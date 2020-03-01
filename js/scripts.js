//business logic for delivery contact

function DeliveryAddress () {
    this.contacts = [];
}
DeliveryAddress.prototype.addcontact = function (contact){
    this.contacts.push(contact);
}
function Dcontact (firstName,lastName,phoneNumber,emailAddress,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = emailAddress;
    this.address = address;
}
Dcontact.prototype.fullName =function (){
    return this.firstName + " " +this.lastName;
}
function PizzaOrder (){
    this.orders = [];
}
PizzaOrder.prototype.addorder = function (order){
    this.orders.push(order);
}

function Order (type,topping,crust,size,quantity){
    this.type = type;
    this.topping = topping;
    this.crust = crust;
    this.size = size;
    this.quantity = quantity;
}



var deliveryContact = new DeliveryAddress();
var customerDisplay = deliveryContact.contacts;
var pizzaorder = new PizzaOrder();
var pizzaDisplay = pizzaorder.orders;

var pizzaPrice = {
    deluxeMega : 1300,
    deluxeLarge : 1000, deluxeRegular : 800, classicMega : 1150, classicLarge : 900, classicRegular : 650, mushrooms : 150, blackolives : 200, cheese : 100, onions : 80, red_green_pepper : 50,
}


// user logic
$(document).ready(function(){
    var price;
    var totalPrice;
    $("#makeOrder").submit(function(e){
        e.preventDefault();
        var toppings = $('input[type="checkbox"]:checked').val();
        var pizzacrust = $("#pizzacrust").val();
        var size = $("#pizzasize").val();
        var quantity = $("#quantity").val();
        var type = $("#pizzatype").val();
    
        var customerOrder = new Order (type,toppings,pizzacrust,size,quantity);
        pizzaorder.addorder(customerOrder);

        var pType = pizzaDisplay[0].type;
        var pTop = pizzaDisplay[0].topping;
        var pCrust = pizzaDisplay[0].crust;
        var pSize = pizzaDisplay[0].size;
        var pQuantity = pizzaDisplay[0].quantity;
        // var price;
        // var totalPrice;
            switch (pTop) {
                case "mushroom":
                    price = pizzaPrice.deluxeMega + pizzaPrice.mushrooms ;
                    break;
                case "blackolives":
                    price = pizzaPrice.deluxeMega + pizzaPrice.blackolives ;
                    break;
                case "onions":
                    price = pizzaPrice.deluxeMega + pizzaPrice.onions ;
                    break;
                case "cheese":
                    price = pizzaPrice.deluxeMega + pizzaPrice.cheese ;
                    break;
                case "pepper":
                    price = pizzaPrice.deluxeMega + pizzaPrice.red_green_pepper ;
                    break;
                default:
                    break;
            }

            
          totalPrice = price*pQuantity; 

        $("#placecrust").text(pCrust);
        $("#placesize").text(pSize);
        $("#placetoping").text(pTop);
        $("#placequantity").text("x"+pQuantity);
        $("#placetype").text(pType);
        // $("#placeprice").text(totalPrice);
    });

    //user logic for delivery contact
    // $("#contactD").hide();


    $("#contactD").submit(function(e){
        e.preventDefault();
    


        var firstname = $("#fName").val();
        var lastname = $("#lName").val();
        var phonenumber = $("#pNumber").val();
        var email = $("#emailA").val();
        var  address = $("#tAddress").val();

        var customerContact = new Dcontact (firstname,lastname,phonenumber,email,address);
        deliveryContact.addcontact(customerContact);
        var fName = customerDisplay[0].firstName;
        var lName = customerDisplay[0].lastName;
        var pNumber = customerDisplay[0].phoneNumber;
        var eAddress = customerDisplay[0].emailAddress;
        var cAddress = customerDisplay[0].address;
        
        if (fName == "" || pNumber == "" || cAddress == ""){
            alert("Complete filling the form ")
        }else {
            alert("Thank you "+fName+" "+lName+" for your subscription."+eAddress+" will receive an email of our newsletter");
        }
    });
    var locate;
    var phonenumber;


    $("#comment").submit(function(e){
        e.preventDefault();
        var comment = $("#message").val();
    

        $("#placeComment").text(comment)
    });
    $(".btn1").click(function(e){
        e.preventDefault();
        alert("The delivery will cost 300Ksh.Please fill in your details on the form below")
        locate =  prompt("Enter your location: ");
        phonenumber =  prompt("Enter your Phone Number so that we are able to reach you: ");
       alert ("Dear customer, Your order will be delivered to "+ locate + " in not more than 20 minutes");
       $("#placeprice").text(totalPrice + 300);
    });
    $(".btn2").click(function(e){
        e.preventDefault();
        $("#placeprice").text(totalPrice + 0);
        alert("Thankyou dear customer! We look forward to serving you again");
    });

    $("#contactD").hide();
    $("#subscribe").click(function(){
        $("#contactD").show();
    })
});