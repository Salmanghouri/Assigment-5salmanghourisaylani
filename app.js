//--Chap-1 (Alert)

//--Task-1 

function JavaScriptAlert() {
  alert("Hello World");
}
//--Task-2
function JavaScriptAlert2() {
    alert("Error! Please enter a valid Password.");
  }
  //--Task-3
function JavaScriptAlert3() {
    alert("Welcome to JavaScript Land... \n Happy Coding!");
  }
    //--Task-4
function JavaScriptAlert4() {
    alert("Welcome to JS Land..");
    alert("Happy Coding!"); 
  }
  //--Task-5
  function JavaScriptAlert5() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

//--Chap-2 (Variable For Strings)
    //--Task-1
    function JavaScriptAlert6() {
      
Username = 'salman98';
myname = 'Salman wasim ghouri';
age = '15 year old';
qualification = 'Java Script Developer';


alert(Username); 
alert(myname); 
alert(age); 
alert(qualification); 
      }
   //--Task-2
function JavaScriptAlert7(){
    alert("PIZZA \n PIZZ \n PIZ \n PI \n P");
}
   //--Task-3
   function JavaScriptAlert8(){
    var x = "My email adress is salmanwasimghouri@gmail.com";
    alert(x);
}
   //--Task-4
   function JavaScriptAlert9(){
    var x = "I am trying to learn from the book A smarter vay to learn javascript";
    alert(x);
   }
//--Task-5
   
function JavaScriptAlert11() {
    var txt;
    var a= ("Yah! I can write HTML content through JavaScript");
    
    document.getElementById("demo1").innerHTML = a;
}
//--Task-6
   
function JavaScriptAlert12() {
    var txt;
    var a= ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
    
alert(a);
}

