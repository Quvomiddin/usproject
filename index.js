function fun() {
    const info = document.getElementById("info");
    const birth =  new Date(1134769911111);
    const now = new Date();
    let result = now-birth;
    let year = result/(365*24*36*100000);
    year = Number(year);
    year = year.toFixed(9);
    console.log(now.getMinutes());
    info.textContent = year;
}

setInterval(fun, 100); 