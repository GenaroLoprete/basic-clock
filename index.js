const CronJob = require('cron').CronJob;
const moment = require('moment-timezone');
const colors = require('colors');
const dateFormat = 'D/M/YY HH:mm';
//function for log the times, simple console.log
const logTimes = () => {
    console.clear(); //First we clear the console

    console.log('UY Time'.blue);
    console.log(getTime('UY').toString().blue);

    console.log('ESP Time / Barcelona'.red);
    console.log(getTime('ESP-1').toString().red);

    console.log('ESP Time / Africa (Drake)'.cyan);
    console.log(getTime('ESP-2').toString().cyan);
}

///get the time by some code
///UY uruguay
///ESP-1 Spain
///ESP-2 Spain
const getTime = (timeCode) => {
    timeCode = '' + timeCode.toUpperCase();
    const date = moment();
    if (timeCode === 'UY') return moment(date).tz('America/Montevideo').format(dateFormat);
    if (timeCode === 'ESP-1') return moment(date).tz('Europe/Madrid').format(dateFormat);
    if (timeCode === 'ESP-2') return moment(date).tz('Europe/Madrid').subtract(1, 'hours').format(dateFormat);
}

//we want to update every minute
const job = new CronJob('* * * * * *', () => {
    logTimes();
}, null, true, null);


job.start();