//--Chap-3 (Variable For Numbers)
    //--Task-1
    function JavaScriptAlert13() {
        var txt;
        var age="21";
        var a= ("I am " + age + " year old");
    alert(a);
    }

 //--Task-2
 function JavaScriptAlert14() {
        var txt;
        var visits;
for (visits = 0; visits < 5; visits++) {
    var b= ("You Have visited this site " + visits + " times");
}
document.getElementById("demo").innerHTML = b;
        
    alert(b);
    }

 //--Task-3
 function JavaScriptAlert15() {
    var a;
    var person = prompt("Please enter your Birth year:", "1990");
    
      a = "My birth  year is " + person + "." + " \n Data type of my ddeclared variable is number ";
    document.getElementById("sa").innerHTML = a;
 }

 //--Task-4
 function JavaScriptAlert16() {
    var a;
    var web = ("Welcome to www.alistore.com.");
    var name = prompt("Enter your name. :", "john");
    var productname = prompt("Product name :", "Puma");
    var tshirts = prompt("Place your shirt quantity. :", "5");
    
      a ="<b>"+ name + " Ordered " + tshirts + " T-Shirts(s) "+ " Brand " + productname + " on   " + web ;
    document.getElementById("sa1").innerHTML = a;
 }


 //--Chap-4 (Variable Names:Leagal & ILLegal)
    //--Task-1
    function JavaScriptAlert17() {
     var  [name , age, bloodgroup] = 
    ["Salman Ghouri", "21","B+" ];

    b= "My name is " + name + ". & My Age " + age +"Year Old" + ". & My blood Group  is " + bloodgroup;
    document.getElementById("sal1").innerHTML = b;
    }

     //--Task-2
     function JavaScriptAlert18() {
      var  [name , age, bloodgroup] = 
     ["Salman Ghouri", "21","B+" ];
 
     a= "a) A heading stating “Rules for naming JS variables”" ;
     b= "b) Variable names can only contain ______, ______,______ and ______.For example $my_1stVar" ;
     c= "c) Variables must begin with a ______, ______ or_____. For example $name, _name or name" ;
     d= "d) Variable names are case ________" ;
     e="e) Variable names should not be JS _________";

     document.getElementById("sal12").innerHTML = a;
     document.getElementById("sal2").innerHTML = b;
     document.getElementById("sal3").innerHTML = c;
     document.getElementById("sal4").innerHTML = d;
     document.getElementById("sal5").innerHTML = e;
     }


      //--Chap-5 (Maths Expression)
    //--Task-1
    function JavaScriptAlert19() {
      var a=3;
      var b=5;
      var c=a+b;
      d= "Sum of "+ a +" & "+ b + " is " + c ;
      document.getElementById("ma1").innerHTML = d;
    }
    
      //--Task-2
      function JavaScriptAlert20() {
        var a=3;
        var b=5;
        var c=a+b;
        var j=a/b;
        var k=a*b;
        var l=a-b;
        d= "Sum of "+ a +" + "+ b + " is equal to " + c ;
        e= "Sum of "+ a +" / "+ b + " is equal to " + j ;
        f= "Sum of "+ a +" * "+ b + " is equal to " + k ;
        g= "Sum of "+ a +" - "+ b + " is equal to " + l ;
        document.getElementById("ma2").innerHTML = d;
        document.getElementById("ma3").innerHTML = e;
        document.getElementById("ma4").innerHTML = f;
        document.getElementById("ma5").innerHTML = g;
      }

    //--Task-3
    function JavaScriptAlert21() {
      var a = prompt("Enter a value : ", "5");
      var i=a++;
      var f=i++; 
      var c=f+7;
      var v=c++;
      var z=v%3;
       
      d= a ;
      o= f ;
      k= c ;
      l= v ;
      p= z ;
      document.getElementById("ma15").innerHTML = d;
      document.getElementById("ma18").innerHTML = o;
      document.getElementById("ma16").innerHTML = k;
      document.getElementById("ma17").innerHTML = l;
      document.getElementById("ma19").innerHTML = p;
    }
    //--Task-4
    function JavaScriptAlert22() {
      var a = prompt("Enter a tickets : ", "5");
      var b=600;
      c=a*b;
      d= "Total Cost to Buy "+ a + " tickets to a movie is " +c + "PKR";
      document.getElementById("ma20").innerHTML = d;
    }

     //--Task-5
     function JavaScriptAlert23() {
      var a=3;
      var b=a*1;
      var c=a*2;
      var d=a*3;
      var e=a*4;
      var f=a*5;
      var g=a*6;
      var h=a*7;
      var i=a*8;
      var j=a*9;
      var k=a*10;


      l= a + " * " +" 1 "+ " = "+ b ;
      m= a + " * " +" 1 "+ " = "+ c ;
      n= a + " * " +" 1 "+ " = "+ d ;
      o= a + " * " +" 1 "+ " = "+ e ;
      p= a + " * " +" 1 "+ " = "+ f ;
      q= a + " * " +" 1 "+ " = "+ g ;
      r= a + " * " +" 1 "+ " = "+ h ;
      s= a + " * " +" 1 "+ " = "+ i ;
      t= a + " * " +" 1 "+ " = "+ j ;
      u= a + " * " +" 1 "+ " = "+ k ;
      document.getElementById("ma21").innerHTML = l;
      document.getElementById("ma22").innerHTML = m;
      document.getElementById("ma23").innerHTML = n;
      document.getElementById("ma24").innerHTML = o;
      document.getElementById("ma25").innerHTML = p;
      document.getElementById("ma26").innerHTML = q;
      document.getElementById("ma27").innerHTML = r;
      document.getElementById("ma28").innerHTML = s;
      document.getElementById("ma29").innerHTML = t;
      document.getElementById("ma30").innerHTML = u;
    }
//--Chap-6 (Maths Expression)
     //--Task-6
     function JavaScriptAlert24() {
    
      var a = prompt("Enter Temprature in Celcius (C)  : ", "25");
      var b = prompt("Enter Temprature in Fehriheit (F)  : ", "70");
      //celcious
      c=b-32;
      z=5/9;
      k=c*z;

      //fehrinheit

      f=a*(9/5);
      i=f+32;

      s=a+"°C to " + i+"ºF";
      h=b+"°C to " + k+"ºF";
      document.getElementById("ma31").innerHTML = s;
      document.getElementById("ma32").innerHTML = h;

     
    }

    //--Task-7
    function JavaScriptAlert25() {
      var price1=650;
      var price2=100;
      var a = prompt("Enter a Quantity of Item 1 : ", "3");
      var b = prompt("Enter a Quantity of Item 2 : ", "7");

      var i=price1*a;
      var j=price2*b;
      var p=100;
      var z=i+j+p;
      
      
      q="Price of item 1 is "+ price1;
      w="Quantity of Item 1 is " + a;
      e="Price of item 2 is "+ price2;
      r="Quantity of Item 2 is " + b;
      t="Shipping Charges is " +p;
      
      

      f="Total Cost Of your Order is "+z;
      document.getElementById("ma33").innerHTML = q;
      document.getElementById("ma34").innerHTML = w;
      document.getElementById("ma35").innerHTML = e;
      document.getElementById("ma36").innerHTML = r;
      document.getElementById("ma37").innerHTML = t;
      document.getElementById("ma38").innerHTML = f;
      

    }


    //--Chap-9-11 (User Input)
    //--Task-8
    function JavaScriptAlert26() {
      var a = prompt("Toatal marks : ", "980");
      var b = prompt("Mark Obtained : ", "804");

     
      var z=b*100/a;
      
      
      q="Total marks "+ a;
      w="Mark Obtained " + b;
      e="Percentage "+ z + "%";
      
      document.getElementById("ma39").innerHTML = q;
      document.getElementById("ma40").innerHTML = w;
      document.getElementById("ma41").innerHTML = e;


    }
     //--Task-9
     function JavaScriptAlert27() {
      var a = prompt("Enter a value 1 : ", "3");
      var v=a+5;
      var d=v*10;
      var f=d/2;
      

     
      
      
      q="Total is "+ f;
      
      document.getElementById("ma42").innerHTML = q;


    }
     //--Task-9
     function calcNumbers(result){
      form.displayResult.value=form.displayResult.value+result;
      
  }


