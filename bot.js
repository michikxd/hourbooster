const SteamUser = require("steam-user");
const config = require("./config.json");
const client = new SteamUser();

const logOnOptions = {
    accountName: config.username,
    password: config.password
};

client.logOn(logOnOptions);

client.on("loggedOn", () => {
    console.log(config.username,"You has been logged succesfully.");

    client.setPersona(SteamUser.EPersonaState.Online);
    client.gamesPlayed(["Custom Game Title",730,440]);  
    //730 is ID of the Game on the Steam
    // Ex 730 = CS:GO
    // You can iddle up to 32 games
});

