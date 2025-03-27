document.addEventListener("DOMContentLoaded", function() {
  const donateBtn = document.querySelector('.donate-btn');
  const addonsBtn = document.querySelector('.addons-btn');

  if (donateBtn) {
    donateBtn.addEventListener("click", function() {
      window.open('https://zarinp.al/thenima', '_blank');
    });
  }

  if (addonsBtn) {
    addonsBtn.addEventListener("click", function() {
      window.open('https://addons.mozilla.org/en-US/firefox/user/18833520/', '_blank');
    });
  }
});
