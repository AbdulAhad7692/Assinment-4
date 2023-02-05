//CHAPTER 5 //

// QUESTION NO 1 //

var num1 = 2 + 4;

document.write("Sum of 2 and 4 is " + num1)
document.write("<br>")

num1 = 2 * 4;

document.write("Product of 2 and 4 is " + num1)
document.write("<br>")

num1 = 2 - 4;

document.write("2 minus 4 equal to " + num1)
document.write("<br>")

num1 = 2 / 4;

document.write("2 divide by 4 is " + num1)
document.write("<br>")

num1 = 2 % 4;

document.write("mod of 2 & 4 is " + num1)
document.write("<br>")
document.write("<br>")

// QUESTION NO 2 //

var num2;
document.write("Variable after declaration is Undefined")
document.write("<br>")

num2 = 4;
document.write("Initail Value : " + num2)
document.write("<br>")

num2 = num2 + 2;
document.write("value after increment is :" + num2)
document.write("<br>")

num2 = num2 + 7;
document.write("value after addition is : " + num2)
document.write("<br>")

num2 = num2 - 1
document.write("value after decrement is : " + num2)
document.write("<br>")

num2 = num2 / 3;
document.write("the remainder is : 0")
document.write("<br>")
document.write("<br>")

// QUESTION NO 4 //

var ticket = 600;
ticket = 600 * 5;
document.write("Total cost to buy 5 tickets to a movies is : " + ticket + "PKR")
document.write("<br>")
document.write("<br>")

// QUESTION NO 5 //

var table = 5;
document.write("<h1>Table of 5</h1>")
document.write("<br>")

document.write("1 x 5 = " + table * 1)
document.write("<br>")
document.write("2 x 5 = " + table * 2)
document.write("<br>")
document.write("3 x 5 = " + table * 3)
document.write("<br>")
document.write("4 x 5 = " + table * 4)
document.write("<br>")
document.write("5 x 5 = " + table * 5)
document.write("<br>")
document.write("6 x 5 = " + table * 6)
document.write("<br>")
document.write("7 x 5 = " + table * 7)
document.write("<br>")
document.write("8 x 5 = " + table * 8)
document.write("<br>")
document.write("9 x 5 = " + table * 9)
document.write("<br>")
document.write("10 x 5 = " + table * 10)
document.write("<br>")
document.write("<br>")

// QUESTION NO 6 //

document.write("<h1>Temperature Converter</h1>")
document.write("<br>")

var C = 25;
var F = (C * 9 / 5) + 32
document.write("25°C is " + F + "°")
document.write("<br>")

F = 70;
C = (F - 32) * 5 / 9
document.write("70°F is " + C + "°")
document.write("<br>")
document.write("<br>")

// QUESTION NO 7 //

var item1 = 480;
var item2 = 520;
var q1 = 4;
var q2 = 5;

document.write("Price of item 1 is : " + item1)
document.write("<br>")
document.write("Quantity of item 1 is " + q1)
document.write("<br>")
document.write("Price of item 2 is : " + item2)
document.write("<br>")
document.write("Quantity of item 2 is " + q2)
document.write("<br>")
document.write("Shipping Charges : 100")
document.write("<br>")
document.write("Total Cost of your order is : " + ((item1 * 4) + (item2 * 5) + 100))


// QUESTION NO 8 //


document.write("<h1>Marksheet</h1>")
document.write("<br>")
var obtained = 596;
var totalp = 625;
document.write("Total Marks : " + totalp)
document.write("<br>")
document.write("Obtained Marks : " + obtained)
document.write("<br>")
document.write((obtained / totalp) * 100)
document.write("<br>")
document.write("<br>")

// QUESTION NO 9 //

document.write("<h1>Currency in PKR</h1>")
var saudi = 74.04;
var usd = 277.81;
document.write("Total Curremcy in PKR :" + ((saudi * 25) + (usd * 10)))
document.write("<br>")
document.write("<br>")

// QUEsTION NO 10 //

var num = 5;
num = (((num + 5) * 10) / 2);
document.write("The Value is : " + num)
document.write("<br>")
document.write("<br>")

// QUESTION NO 11 //

document.write("<h1>Age Calculator</h1>")
var b_year = 2005;
document.write("Current year : " + b_year)
document.write("<br>")
var b_year2 = 2023;
document.write("Birth Year : " + b_year2)
document.write("<br>")
document.write("Your Age is : " + (b_year2 - b_year))
document.write("<br>")
document.write("<br>")

// QUESTION NO 12 //

document.write("<h1>the Geometrizer</h1>")
document.write("<br>")

var radius = 20;
var circumfrance;
circumfrance = 2 * 3.142 * 20;
var area;
area = 3.142 * (20 * 20);
document.write("The radius of the circle is : " + radius)
document.write("<br>")
document.write("The circumfrance of the circle is : " + circumfrance)
document.write("<br>")
document.write("The area of circle is : " + area)

