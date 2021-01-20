var hash = window.location.hash;
var filePath = window.location.pathname;
var parts = filePath.split("/");
var currentFolder = parts[parts.length - 2];
if(currentFolder == "fr") {
    document.getElementById("translate").innerHTML = '<a href="../index.html' + hash + '">English</a>';
    window.addEventListener('hashchange', handleClick);
    function handleClick() {
        hash = window.location.hash;
        document.getElementById("translate").innerHTML = '<a href="../index.html' + hash + '">English</a>';
    }
}
else {
    document.getElementById("translate").innerHTML = '<a href="fr/accueil.html' + hash + '">French</a>';
    window.addEventListener('hashchange', handleClick);
    function handleClick() {
        hash = window.location.hash;
        document.getElementById("translate").innerHTML = '<a href="fr/accueil.html' + hash + '">French</a>';
    }
}