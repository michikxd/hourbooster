### Linux Setup
Just put this to the terminal.
```bash
apt-get update 
apt-get install curl 
apt-get install screen 
sudo apt-get install curl software-properties-common
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install nodejs
npm install steam-user 
```
If you want to run bot 24/7 etc on VPS, put `screen -S bot` to the terminal for open screen session with name bot. Then edit `config.json` and put the `node bot.js ;` to the terminal and bot has been succesfully started (if you get any error it will probably be because of password or bad nodejs version) if you want go on the main screen press `ctrlv + a + d` and then for rejoin to the screen use just `screen -r bot`.
