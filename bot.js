// Imports
const SteamUser = require("steam-user");

// Config
const config = require("./config.json");

for (const account in config.accounts) {
    const username = config.accounts[account].details.username;
    const password = config.accounts[account].details.password;

    const title = config.accounts[account].settings.title;
    const games = config.accounts[account].settings.games;

    // Authorization
    const client = new SteamUser();

    client.logOn({
        accountName: username,
        password: password
    });

    // Main
    client.on("loggedOn", async () => {
        await Array.prototype.push.apply(
            title, 
            games
        );

        await client.setPersona(
            SteamUser.EPersonaState.Online
        ); 

        await client.gamesPlayed(
            title
        ); 
        
        console.log(`Logged succesfully as ${username}.`);
    });
}