function clock(){
    
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("am-pm");


    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();


    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;


}
setInterval(clock,1000);





// let date = new Date();
// let hours = date.getHours();
// let a = document.getElementById("left-third-container")

// if(hours>=12 && hours<16)
// {
//     a.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
// }

// if(hours>=16 && hours<20)
// {
//     a.innerHTML="GOOD EVENING!!"
// }

// if(hours>=20 && hours<23)
// {
//     a.innerHTML="GOOD NIGHT !!"
// }




let date = new Date();
let hours = date.getHours();
let a = document.getElementById("left-third-container")
let t = document.getElementById("right-second-container")
let i = document.getElementById("right-third-container")


if(hours>=8 && hours<12)
{
    a.innerHTML="GOOD MORNING!! WAKE UP !!";
    t.innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    i.style.backgroundImage="url('./assets/good_morning.png')"
}

if(hours>=12 && hours<16)
{
    a.innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
    t.innerHTML="LET'S HAVE SOME LUNCH !!";
    i.style.backgroundImage="url('./assets/good_afternoon.png')"
}

if(hours>=16 && hours<20)
{
    a.innerHTML="GOOD EVENING!!";
    t.innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    i.style.backgroundImage="url('./assets/good_evening.png')"
}

if(hours>=20 && hours<24)
{
    a.innerHTML="GOOD NIGHT !!";
    t.innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    i.style.backgroundImage="url('./assets/good_night.png')";
}


if(hours>12)
    {
      hours = hours -12;
    }    





