const buttons = document.querySelectorAll('.ripple');

buttons.forEach((i) => {
  i.addEventListener('click', (e) => {
    const circleEl = document.createElement('span');
    circleEl.classList.add('circle');

    // position of the click in viewport (x-left, y-top)
    const x = e.clientX;
    const y = e.clientY;

    // position of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // position of the click relative to button
    const left = x - buttonLeft;
    const top = y - buttonTop;

    circleEl.style.left = `${left}px`;
    circleEl.style.top = `${top}px`;

    i.appendChild(circleEl);
  });
});
