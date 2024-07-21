const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, 400);
    }
  });
});

const hiddenElements1 = document.getElementsByClassName('hidden1');
const hiddenElements2 = document.getElementsByClassName('hidden2');
for (let a = 0; a < hiddenElements1.length; a++) {
  setTimeout(() => {
    observer.observe(hiddenElements1[a]);
  }, a * 1000);
}
for (let a = 0; a < hiddenElements2.length; a++) {
  setTimeout(() => {
    observer.observe(hiddenElements2[a]);
  }, a * 1000);
}
