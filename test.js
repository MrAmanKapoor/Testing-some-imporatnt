
        var form = document.getElementById('registration-form');

        form.addEventListener("submit", e => {
            document.getElementById("reg-btn").innerHTML = "Procesing....";
            e.preventDefault();
            fetch(form.action, {

                method: "POST",
                body: new FormData(document.getElementById("registration-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                document.getElementById("successfully").style.display = "block";
                document.getElementById("learn").style.display = "none";
            
            }
            );
        });


function verify() {
    if (document.getElementById("name").value.length == 0 ||
        document.getElementById("email").value.length == 0 ||
        document.getElementById("mobile").value.length == 0 
    ) {
        alert("Flll All The Details");
    }

    else if ( document.getElementById("checkbox1").checked &&   document.getElementById("checkbox2").checked ){
        document.getElementById("verify-btn").style.display = "block";
        document.getElementById("register-btn").style.display = "none";

    }
    else{ alert("Please Accept Terms & Condition");}

}


        function timmer() {
            var minutesLabel = document.getElementById("minutes");
            var secondsLabel = document.getElementById("seconds");
            var totalSeconds = 0;
           const myInterval= setInterval(setTime, 1000);

            function setTime() {
                ++totalSeconds;
                secondsLabel.innerHTML = pad(totalSeconds % 60);
                minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
                if (minutesLabel.innerHTML == 10) {
                    document.getElementById("test-box").style.display = "none";
                    document.getElementById("reg-btn").click();
                    clearInterval(myInterval);
                    

                }
                if (minutesLabel.innerHTML >= 8) {
                    document.getElementById("time").style.color = "red";
                }
            }

            function pad(val) {
                var valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;

                } else {
                    return valString;
                }
            }

        }
        let a;
        function fetchdata() {

            fetch('https://sheet.best/api/sheets/4a284fc5-a105-4fe5-a8b7-4e20c02f9da4')
                .then(response => response.json())
                .then(data => {

                    a = data;
                    if (a.detail) {
                        window.location.replace("Erroroccured.html");
                    }
                
                })
                document.getElementById("card").style.display = "none";
                document.getElementById("test-box").style.display = "block";
                var name = document.getElementById('name');
                document.getElementById('table-name').value = name.value;
                document.getElementById('table-namelable').innerHTML = name.value;
                
                var email = document.getElementById('email');
                document.getElementById('table-email').value = email.value;
                document.getElementById('table-emaillable').innerHTML = email.value;
                
                var mobile = document.getElementById('mobile');
                document.getElementById('table-mobile').value = mobile.value;
                document.getElementById('table-mobilelable').innerHTML = mobile.value;
                

        }
        var i = 0;
        function myFunction() {

            if (i <= 14) {

                let x = Math.floor((Math.random() * 39) + 1);
                i++;
                document.getElementById("ques-no").innerHTML = i + "/15";
                document.getElementById("ques").innerHTML = a[x].Question;

                document.getElementById("opt1").innerHTML = a[x].Option1;
                document.getElementById("opt3").innerHTML = a[x].Option3;
                document.getElementById("opt4").innerHTML = a[x].Option4;
                document.getElementById("opt2").innerHTML = a[x].Option2;

                document.getElementById("opt1").style.color="black";
           document.getElementById("opt2").style.color="black";
           document.getElementById("opt3").style.color="black";
           document.getElementById("opt4").style.color="black";
                
            }

            else {
                alert("Exam Finished");
            }

        }



        function sel1()
        {   let answer;
            let questions;
           answer= document.getElementById("opt1").innerHTML;
           questions=document.getElementById("ques").innerHTML;
           document.getElementById("opt1").style.color="Green";
           document.getElementById("opt2").style.color="black";
           document.getElementById("opt3").style.color="black";
           document.getElementById("opt4").style.color="black";

           console.log(answer);
           console.log(questions);
           console.log(i);

           document.getElementById("Ques"+i).value=questions;
           document.getElementById("Ans"+i).value=answer;

        }

        function sel2()
        {   let answer;
            let questions;
           answer= document.getElementById("opt2").innerHTML;
           questions=document.getElementById("ques").innerHTML;
           document.getElementById("opt1").style.color="black";
           document.getElementById("opt2").style.color="Green";
           document.getElementById("opt3").style.color="black";
           document.getElementById("opt4").style.color="black";

           document.getElementById("Ques"+i).value=questions;
           document.getElementById("Ans"+i).value=answer;

        }

        function sel3()
        {   let answer;
            let questions;
           answer= document.getElementById("opt3").innerHTML;
           questions=document.getElementById("ques").innerHTML;
           document.getElementById("opt1").style.color="black";
           document.getElementById("opt2").style.color="black";
           document.getElementById("opt3").style.color="green";
           document.getElementById("opt4").style.color="black";

        
           document.getElementById("Ques"+i).value=questions;
           document.getElementById("Ans"+i).value=answer;

        }

        function sel4()
        {   let answer;
            let questions;
           answer= document.getElementById("opt4").innerHTML;
           questions=document.getElementById("ques").innerHTML;

           document.getElementById("opt1").style.color="black";
           document.getElementById("opt2").style.color="black";
           document.getElementById("opt3").style.color="black";
           document.getElementById("opt4").style.color="green";

           document.getElementById("Ques"+i).value=questions;
           document.getElementById("Ans"+i).value=answer;

        }