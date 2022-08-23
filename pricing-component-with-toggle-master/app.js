const toggle = document.querySelector('#pricing');
const anually = document.querySelectorAll('.anually');
const monthly = document.querySelectorAll('.monthly');

toggle.addEventListener('change', handleToggle);

function handleToggle(hard) {
  if (hard.target.checked) {
    anually.forEach(element => element.setAttribute('hidden', true));
    monthly.forEach(element => element.removeAttribute('hidden'));
  } else {
    anually.forEach(element => element.removeAttribute('hidden'));
    monthly.forEach(element => element.setAttribute('hidden', true));
  }
}