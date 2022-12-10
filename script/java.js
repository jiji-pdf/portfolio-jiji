var numQues = 10;
var numChoi = 3;

var answers = new Array(10);
answers[0] = "1";
answers[1] = "3";
answers[2] = "3";
answers[3] = "2";
answers[4] = "1";
answers[5] = "1";
answers[6] = "2";
answers[7] = "1";
answers[8] = "3";
answers[9] = "2";
function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;

  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }

  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";

  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }
  form.solutions.value = correctAnswers;

}

