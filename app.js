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
    {
        "name":"Py Learning Companion",
        "description": "<h4>Py Learning Companion</h4><p><ul><li>Light weight app with bite sized Python lessons and activities</li><li>Great for learning on the go</li><li>Multiple types of activities that will test your Python knowledge</li><li>Hundreds of activities to test your skills</li><li>Simple to use</li></ul></p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.python"><img src="media/googleBanner.png"/></a>',
        "video":"",
        "poster":"",
        "hasVideo":"false",
        "isWebsite":"false",
        "images":["plc1","plc2","plc3","plc4","plc5","plc6"]
    },
    {
        "name":"Crypto Ledger",
        "description": "<h4>Crypto Ledger</h4><p>Crypto Ledger is an open source extension of the Crypto Ledger website. It makes use of the Crypto Ledger API to buy, sell, and monitor coins. The app was built using Kotlin and Android Studio. It uses coroutines and retrofit to make API calls, and fragments for navigation. The source code is available on <a style='text-decoration: none; color: #dedcde;' href='https://github.com/TMDStudios/crypto_ledger_app_kotlin'>GitHub</a></p><p>Buying and selling coins requires an API Key, while getting live price data does not.</p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.cryptoledgerkotlin"><img src="media/googleBanner.png"/></a>',
        "video":"",
        "poster":"",
        "hasVideo":"false",
        "isWebsite":"false",
        "images":["cl1","cl2","cl3","cl4","cl5"]
    },
    {
        "name":"Mock Trader",
        "description": "<h4>Mock Trader</h4><p>The player starts with $10,000 and is tasked with accumulating as much wealth as possible by buying and selling Bitcoin</p><p>The Bitcoin price starts at $50,000 and changes based on randomized news</p><p>Can you become a (mock) millionaire?</p>",
        "link":'<a href="https://play.google.com/store/apps/details?id=com.tmdstudios.mocktrader"><img src="media/googleBanner.png"/></a>',
        "video":"",
        "poster":"",
        "hasVideo":"false",
        "isWebsite":"false",
        "images":["mt1","mt2","mt3","mt4"]
    }
];
var currentApp = 0;
var currentImg = 0;
var slideshowActive = false;
var imageOpacity = 1;

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
    if(apps[currentApp].hasVideo=="true"){
        slideshowActive=false;
        document.getElementById("mediaContainer").innerHTML = '<video id="video" width="320" height="480" autoplay muted controls loop poster="media/BlockWars.png"><source src="media/BlockWars.mp4" type="video/mp4">Your browser does not support the video tag.</video>'
        document.getElementById("description").innerHTML = apps[currentApp].description;
        document.getElementById("link").innerHTML = apps[currentApp].link;
        document.getElementById("video").setAttribute("src", apps[currentApp].video);
        document.getElementById("video").setAttribute("poster", apps[currentApp].poster);
    }else{
        slideshowActive=true;
        document.getElementById("mediaContainer").innerHTML = '<img id="img" onclick="nextImage()" src="media/'+apps[currentApp].images[0]+'.png"/>'
        document.getElementById("description").innerHTML = apps[currentApp].description;
        document.getElementById("link").innerHTML = apps[currentApp].link;
        setTimeout(handleSlideshow, 2500);
    }
}

function nextImage(){
    slideshowActive=false;
    showImg();
}

function showImg(){
    currentImg++;
    if(currentImg>=apps[currentApp].images.length){
        currentImg = 0; 
    }
    fadeOutImg(); 
}

function handleSlideshow(){
    if(slideshowActive){
        showImg();
        setTimeout(handleSlideshow, 3333);
    }
}

function fadeOutImg(){
    imageOpacity -= .1;
    document.getElementById("img").style.opacity = imageOpacity;
    if(imageOpacity>.1){
        setTimeout(fadeOutImg, 33);
    }else{
        document.getElementById("mediaContainer").innerHTML = '<img id="img" onclick="nextImage()" src="media/'+apps[currentApp].images[currentImg]+'.png"/>'  
        fadeInImg();
    }
}

function fadeInImg(){
    imageOpacity += .1;
    document.getElementById("img").style.opacity = imageOpacity;
    if(imageOpacity<1){
        setTimeout(fadeInImg, 20);
    }
}

const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight()