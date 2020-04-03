function loaddata() {
    // load twitter
    if(window.innerWidth < 1000) {
        document.getElementsByClassName("twitter-amour")[0].style.display = "none";
        document.getElementsByClassName("twitter-amour")[1].style.display = "block";
    }
    else {
        document.getElementsByClassName("twitter-amour")[1].style.display = "none";
        document.getElementsByClassName("twitter-amour")[0].style.display = "block";
    }

    // load json file
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.covid19india.org/data.json", false );
    xmlHttp.send( null );
    var bodytext = xmlHttp.responseText;
        
    var text=JSON.parse(bodytext);

    for(var i=0;i<text.statewise.length;i++) {
        if(text.statewise[i].state=="Odisha") {
            document.getElementById("confirmed").innerHTML = text.statewise[i].confirmed;
            document.getElementById("active").innerHTML = text.statewise[i].active;
            document.getElementById("recovered").innerHTML = text.statewise[i].recovered;
            document.getElementById("deceased").innerHTML = text.statewise[i].deaths;
        }
    }
}