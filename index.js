const CronJob = require('cron').CronJob;
const moment = require('moment-timezone');
const dateFormat = 'D/M/YY HH:mm';
//function for log the times, simple console.log
const logTimes = () => {
    console.clear(); //First we clear the console

    console.log('UY Time');
    console.log(getTime('UY'));

    console.log('ESP Time');
    console.log(getTime('ESP'));

}

///get the time by some code
///UY uruguay
///ESP-1 Spain
///ESP-2 Spain
const getTime = (timeCode) => {
    timeCode = '' + timeCode.toUpperCase();
    const date = moment();
    if (timeCode === 'UY') return moment(date).tz('America/Montevideo').format(dateFormat);
    if (timeCode === 'ESP') return moment(date).tz('Europe/Madrid').format(dateFormat);
}

//we want to update every minute
const job = new CronJob('* * * * * *', () => {
    logTimes();
}, null, true, null);


job.start();