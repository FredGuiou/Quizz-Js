/**
*  Challenge Quizz
*
* Pour ce challenge, suit les instructions dans le fichier README.md
* Et écris ton code ici même !
*/

var score = 0;

/* Exo 1 */
var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";

/* Exo 2 */
var reponse1 = prompt(question1);
if (reponse1===solution1){
    alert("Gagné !");
    score++
} else {
    alert("Perdu...")
}

/* Exo 3 */
var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;

var reponse2 = prompt (question2);
reponse2 = parseInt(reponse2);

if (reponse2 === solution2) {
    alert ("Gagné");
    score++
} else {
    alert ("Perdu...");
}

alert("Vous avez "+score+" bonne(s) réponse(s)")