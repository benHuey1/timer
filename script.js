function timer(from, to) {
    let main = document.getElementsByName("main");
    let divTime = document.getElementById("time");
    let i = from;
    let timerId = setInterval(function () {
        // times.push(Date.now() - start);
        let start = Date.now();
        times = Date.now() - start;
        console.log(times + i);
        // let minute = times + i;
        let main = document.getElementsByName("main");
        let tim = document.getElementById("time");

        if (i % 60 == 0) {
            // i = i / 60;
            let j = i / 60;
            // callback.minutes(j);
            console.log(`You have been here for ${j} minutes`);
            tim.textContent = j;
            let timerColor = setTimeout(function () {
                // tim.style.backgroundColor = "red";
                tim.style.transform = "scale(1.5)";
            }, 250);
        } else if (i >= to) {
            clearInterval(timerId);
        } else {
            // tim.style.backgroundColor = "white";
            tim.style.transform = "scale(1)";
        }

        i++;
    }, 1000);
}
timer(0, 120);
