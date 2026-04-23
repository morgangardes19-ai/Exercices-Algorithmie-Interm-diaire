//  ================== EXEMPLES ===================================

// console.log("hello")

// alert("test")

// let  message = prompt("Comment vous appelez-vous ?");
// alert(`ah d'accord, vous vous appelez ${message}`);
// ==================================================================

// ===================== EXERCICE 1 =================================
// let message = "Bonjour à tous.";
// alert(message)
// ==================================================================

// ===================== EXERCICE 2 =================================
// let lastName = ("Nom : Doe");
// let firstName = ("Prénom : John");
// let city = ("Ville : New-York");
// alert(`${lastName}\n ${firstName}\n ${city}`);
// ==================================================================

// ===================== EXERCICE 3 =================================
// let prenom = prompt("Comment vous appelez-vous ?");
// alert(`Vous vous appelez ${prenom}`);
// ==================================================================

// ======================= EXERCICE 4 ===============================
// let lastName = prompt("Quel est votre nom ?");
// let firstName = prompt("Quel est votre prénom ?");
// let city = prompt("Quelle est votre ville ?");
// alert(`Nom : ${lastName}\n Prénom : ${firstName}\n Ville : ${city}`);
// ==================================================================

// ====================== EXERCICE 5 ================================ 
// let nombre = parseInt(prompt("Notez ici un nombre  virgule"));
// let nombreVirgule = parseFloat(prompt("Notez ici un autre nombre à virgule"));

// console.log(typeof nombreVirgule1);

// alert(nombre * nombreVirgule);
// ==================================================================

// ============== EXERCICE 6 : voir fonciton.js =============

// import { division } from "./fonction.js";

// alert(division(6, 2));

// =============== EXERCICE 7 ==========================
// let pointure = prompt("Quelle est votre pointure ?");
// let naissance = prompt("Quelle est votre année de naissance ?");

// function calcul(pointure, naissance) {
//   let resultat = pointure * 2;
//   resultat += 5;
//   resultat *= 50;
//   resultat -= naissance;
//   resultat += 1766;
//   return resultat;
// }

// let resultat = calcul(pointure, naissance)

// alert(resultat);
// =====================================================

// ======================================= EXERCICE 8 ============================
// let age = prompt("Saisissez votre âge ici.");
// if (age < 18) {
//     alert("Vous êtes mineur");
// }
// else alert("Vous êtes majeur");
// ===============================================================================

// ================================== EXERCICE 9 ================================= 
// let nombre = prompt("Saisissez un nombre");
// let tableMultiply = "";

// for (let index = 1; index <= 10; index++) {
//     tableMultiply += `${nombre} X ${index} = ${nombre * index}\n`
 
// }

// alert(tableMultiply);
// =============================================================================

// ========================= EXERCICE 10 =======================================
// let mot = prompt("Saisissez un mot.");
// let message = "";

// for (const caractere of mot) {
//     message += `${caractere}\n`;
// }
// alert(message);
// =============================================================================

// ========================== EXERCICE 11 ======================================
// let nombre = parseInt(prompt("Saisisez un nombre entre 1 et 10."));
// console.log(typeof nombre);


//  if (nombre > 5) {
//     alert("Le nombre saisit est supérieur à 5.")
//  }
//    if (nombre < 5) {
//     alert("Le nombre saisit est inférieur à 5")
//  }
//    if (nombre === 5) {
//     alert("Le nombre saisit est égal à 5")
//  }
// =============================================================================

// ============================ EXERCICE 12 ====================================
// let message = prompt(`Saisissez un nombre :`);

// function carre(message) {
//     return message*message;
// }
// let resultat = carre(message);
//     alert(`Le carré de ${message} est : ${resultat}`);
// =============================================================================
