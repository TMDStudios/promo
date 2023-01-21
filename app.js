var apps = [
    {
        "name":"Block Wars",
        "description": "<h4>Block Wars</h4><p>Shoot your way through an onslaught of blocks and enemy ships</p><p><ul><li>Blocks that get past you will stack, making the play area smaller</li><li>Use power-ups to destroy stacked blocks</li><li>Enemy ships get more difficult as the game progresses</li><li>Follow enemy patterns to anticipate their attacks</li></ul></p><p>How far can you get?</p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.blockwars"><img src="media/googleBanner.png"/></a>',
        "video":"media/BlockWars.mp4",
        "poster":"media/BlockWars.png",
        "hasVideo":"true",
        "isWebsite":"false"
    },
    {
        "name":"Buddy Breakout",
        "description": "<h4>Buddy Breakout</h4><p><ul><li>Free your buddies by breaking bricks that surround their cage</li><li>Defeat monsters to reach your buddies</li><li>Keep your ball alive by moving all 4 paddles</li><li>Collect cards to activate power-ups</li><li>Earn stars to unlock levels</li><li>Chase the high score in Survival Mode and Hardcore Mode</li></ul></p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.buddybreakout"><img src="media/googleBanner.png"/></a>',
        "video":"media/BuddyBreakout.mp4",
        "poster":"media/BuddyBreakout.png",
        "hasVideo":"true",
        "isWebsite":"false"
    },
    {
        "name":"Puzzled Knight",
        "description": "<h4>Puzzled Knight</h4><p><ul><li>Match tiles to attack your opponents or defend against their attacks</li><li>Earn gold to buy special moves to help you defeat your enemies</li><li>3 game modes, Arcade, Classic, and Tournament</li><li>Each opponent has their own strengths and weaknesses</li><li>Earn experience points to level up your character</li><li>Increase your stats to even the odds!</li></ul></p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.puzzledknight"><img src="media/googleBanner.png"/></a>',
        "video":"media/PuzzledKnight.mp4",
        "poster":"media/PuzzledKnight.png",
        "hasVideo":"true",
        "isWebsite":"false"
    },
    {
        "name":"Road To Rage",
        "description": "<h4>Road To Rage</h4><p>Soothe your road rage by unloading a hood-mounted gun on your erratic fellow drivers. Can you get to your destination with your sanity intact?</p><p><ul><li>10 levels of rage relief</li><li>Increasing difficulty that will challenge your reflexes</li><li>A collection of 58 vehicles</li><li>Simple gameplay that is difficult to master</li></ul></p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.wordpress.tmdstudios"><img src="media/googleBanner.png"/></a>',
        "video":"media/RTR.mp4",
        "poster":"media/RTR.png",
        "hasVideo":"true",
        "isWebsite":"false"
    },
];
var currentApp = 0;

function prevApp(){
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
    document.getElementById("video").setAttribute("poster", apps[currentApp].poster);
}

const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()