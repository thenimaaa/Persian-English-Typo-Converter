function updateUI() {
}

document.addEventListener("DOMContentLoaded", function() {
  updateUI();

  const buttonContainer = document.getElementById('buttonContainer');
  const donateSection = document.getElementById('donateSection');

  const donateButton = document.createElement('button');
  donateButton.className = 'button';
  donateButton.textContent = 'Donate'; 
  donateButton.onclick = function() {
    donateSection.classList.toggle('visible');
  };

  const otherExtensionButton = document.createElement('button');
  otherExtensionButton.className = 'button';
  otherExtensionButton.textContent = 'Other Extensions';
  otherExtensionButton.onclick = function() {
    window.open('https://addons.mozilla.org/en-US/firefox/user/18833520/', '_blank');
  };

  buttonContainer.appendChild(donateButton);
  buttonContainer.appendChild(otherExtensionButton);

  document.querySelectorAll('.wallet-address').forEach(addressElement => {
    addressElement.addEventListener('click', () => {
      const address = addressElement.innerText;

      navigator.clipboard.writeText(address).then(() => {
        addressElement.classList.add('copied');

        setTimeout(() => {
          addressElement.classList.remove('copied');
        }, 350);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});
