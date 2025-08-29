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

// copy & call;

getElement('emergency-box').addEventListener('click', function (e) {
  const copyBtn = e.target.closest('.copy-btn');
  const callBtn = e.target.closest('.call-btn');

  if (copyBtn) {
    const emergencyNum = copyBtn.parentNode.parentNode.children[3].innerText;

    navigator.clipboard.writeText(emergencyNum).then(() => {
      alert('Copied The Number: ' + emergencyNum);

      // update counter
      const copyCount = getElement('copy-count').innerText;
      let currentCopy = Number(copyCount) + 1;
      getElement('copy-count').innerText = currentCopy;
    });
  }

  if (callBtn) {
    const title = callBtn.parentNode.parentNode.children[1].innerText;
    const subTitle = callBtn.parentNode.parentNode.children[2].innerText;
    const number = callBtn.parentNode.parentNode.children[3].innerText;
    const coin = getElement('coin').innerText;

    if (coin < 20) {
      alert('❌You Do Not Have Sufficient Coin. At Least Need 20 coins');
      return;
    }

    let currentCoin = Number(coin) - 20;
    getElement('coin').innerText = currentCoin;

    alert('📞Calling ' + subTitle + ': ' + number + '...');

    const historyContainer = getElement('history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
      <div class="mt-5 flex justify-between items-center p-3 bg-[#fafafa] rounded-xl">
        <div>
          <p class="font-medium ">${title}</p>
          <p>${number}</p>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    historyContainer.appendChild(newHistory);
  }
});

// clear history
getElement('clear-btn').addEventListener('click', function () {
  const historyContainer = getElement('history-container');
  historyContainer.innerHTML = '';
});
