var introduction = document.getElementById("introduction");
introduction.style.visibility = "visible";
var rightSide = document.getElementById("rightSide");
rightSide.style.visibility = "hidden";
var q = [20, 30, 40, 50, 60];
var points = 0;

function play() {
    if (q[0]>15) {
        var pos = Math.floor(Math.random() * 4);
        q[0] = pos;
        displayQuestion(pos);
    } else if (q[1]>15) {
        pos = Math.floor(Math.random() * 4)+6;
        q[1] = pos;
        displayQuestion(pos);
    } else if (q[2]>15) {
        pos = Math.floor(Math.random() * 4)+10;
        q[2] = pos;
        displayQuestion(pos);
    } else if (q[3]>15) {
        do {
            pos = Math.floor(Math.random() * 14);
        }
        while (pos == q[0] || pos == q[1] || pos == q[2]);
        q[3] = pos;
        displayQuestion(pos);
    } else if (q[4]>15) {
        do {
            pos = Math.floor(Math.random() * 14);
        }
        while (pos == q[0] || pos == q[1] || pos == q[2] || pos == q[3]);
        q[4] = pos;
        displayQuestion(pos);
    } else {
        document.body.style.backgroundImage="url('images/java-karung.jpg')";
        var name = document.getElementById("name").value;
        leftSide.innerHTML = "<div id='leftSide'> <h3> Congratulations " + name + " you did " + (points/5)*100 + "%</h3> </div>";
        
    }
}

function displayQuestion(pos) {
    document.body.style.backgroundImage="url('images/java-tanjung.jpg')";
    introduction.style.visibility = "hidden";
    var rightSide = document.getElementById("rightSide");
    rightSide.style.visibility = "visible";

    var q0 = document.getElementById("q0");
    q0.style.display = "none";
        var q1 = document.getElementById("q1");
        q1.style.display = "none";
    var q2 = document.getElementById("q2");
    q2.style.display = "none";
        var q3 = document.getElementById("q3");
        q3.style.display = "none";
    var q4 = document.getElementById("q4");
    q4.style.display = "none";    
        var q5 = document.getElementById("q5");
        q5.style.display = "none";
    var q6 = document.getElementById("q6");
    q6.style.display = "none";
        var q7 = document.getElementById("q7");
        q7.style.display = "none";
    var q8 = document.getElementById("q8");
    q8.style.display = "none";
        var q9 = document.getElementById("q9");
        q9.style.display = "none";
    var q10 = document.getElementById("q10");
    q10.style.display = "none";
        var q11 = document.getElementById("q11");
        q11.style.display = "none";
    var q12 = document.getElementById("q12");
    q12.style.display = "none";
        var q13 = document.getElementById("q13");
        q13.style.display = "none";
    var q14 = document.getElementById("q14");
    q14.style.display = "none";

    switch (pos) {
        case 0:
            q0 = document.getElementById("q0");
            q0.style.display = "block";
        break;
        case 1:
            q1 = document.getElementById("q1");
            q1.style.display = "block";
        break;
        case 2:
            q2 = document.getElementById("q2");
            q2.style.display = "block";
        break;
        case 3:
            q3 = document.getElementById("q3");
            q3.style.display = "block";
        break;
        case 4:
            q4 = document.getElementById("q4");
            q4.style.display = "block";
        break;
        case 5:
            q5 = document.getElementById("q5");
            q5.style.display = "block";
        break;
        case 6:
            q6 = document.getElementById("q6");
            q6.style.display = "block";
        break;
        case 7:
            q7 = document.getElementById("q7");
            q7.style.display = "block";
        break;
        case 8:
            q8 = document.getElementById("q8");
            q8.style.display = "block";
        break;
        case 9:
            q9 = document.getElementById("q9");
            q9.style.display = "block";
        break;
        case 10:
            q10 = document.getElementById("q10");
            q10.style.display = "block";
        break;
        case 11:
            q11 = document.getElementById("q11");
            q11.style.display = "block";
        break;
        case 12:
            q12 = document.getElementById("q12");
            q12.style.display = "block";
        break;
        case 13:
            q13 = document.getElementById("q13");
            q13.style.display = "block";
        break;
        case 14:
            q14 = document.getElementById("q14");
            q14.style.display = "block";
        break;
    }
}

function checkAnswer(pos) {
    switch (pos) {
        case 0:
            if (document.querySelector('input[name="options0"]:checked').value == "c")
            points++;
            play();
        break;
        case 1:
            if (document.querySelector('input[name="options1"]:checked').value == "a")
            points++;
            play();
        break;
        case 2:
            if (document.querySelector('input[name="options2"]:checked').value == "d")
            points++;
            play();
        break;
        case 3:
            if (document.querySelector('input[name="options3"]:checked').value == "b")
            points++;
            play();
        break;
        case 4:
            if (document.querySelector('input[name="options4"]:checked').value == "c")
            points++;
            play();
        break;
        case 5:
            if (document.querySelector('input[name="options5"]:checked').value == "b")
            points++;
            play();
        break;
        case 6:
            if (document.querySelector('input[name="options6"]:checked').value == "a")
            points++;
            play();
        break;
        case 7:
            if (document.querySelector('input[name="options7"]:checked').value == "a")
            points++;
            play();
        break;
        case 8:
            if (document.querySelector('input[name="options8"]:checked').value == "b")
            points++;
            play();
        break;
        case 9:
            if (document.querySelector('input[name="options9"]:checked').value == "b")
            points++;
            play();
        break;
        case 10:
            if (document.querySelector('input[name="options10"]:checked').value == "a")
            points++;
            play();
        break;
        case 11:
            var t = document.getElementById("myText11").value.toLowerCase();
            if (t === "jakarta")  {
                points++;
            }
            play();
        break;
        case 12:
            var t = document.getElementById("myText12").value.toLowerCase();
            if (t === "oracle")  {
                points++;
            }
            play();
        break;
        case 13:
            var t = document.getElementById("myText13").value.toLowerCase();
            if (t === "tropical")  {
                points++;
            }
            play();
        break;
        case 14:
            var t = document.getElementById("myText14").value.toLowerCase();
            if (t === "4")  {
                points++;
            }
            play();
        break;
    }
}
