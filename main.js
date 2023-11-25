/*document.addEventListener(
    "contextmenu",
    (e) => {
        e.preventDefault();
    },
    false
);

document.addEventListener(
    "copy",
    (e) => {
        e.preventDefault();
    },
    false
);*/

// Get the button
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const button = document.querySelector('.totop');
    console.log(button);

    const scrollingColumn = document.querySelector('.right-column');

    const displayButton = () => {
        scrollingColumn.addEventListener('scroll', () => {
            const scrollY = scrollingColumn.scrollTop;

            console.log('Scroll Y:', scrollY);

            if (scrollY > 100) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        });
    };

    const scrollToTop = () => {
        button.addEventListener("click", () => {
            console.log('Button clicked');
            scrollingColumn.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    displayButton();
    scrollToTop();
});


const button = document.querySelector('.totop');
console.log(button);

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();