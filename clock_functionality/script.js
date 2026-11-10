const navButtons = document.querySelectorAll('.nav-btn');
const workspace = document.getElementById("workspace");

let stopwatchInterval = null;
let stopwatchStartTime = null;
let elapsedTime = 0;

let alarms = JSON.parse(localStorage.getItem("alarms")) || [];

/**
 * Determines what is displayed on the screen; Clock, stopwatch. or alarm
 * @param {string} tool - A string with values clock, stopwatch, or alarm
 */
function displayTool(tool) {
    if (tool === "clock") {
        workspace.innerHTML = `
            <div class="clock-container">
                <h2>Digital Clock</h2>

                <div class="clock-display">
                    <div class="time-unit">
                        <span id="hours">00</span>
                        <small>Hours</small>
                    </div>

                    <span class="separator">:</span>

                    <div class="time-unit">
                        <span id="minutes">00</span>
                        <small>Minutes</small>
                    </div>

                    <span class="separator">:</span>

                    <div class="time-unit">
                        <span id="seconds">00</span>
                        <small>Seconds</small>
                    </div>
                </div>
            </div>
        `;

        updateClock();
    } else if (tool === "stopwatch") {
        workspace.innerHTML = `
            <div class="stopwatch-container">
                <h2>Stopwatch</h2>

                <div class="stopwatch-display">
                    <span id="stopwatch-time">00:00:00</span>
                </div>

                <div class="stopwatch-controls">
                    <button id="start-btn">Start</button>
                    <button id="pause-btn">Pause</button>
                    <button id="reset-btn">Reset</button>
                </div>
            </div>
        `;

        updateStopwatch();

        document.getElementById("start-btn").addEventListener("click", startStopWatch);
        document.getElementById("pause-btn").addEventListener("click", pauseStopWatch);
        document.getElementById("reset-btn").addEventListener("click", resetStopwatch);
    } else if (tool === "alarm") {
        workspace.innerHTML = `
            <div class="alarm-container">
                <h2>Alarm</h2>

                <form id="alarm-form">
                    <div class="alarm-inputs">
                        <div class="alarm-input-group">
                            <label for="alarm-datetime">Date and Time</label>
                            <input type="datetime-local" id="alarm-datetime" required>
                        </div>

                        <div class="alarm-input-group">
                            <label for="alarm-label">Alarm Name</label>
                            <input
                                type="text"
                                id="alarm-label"
                                placeholder="e.g. Wake up"
                            >
                        </div>

                        <button type="submit" id="add-alarm-btn">
                            Add Alarm
                        </button>
                    </div>
                </form>

                <div class="alarm-list-container">
                    <h3>Configured Alarms</h3>

                    <ul id="alarm-list">
                        <!-- Alarms will appear here -->
                    </ul>
                </div>
            </div>
        `;

        document.getElementById("alarm-form").addEventListener("submit", addAlarm);
        document.getElementById("alarm-list").addEventListener("click", deleteAlarm);
        const alarmDateTimeInput = document.getElementById("alarm-datetime");

        alarmDateTimeInput.min = getLocalDateTimeValue(new Date());

        renderAlarms();
    }
}


navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedTool = button.dataset.tool;

        navButtons.forEach(function(navButton) {
            navButton.classList.remove("active");
        });

        button.classList.add("active");

        displayTool(selectedTool);
    });
});

/**
 * Updates the clock on screen by extracting the HTML elements from the DOM using JavaScript
 * and ensures that the updates are done only when the DOM HTML elements are placed on the
 * DOM. That is when the tool is set to clock.
 */
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (hoursElement && minutesElement && secondsElement) {
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }
};

/**
 * Updates the stopwatch by formatting the time to a HH:MM:SS format
 */
function updateStopwatch() {
    const currentTime = performance.now();

    let totalElapsed = elapsedTime;

    if (stopwatchInterval !== null) {
        totalElapsed += currentTime - stopwatchStartTime;
    }

    const hours = Math.floor(totalElapsed / 3600000);
    const minutes = Math.floor((totalElapsed % 3600000) / 60000);
    const seconds = Math.floor((totalElapsed % 60000) / 1000);

    const formattedTime =
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
    
        const stopwatchDisplay = document.getElementById("stopwatch-time");

        if (stopwatchDisplay) {
            stopwatchDisplay.textContent = formattedTime;
        }
};

