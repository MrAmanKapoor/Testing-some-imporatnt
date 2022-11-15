function Sum_of_numbers_within_an_array() {
    var a = [];
    var x=0;
   
   
    let sum = 0;
    
    for (var i = 0; i < a.length; i++) {
        sum = sum+ a[i];
    }
    console.log(sum);
   
}



//.............factorial_of_a_Number..............//


}

//.......Fibonacci_Number........//

function Fibonacci_Number()
{
    
    var n = window.prompt("Find Fibonacci of a number, Enter a Number");
    function Fibonacci(n) {

        if(n>45)
        {
            return "Invalid Number"
        }
        if (n == 0) { return 0; }
        else if (n == 1) {
            return 1;
        }
        else {

            return Fibonacci(n - 1) + Fibonacci(n - 2);
        }

      
    }

    var result = Fibonacci(n);
    console.log(result);
    document.write("Fibonacci of " + n + " is " + result);
    alert("Fibonacci of " + n + " is " + result);

}
/////.......filters_out_negative_numbers....//
function filters_out_negative_numbers()
{

    var array = [];
    var x=0;
    while (x < 5) 
    {

        array[x] = window.prompt("Enter Array Element " + (array));
        x++;
    }
    document.write("Your Array is " + array);
array = array.filter(function(x) { return x > -1; });
console.log(array);

document.write("<br/>");
document.write("After Filtering Negative Numbers:" + array);

}

///......Return_Something_to_Me().......///

function Return_Something_to_Me()
{
  var  n=window.prompt("Type Something for me...!!");

  alert("Sorry I'm not Available...");

}

//.......Given a string, reverse each word in the sentence.........//
