console.log('BCC Dashboard chargé');

const buttons = document.querySelectorAll('.action-btn');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    const text = button.innerText;

    alert(text + ' bientôt disponible');

  });

});
