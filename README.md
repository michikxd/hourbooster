### Features
- Boost Steam Hours
- 2FA Support 
- Custom Title Avaible 
- Custom Games
- Custom Auto Message 

### How to install NodeJS (Required)
- For Windows installation look at [here.](https://nodejs.org/en/download/)
- For Linux look at this [repository.](https://github.com/nvm-sh/nvm)

### Windows Setup
- Open file `install.bat` wait until it install and then close it.
- Edit the `config.json` in text editor and fill the username and password (if you want automessage fill it too).
- Then just turn on `start.bat`.

### Linux Setup
Just put this to the terminal.
```bash
apt-get update && 
apt-get install curl && 
apt-get install screen &&
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash &&
npm install steam-user &&
clear && 
Installation has been succesfull.
```
For VPS use, put `screen -S bot` to the terminal for open screen session with name bot. Then edit `config.json` then put the `node bot.js ;` to the terminal and bot has been succesfully started (if you get any error it will probably be because of password or bad nodejs version) if you want go on the main screen press `ctrlv + a + d` and then for rejoin to the screen use just `screen -r bot`.

### Plans
Im working on web with login system, where you can add your steam and controll the bot, games, automessage and all, so you will not have to connect to the server and turn it because you can do it by site. After i'll done i make a new repository for it.

### Repositories and sites for learn more.
- [Steam user](https://www.npmjs.com/package/steam-user)
- [Steam friends](https://github.com/seishun/node-steam/tree/master/lib/handlers/friends)
- [Steam community](https://github.com/DoctorMcKay/node-steamcommunity/wiki/SteamCommunity)
- [Steam trading](https://github.com/seishun/node-steam/tree/master/lib/handlers/trading)
- [Tradeoffer manager](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager/wiki/TradeOfferManager)
- [Steam id](https://www.npmjs.com/package/steamid)

