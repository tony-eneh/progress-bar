const bars = document.querySelectorAll('.bar');
const finish = document.querySelector('.finish');

finish.addEventListener('click', finishTo100);

function finishTo100(event) {
  console.log('click event is running', event);
  bars.forEach((bar) => {
    bar.querySelector('span').textContent = '100%';
    bar.querySelector('.inner').style.width = '100%';
  });
}