/**
 * Starts the stopwatch timer and sets an interval of 100 milliseconds 
 */
function startStopWatch() {
    if (stopwatchInterval != null) {
        return;
    }

    stopwatchStartTime = performance.now();

    stopwatchInterval = setInterval(updateStopwatch, 100);
};

/**
 * Stops the execution of the stopwatch and clears the interval Id but preserves
 * the execution time from when startStopWatch executed till pauseStopWatch was
 * called
 */
function pauseStopWatch() {
    if (stopwatchInterval === null) {
        return;
    }

    elapsedTime += performance.now() - stopwatchStartTime;
    
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
};

/**
 * Clears the IntervalId, the elaspedtime that was accumulated since startStopWatch
 * was called, and resets the HTML content to 00:00:00
 */
function resetStopwatch() {
    clearInterval(stopwatchInterval);

    stopwatchInterval = null;
    stopwatchStartTime = null;
    elapsedTime = 0;

    const stopwatchDisplay = document.getElementById("stopwatch-time");

    if (stopwatchDisplay) {
        stopwatchDisplay.textContent = "00:00:00";
    }
}

/**
 * Takes a date object and returns a formatted date string
 * @param {date} date 
 * @returns a formatted date 
 */
function getLocalDateTimeValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");


    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Saves the alarm to localStorage to prevent the alarms array from being
 * wiped out when the browser resets.
 */
function saveAlarms() {
    localStorage.setItem("alarms", JSON.stringify(alarms));
}

/**
 * Takes the values the user enters in the label and time inputs and compares
 * those values to the minimum date set which is the current time and saves
 * that in an object which is then pushed into the alarms array.
 */
function addAlarm(event) {
    event.preventDefault();

    const alarmDateTime = document.getElementById("alarm-datetime").value;
    const alarmLabel = document.getElementById("alarm-label").value;

    const now = new Date();
    const selectedDateTime = new Date(alarmDateTime);

    if (selectedDateTime.getTime() <= now.getTime()) {
        alert("Please select a future date and time.");
        return;
    }

    const newAlarm = {
        id: Date.now(),
        datetime: alarmDateTime,
        label: alarmLabel || "Alarm",
        triggered: false
    };

    alarms.push(newAlarm);
    
    saveAlarms();

    renderAlarms();

    document.getElementById('alarm-form').reset();
}

/**
 * Retrieves the list element in the browser DOM and populates it with the
 * alarm contents of the alarms array.
 */
function renderAlarms() {
    const alarmList = document.getElementById('alarm-list');

    if (!alarmList) {
        return;
    }

    alarmList.innerHTML = "";

    alarms.forEach(function(alarm) {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span>${alarm.datetime.replace("T", " ")} - ${alarm.label}</span>
            <button class="delete-alarm-btn" data-id="${alarm.id}">
                Delete
            </button>
        `;

        alarmList.appendChild(listItem);
    });
}

/**
 * Filters out the alarm that has been clicked by the user on the browser
 * and deletes it from the alarms array.
 * @param {*} event 
 */
function deleteAlarm(event) {
    console.log(event);
    if (!event.target.classList.contains("delete-alarm-btn")) {
        return;
    }

    const alarmId = Number(event.target.dataset.id);

    alarms = alarms.filter(function(alarm) {
        return alarm.id !== alarmId;
    });

    saveAlarms();

    renderAlarms();
}

/**
 * Checks whether the alarm provided by the user is correct in terms of
 * being in the chosen acceptable date range and if so, it is triggered
 * and its state is set to true
 */
function checkAlarms() {
    const now = new Date();

    alarms.forEach(function(alarm) {
        const alarmDateTime = new Date(alarm.datetime);

        if (alarmDateTime.getTime() <= now.getTime() && !alarm.triggered) {
            triggerAlarm(alarm);

            alarm.triggered = true;

            saveAlarms();
        }
    });
}

/**
 * Triggers each alarm when its set time reaches and shows that using
 * an alert in the browser
 * @param {Array} alarm 
 */
function triggerAlarm(alarm) {
    alert(`Alarm: ${alarm.label}`);
}

displayTool("clock");
updateClock();

setInterval(updateClock, 1000);

updateStopwatch();

setInterval(checkAlarms, 1000);