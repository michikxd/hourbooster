const SteamUser = require("steam-user");
const config = require("./config.json");
const client = new SteamUser();

const logOnOptions = {
    accountName: config.username,
    password: config.password
};

client.logOn(logOnOptions);

client.on("loggedOn", () => {
    console.log(config.username,"You has been loged succesfully.");

    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(["Custom Game Title",730]);  //730 is id of the game on the steam (730=csgo)
});
client.on("friendMessage", function(steamID, message) {
    if (message) {
        client.chatMessage(steamID, config.automessage);
    }
});
