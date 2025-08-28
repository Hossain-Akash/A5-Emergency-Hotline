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

// copy
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
  }
});