// QUESTION NO 13 //

document.write("<h1>The lifetime supply calculator</h1>")

var chai = "chai";
var CurrentAge = 18;
var MaxAge = 65;
var max_snack = 3;

document.write("Your Favourite Snack : " + chai)
document.write("<br>")
document.write("Your Current Age : " + CurrentAge)
document.write("<br>")
document.write("Estimated Maximum Age : " + MaxAge)
document.write("<br>")
document.write("Amount of Snacks Per Day : " + max_snack)
document.write("<br>")
var total_snack = ((MaxAge - CurrentAge) * (365 * max_snack))
document.write("You will need " + total_snack + " to last you until the ripe old age of 65")
document.write("<br>")

// CHAPTER 6 //

document.write("<h1>CHAPTER 6-9</h1>")

// QUESTION NO 1 //

document.write("Result : ")
document.write("<br>")
document.write("The Value of a is : 10")
document.write("<br>")
document.write("_________________________")
document.write("<br>")
document.write("<br>")

var a = 10;
a++
document.write("The value of ++a is : " + a);
document.write("<br>")
document.write("Now The Value of  a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("The Value of a++ is : " + a)
document.write("<br>")
a++
document.write("Now the Value of a is : " + a)
document.write("<br>")
document.write("<br>")

--a 
document.write("The value of --a is : " + a)
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("The value of a-- is : " + a)
a--
document.write("<br>")
document.write("Now the value of a is : " + a)
document.write("<br>")
document.write("<br>")
document.write("<br>")


// QUESTION NO 2 //
var b = 2;
var c = 1;
document.write("The Value of a is  " + b)
document.write("<br>")
document.write("The Value of b is " + c)
document.write("<br>")
document.write("<br>")

--b;
--b - --c;
--b - --c + ++c;
--b - --c + ++c + c--;
document.write("Result is : " + b)
document.write("<br>")
document.write("<br>")
document.write("<br>")

// QUESTION NO 3 //
var data = prompt("Enter Your Name"); 
alert("Welcome "  + data);
document.write("<br>")
document.write("<br>")

// QUESTION NO 5 //
var t_data = prompt("Enter Number I'll show you it's table " , "5")
document.write( t_data + " x 1 = " + t_data * 1)
document.write("<br>")
document.write( t_data + " x 2 = " + t_data * 2)
document.write("<br>")
document.write( t_data + " x 3 = " + t_data * 3)
document.write("<br>")
document.write( t_data + " x 4 = " + t_data * 4)
document.write("<br>")
document.write( t_data + " x 5 = " + t_data * 5)
document.write("<br>")
document.write( t_data + " x 6 = " + t_data * 6)
document.write("<br>")
document.write( t_data + " x 7 = " + t_data * 7)
document.write("<br>")
document.write( t_data + " x 8 = " + t_data * 8)
document.write("<br>")
document.write( t_data + " x 9 = " + t_data * 9)
document.write("<br>")
document.write( t_data +" x 10 = " + t_data * 10)
document.write("<br>")
document.write("<br>")

//QUESTION NO 6 //

var sub1 = prompt("Subject 1","English")
var sub2 = prompt("Subject 2","Urdu")
var sub3 = prompt("Subject 3","Maths")
var t_marks = 100 ;

sub1marks = prompt("Enter " + sub1 + " Marks ")
sub2marks = prompt("Enter " + sub2 + " Marks ")
sub3marks = prompt("Enter " + sub3 + " Marks ")
document.write("<br>")
var sub1marks;
var sub2marks;
var sub3marks;

document.write("<h4>Subject 1</h4>")
document.write("Subject : "+ sub1) 
document.write("<br>")
document.write("Total marks is : " + t_marks)
document.write("<br>")
document.write("Obtained Marks is : " + sub1marks)

document.write("<h4>Subject 2</h4>")
document.write("Subject : "+ sub2) 
document.write("<br>")
document.write("Total marks is : " + t_marks)
document.write("<br>")
document.write("Obtained Marks is : " + sub2marks)

document.write("<h4>Subject 3</h4>")
document.write("Subject : "+ sub3) 
document.write("<br>")
document.write("Total marks is : " + t_marks)
document.write("<br>")
document.write("Obtained Marks is : " + sub3marks)

document.write("<h2>Percentage</h2>")
var result = -(-sub1marks)-(-sub2marks)-(-sub3marks)
document.write("Total Marks Obtained is : " + result)
document.write("<br>")
document.write("Total Marks : " + t_marks*3 )
document.write("<br>")
var per;
per = (result*100) / 300;
document.write("Your Percentage is :  " + per)




