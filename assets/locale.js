let hash = window.location.hash;
document.getElementById("translate").innerHTML = '<a href="fr/accueil.html' + hash + '">French</a>';
window.addEventListener('hashchange', handleClick);
function handleClick() {
    let hash = window.location.hash;
    document.getElementById("translate").innerHTML = '<a href="fr/accueil.html' + hash + '">French</a>';
}