//chap#6
function JavaScriptAlertc1() {
  var a = 10;
  document.write("Result <br> The value of a is :" + a)
  document.write("<br>.............................................")
  var b = ++a ;
  document.write("<br> The value of ++a is :" + b)
  document.write("<br> Now The value of a is :" + b)
  document.write("<br> <br>The value of a++ is :" + b)
  
  var c = ++b ;
  document.write("<br> Now The value of a is :" + c)
  var d = --c 
  document.write("<br> <br>The value of --a is :" + d)
  document.write("<br> Now The value of a is :" + d)
  
  document.write("<br> <br>The value of a-- is :" + d)
  var e =--d;
  document.write("<br>The value of a-- is :" + e)
  }
  //chap#12
  //Task#1
  function JavaScriptAlertc2() {
  var input =prompt("Enter a Character","your character is")
  if (input>=65 && input<=90)
      alert("Character is a capital letter");
    else if (input>=97 && input<=122)
      alert("Character is a small letter");
    else if (input>=48 && input<=57)
      alert("Character is a digit");
    else if ((input>0 && input<=47)||(input>=58 && input<=64)||
                 (input>=91 && input<=96)||(input>=123 && input<=127))
          alert("Character is a special symbol");
  }     
  //Task#2
  function JavaScriptAlertc3() {
  var input = +prompt("Enter your first Integar",'your integar is')
  var input1 = +prompt("Enter your Second Integar",'your integar is')
  if(input>input1)
  {
      alert(input + " is greater then " + input1)
  }
  else if (input1>input)
  {
      alert(input1 + " is greater then " + input)
  }
  else
  {
      alert(input + " is equal to " + input1)
  }
  }
  //Task#3
  function JavaScriptAlertc4() {
  var Number = +prompt("Enter a Number")
  if (Number>0){
      alert("Number is Positive")
  }
  else if (Number<0){
      alert("Number is Negative")
  }
  else{
      alert("Number is zero")
  }
  }
  //task#4
  function JavaScriptAlertc5() {
  function isVowel(argument)
  {
    var argument = argument.toLowerCase();
  
      var vowels = (['a', 'e', 'i', 'o', 'u']);
  
      for (var i = 0; i <= vowels.length; i++)
      {
          if (argument != vowels[i])
          {
              continue;
          }
          return true;
      }
      return false;
  }
  var char = prompt("Enter a character")
  
  if (isVowel(char)) {
    alert(char + " is a vowel");
  } 
  else {
    alert(char + " is not a vowel");
  }
  }
  //task#5
  function JavaScriptAlertc6() {
  var input = prompt("Enter your Password");
  var password = "azam1235";
  
  if(input == password){
      alert("Correct! The password you entered matches the original password");
  }
  else if(input == ""){
      alert(" Please enter your password")
  }
  else{
      alert("Incorrect password")
  }
  
  }
  //Task#6
  function JavaScriptAlertc7() {
  var greeting;
  var hour = 13;
  if (hour < 18) {
  greeting = "Good day";
  alert(greeting)
  }
  else{
  greeting = "Good evening";
  }
  }
  //Task#7
  function JavaScriptAlertc8() {
  var time = prompt("Enter a time");
  
  if (time >= 0000 && time<1200 ) 
  {
      alert("Good morning");
  }
  else if (time>=1200 && time<1700 )  
  {
      alert("Good afternoon");
  }
  else if (time>=1700 && time<2100 )   
  {
      alert("Good evening");
  }
  else if (time>=2100 && time<=2359)
  {
      alert("Good night");
  }
  else
  {
      alert("Enter a correct time");
  }
  
  }
  //chap14
  
  //Task1
  function JavaScriptAlertc9() {
  var score=[320 , 230 , 480 , 120];
  document.write("Scores of student : " + score + "<br>")
  score.sort(function(a,b){return a-b});
  document.write("Ordered scores of student : " + score);
  
  }
  
  //chap17to20
  //task1
  function JavaScriptAlertc10() {
  
  var array = [
      [0, 1, 2, 3],
      [1, 0, 1, 2],
      [2, 1, 0, 1]
  
  ];
  for(var x = 0; x < 3; x++)
  {
      for(var y = 0; y < 4; y++)
      {
          document.write(array[x][y] + " ");
      }
  
      document.write("<br>");
  }
  }
  
  //Task2
  function JavaScriptAlertc11() {
  
  for(var i = 1 ; i <= 10 ; i++)
  {
      document.write(i + "<br>")
  }
  }
  //task3
  function JavaScriptAlertc12() {
  
  var table = prompt("Enter a number to show its multiplication table");
  var lenght = prompt("Enter a lenght multiplication table");
  for (var i = 1 ;i <= lenght ; i++)
  {
      document.write( table + " x " + i + " = " + table*i + "<br>")
  }
  }
  //task4
  function JavaScriptAlertc13() {
  
  var friut =["apple", "banana", "mango", "orange","strawberry"]
  for(var i = 0 ; i < friut.length ; i++)
  {
      document.write(friut[i] + "<br>")
  }
  document.write("<br>")
  for(var i = 0 ; i < friut.length ; i++)
  {
      document.write("Element at index " + i + " is " + friut[i] + "<br>")
  }
  
  //task5
  function JavaScriptAlertc14() {
  
  document.write("Counting: <br>")
   for(var i = 1 ; i <= 15 ; i++)
   {
       document.write(i + " , " )
   }
  document.write("<br> <br>")
   document.write("Reverse Counting: <br>")
   for(var i = 10 ; i >= 1 ; i--)
   {
       document.write(i + " , ")
   }
  
   document.write("<br> <br>")
   document.write("Even: <br>")
   for(var i = 0 ; i <= 20 ; i++)
   {
       if(i%2==0)
       {
       document.write(i + " , ")
      }
   }
  
   document.write("<br> <br>")
   document.write("Odd: <br>")
   for(var i = 0 ; i <= 20 ; i++)
   {
       if(i%2!=0)
       {
       document.write(i + " , ")
      }
   }
  
   document.write("<br> <br>")
   document.write("Series: <br>")
   for(var i = 2 ; i <= 20 ; i=i+2)
   {
       document.write(i + "k , ")
   }
  }
   //task6
   function JavaScriptAlertc15() {
  
   var input = prompt("Enter your Item");
  input = input.toLowerCase();
  var item = ['cake','apple pie', 'cookie', 'chips', 'patties'];
  //            0        1           2         3        4
  
  for(var i = 0 ; i <= item.length; i++)
  {
      if(item[i] == input) {
  
          document.write(input + " is available at index " + i + " in our bakery");
          break;
  
      }
      else if(i == item.length) { 
          document.write("We are sorry. " + input +  " is not available in our bakery ");
      }
  }
   }
  //task7
  
  function JavaScriptAlertc16() {
  
  var largest="";
  var item=[24,53,78,91,12];
  largest=item[0];
  for(var i = 1 ; i <= 4 ; i++)
  {
      if(item[i] > largest )
      {
          largest = item[i];
      }
  }
  document.write("The largesr number is : " + largest);
  }
  //task8
  function JavaScriptAlertc17() {
  
  var smallest="";
  var item=[24,53,78,91,12];
  smallest=item[0];
  for(var i = 1 ; i <= 4  ; i++)
  {
      if(item[i] < smallest )
      {
          smallest = item[i];
      }
  }
  document.write("The smallest number is : " + smallest);
  }
  //task9
  function JavaScriptAlertc18() {
  
  for (var i = 5 ; i <= 100 ; i = i+5)
  {
      document.write(i + " , ");
  }
  
  }
  }
  