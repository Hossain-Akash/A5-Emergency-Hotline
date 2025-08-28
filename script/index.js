function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart
getElement('emergency-box').addEventListener('click', function (e) {
  if (e.target.className.includes('heart')) {
    const cardHeart = e.target;

    const heartCount = getElement('heart-count').innerText;
    const currentHeart = Number(heartCount) + 1;
    getElement('heart-count').innerText = currentHeart;
  }
});

// copy & call
getElement('emergency-box').addEventListener('click', function (e) {
  if (e.target.className.includes('copy-btn')) {
    const copyBtn = e.target;
    const emergencyNum = copyBtn.parentNode.parentNode.children[3].innerText;

    navigator.clipboard
      .writeText(emergencyNum)
      .then(() => {
        alert('Copied The Number: ' + emergencyNum);

        // update counter
        const copyCount = getElement('copy-count').innerText;
        let currentCopy = Number(copyCount) + 1;
        getElement('copy-count').innerText = currentCopy;
      })
      .catch(() => {
        alert('Failed to copy. Please copy manually: ' + emergencyNum);
      });
  } else if (e.target.className.includes('call-btn')) {
    const callBtn = e.target;
    const title = callBtn.parentNode.parentNode.children[1].innerText;
    const subTitle = callBtn.parentNode.parentNode.children[2].innerText;
    const number = callBtn.parentNode.parentNode.children[3].innerText;
    const coin = getElement('coin').innerText;

    if (coin <= 0) {
      alert('❌You Do Not Have Sufficient Coin. At Least Need 20 coins');
      return;
    }

    let currentCoin = Number(coin) - 20;
    getElement('coin').innerText = currentCoin;

    alert('📞Calling ' + subTitle + '' + number);
  }
});
