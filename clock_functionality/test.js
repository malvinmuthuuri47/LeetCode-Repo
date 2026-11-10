function displayTime() {
    const now = new Date();

    const time = now.toLocaleTimeString();
    console.log(time);
}

const clock = setInterval(displayTime, 1000);