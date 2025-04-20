let scoreA = 0;
let scoreB = 0;
let ropeOffset = 50;

const pullSound = document.getElementById('pullSound');
const winSound = document.getElementById('winSound');

function updateRope() {
  $('#rope-container').css('left', ropeOffset + '%');
}

function checkWinner() {
  if (scoreA >= 5) {
    $('#status').text('🏆 Player A Wins!');
    winSound.play();
    disableButtons();
  } else if (scoreB >= 5) {
    $('#status').text('🏆 Player B Wins!');
    winSound.play();
    disableButtons();
  }
}

function disableButtons() {
  $('#btnA, #btnB').prop('disabled', true).css('background-color', '#bbb');
}

$('#btnA').click(function () {
  if (scoreA < 5 && scoreB < 5) {
    scoreA++;
    ropeOffset -= 5;
    $('#scoreA').text(scoreA);
    updateRope();
    pullSound.play();
    checkWinner();
  }
});

$('#btnB').click(function () {
  if (scoreA < 5 && scoreB < 5) {
    scoreB++;
    ropeOffset += 5;
    $('#scoreB').text(scoreB);
    updateRope();
    pullSound.play();
    checkWinner();
  }
});
