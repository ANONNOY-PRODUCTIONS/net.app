const check = () => {
   const q1 = document.getElementById('qone').value.trim();
   const q2 = document.getElementById('qtwo').value.trim();
   const q3 = document.getElementById('qthree').value.trim();
   const q4 = document.getElementById('qfour').value.trim().toLowerCase();
   const q5 = document.getElementById('qfive').value.trim().toLowerCase();
 
   let c1 = "";
   let c2 = "";
   let c3 = "";
   let c4 = "";
   let c5 = "";
 
   if (q1 === '12') {
     c1 = "Correct answer in 1";
   } else {
     c1 = "Wrong answer. The answer is 12";
   }
 
   if (q2 === "dhaka") {
     c2 = "Answer 2 is correct";
   } else {
     c2 = "Answer is wrong. Correct: DHAKA";
   }
 
   if (q3 === "1947") {
     c3 = "Your answer is right! (3)";
   } else {
     c3 = "Wrong answer in 3 (1947)";
   }
 
   if (q4 === "sweden" || q4 === "greenland" || q4 === "america") {
     c4 = "Yes, the answer is correct (4)";
   } else {
     c4 = "Nope! Wrong Answer (Sweden/greenland/america) (4)";
   }
 
   if (q5 === "joe biden") {
     c5 = "Answer is correct in 5";
   } else {
     c5 = "No, the answer is wrong in the last question.";
   }
 
   const score = calculateScore([c1, c2, c3, c4, c5]);
   displayResults(c1, c2, c3, c4, c5, score);
 }
 
 function calculateScore(results) {
   // Count the number of correct answers (those that contain "correct")
   return results.filter(result => result.includes("correct")).length;
 }
 
 function displayResults(c1, c2, c3, c4, c5, score) {
   const resultsContainer = document.createElement("div");
   resultsContainer.innerHTML = `<br><br><br><br><h4>${c1}<br>${c2}<br>${c3}<br>${c4}<br>${c5}<br>Score: ${score}/5`;
   document.body.appendChild(resultsContainer);
 }
 