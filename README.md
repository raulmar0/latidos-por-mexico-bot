# Diagnostic algorithm based on IMSS guidelines for Acute Coronary Syndrome and acute myocardial infarction implemented on Whatsapp

[Try it!](https://wa.me/5218135453539?text=Hola)

[![](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5218135453539?text=Hola)

For a simpler implementation [try my new whatsapp-questionnaire-bot library](https://github.com/raulmar0/whatsapp-questionnaire-bot)

This is a project done in collaboration with medical students from ITESM who used a diagnose diagram that was then combined with Whatsapp in order to reach as many people as possible thanks to its wide adoption in Latam

![](https://raulmarfiles.blob.core.windows.net/random/latidos-por-mexico-diagrama.jpeg)

## Technical information

The foundation of the logic of the script is the structure of the `questions.js` file. Because every time the bot receives a message, it registers the user and looks for the last node he was in, then it compares the options of the next possible nodes with the received message to know which is the next step.

- Built on whatsapp-web.js
- Easy to configure
- Run anywhere
- Node and npm required

<img style="width: 200px; margin: 0 auto;" src="https://raulmarfiles.blob.core.windows.net/random/whatsapp-bot-in-action.gif">

## Getting Started

1. Clone the repo
``` bash
# For desktop systems (Mac, Linux, Windows)
git clone https://github.com/raulmar0/latidos-por-mexico-bot.git

# For headless systems (rpi os lite, cloud vm, remote servers)
```

2. For headless systems (rpi os lite, cloud vm, remote servers) install the following packages
```bash
sudo apt install -y gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget

```
  and also change the client config inside `index.js`
```js
...
new Client({
	...,
	puppeteer: {
		args: ['--no-sandbox'],
	}
})
...
```

3. Install dependencies
```bash
npm i
```

In case you get an error regarding the chromium installation install it manually

``` bash
sudo apt install chromium
# or 
sudo apt install chromium-browser
```

then change the execution path for the manually installed browser inside the puppeteer config of the cliente `index.js`

```js
puppeteer: {
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/chromium", // or /usr/bin/chromium-browser
  },
```
4. Add a `.env` file in the root of the project
```js
COUNTRY_CODE="XXX" // 521 for Mexico
NUMBER="XXXXXXXXXX"
MSG="Dunder Miffling, this is Pam!"
```

5. Run it!

For development:
```bash
# start
node index.js

# stop
ctrl + c
```

For production (daemon):
```bash
# start
npx pm2 start index.js

# stop
npx pm2 delete all
```

6. Scan the QR from the terminal and chat!
