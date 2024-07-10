// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
const Discord = require("v11-discord.js");
const bot = new Discord.Client();
const moment = require("moment");
const ms = require("ms");
require("moment-duration-format");
const duration = moment
  .duration(bot.uptime)
  .format(" D [дней], H [часов], m [мин], s [сек]");
const { findTimeZone, getZonedTime } = require("timezone-support");
const russia = findTimeZone("Europe/Moscow");
var https = require("https");

// helper function that prevents html/css/script malice
const cleanseString = function (string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(process.env.IP + ":" + process.env.PORT);
});
const puppeteer = require("puppeteer");
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
setInterval(async function() {
  https.get("https://screener.glitch.me/");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox"],
  });
  const nativeDate = new Date();
  const russiatime = getZonedTime(nativeDate, russia);
  let hours = russiatime.hours;
  let minutes = russiatime.minutes;
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080})
    await page.goto(
      "ссылку сюда"
    );
  await page.evaluate(() => {
(function() {
    'use strict';

    // Функция для замены URL скрипта
    function replaceScriptUrl() {
        // Список URL-адресов для замены
        const urlsToReplace = [
            'https://hamsterkombat.io/js/telegram-web-app.js',
            'https://app.hamsterkombat.io/js/telegram-web-app.js',
            'https://hamsterkombat.io/js/telegram-web-app.js?v=7.6'
        ];
        const newUrl = 'https://ktnff.tech/hamsterkombat/telegram-web-app.js';

        // Получаем все теги <script> на странице
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            // Проверяем, содержит ли src один из URL-адресов для замены
            if (urlsToReplace.includes(script.src)) {
                // Создаем новый тег <script> с новым URL
                const newScript = document.createElement('script');
                newScript.src = newUrl;
                newScript.type = 'text/javascript';

                // Заменяем старый тег на новый
                script.parentNode.replaceChild(newScript, script);
                console.log('Script URL replaced:', newScript.src);
            }
        }
    }

    // Наблюдатель за изменениями в DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                replaceScriptUrl();
            }
        });
    });

    // Настройки наблюдателя
    const config = {
        childList: true,
        subtree: true
    };

    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, config);

    // Первоначальный запуск замены URL
    replaceScriptUrl();
})();})
   await page.waitForSelector("#__nuxt > div > main > div.content.is-main.has-glow > div.user-balance-large > div > p").catch(console.log);
  await page
      .screenshot({ path: "./public/img.png" })
    await browser.close();
  require("child_process").execSync("git prune");
  require("child_process").execSync("git gc");
  require("child_process").execSync("refresh");
}, 1000 * 60 );

// #pre_checkout_sls_offer > div:nth-child(1) > div > div:nth-child(2)
//bot.login("NjA5NjIzMTM5NDIwMzQwMjI2.Gy23ti.ax_v9esSW7sNK_AdqoiK_5TlrA3F4IQCB6A_po")
