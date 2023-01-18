var apps = [
    {
        "name":"Block Wars",
        "description": "<h4>Block Wars</h4><p>Shoot your way through an onslaught of blocks and enemy ships</p><p><ul><li>Blocks that get past you will stack, making the play area smaller</li><li>Use power-ups to destroy stacked blocks</li><li>Enemy ships get more difficult as the game progresses</li><li>Follow enemy patterns to anticipate their attacks</li></ul></p><p>How far can you get?</p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.blockwars"><img src="media/googleBanner.png"/></a>',
        "video":"media/BlockWars.mp4",
        "hasVideo":"true",
        "isWebsite":"false"
    },
    {
        "name":"Buddy Breakout",
        "description": "<h4>Buddy Breakout</h4><p><ul><li>Free your buddies by breaking bricks that surround their cage</li><li>Defeat monsters to reach your buddies</li><li>Keep your ball alive by moving all 4 paddles</li><li>Collect cards to activate power-ups</li><li>Earn stars to unlock levels</li><li>Chase the high score in Survival Mode and Hardcore Mode</li></ul></p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.buddybreakout"><img src="media/googleBanner.png"/></a>',
        "video":"media/BuddyBreakout.mp4",
        "hasVideo":"true",
        "isWebsite":"false"
    },

];
var currentApp = 0;

function previousApp(){
    if(currentApp>0){
        currentApp--;
    }else{
        currentApp=apps.length-1;
    }
    showApp();
}

function nextApp(){
    if(currentApp<apps.length-1){
        currentApp++;
    }else{
        currentApp=0;
    }
    showApp();
}

function showApp(){
    document.getElementById("description").innerHTML = apps[currentApp].description;
    document.getElementById("link").innerHTML = apps[currentApp].link;
    document.getElementById("video").setAttribute("src", apps[currentApp].video);
}