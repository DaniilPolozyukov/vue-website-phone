export default function lazy() {

  lazyJust()

  function lazyJust() {
    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target

          if (lazyImage.getAttribute('data-src').length != "") {
            let bg = lazyImage.getAttribute('data-src');
            lazyImage.style.backgroundImage = "url(" + bg + ")";
          } else {
            //
          }

        }
      })
    });
    const arr = document.querySelectorAll('.lazy')
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      imageObserver.observe(element);
    }
  }

}