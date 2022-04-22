const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const headingLeft = document.querySelector('.heading-left');
const headingRight = document.querySelector('.heading-right');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
  headingRight.style.visibility = 'hidden';
  headingLeft.style.visibility = 'visible';
});
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});
right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
  headingRight.style.visibility = 'visible';
  headingLeft.style.visibility = 'hidden';
});
right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

document.body.addEventListener('mouseleave', () => {
  headingRight.style.visibility = 'visible';
  headingLeft.style.visibility = 'visible';
});
