/************ Start CountDown -Questions *******************/
    var second = 30, // nombre de second
    countDiv   = document.getElementById("questionCountDown"),
    secondPass,
    countDown = setInterval(function(){
        secondPass();
    },1000);
    // function secondpass calcule les min et  le second rest
    function secondPass(){
        var min=Math.floor(second/60),
        restsecond =second % 60;
        if(restsecond < 10) 
        restsecond= "0" + restsecond;
        countDiv.innerHTML=" Qestion Count [ " +min + ": " + restsecond +"]";
        if(second > 0)  second -= 1;
        else {
            clearInterval(countDown); // stop count
            countDiv.innerHTML = "Time Done";
            countDiv.style.color="red";
        }

    }




/************ End CountDown -Questions *******************/