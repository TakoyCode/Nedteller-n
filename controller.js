
getTimeToEaster();
setInterval(getTimeToEaster, 1000);

function getTimeToEaster() {
    let time = model.time;

    model.timeNow = new Date();
    time.toEasterMilli = model.easterDate.getTime() - model.timeNow.getTime();

    time.days = Math.ceil(time.toEasterMilli / (1000 * 60 * 60 * 24));
    time.hours = (new Date(time.toEasterMilli)).getHours();
    time.min = (new Date(time.toEasterMilli)).getMinutes();
    time.sec = (new Date(time.toEasterMilli)).getSeconds();

    updateView();
}