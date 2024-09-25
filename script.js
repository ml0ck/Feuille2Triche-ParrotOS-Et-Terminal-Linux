// Fonction pour filtrer les commandes en fonction de la recherche
function filterCommands() {
    let input = document.getElementById('search').value.toLowerCase();
    let commands = document.getElementsByClassName('command');

    for (let i = 0; i < commands.length; i++) {
        let keywords = commands[i].getAttribute('data-keywords');
        if (keywords.toLowerCase().includes(input)) {
            commands[i].style.display = "block";
        } else {
            commands[i].style.display = "none";
        }
    }
}
