// Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList    = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navList.classList.toggle('active');
});

// Typing Effect
const typedText = document.getElementById('typed-text');
const phrase    = "Hello, I'm Isaac Urban.";
let idx = 0;
function type() {
  if (idx < phrase.length) {
    typedText.textContent += phrase[idx++];
    setTimeout(type, 100);
  }
}
window.addEventListener('load', type);



// MARQUEE

const logos = document.querySelector('.logos');

let pos = 0;                // current offset
let isDragging = false;
let startX = 0;
let scrollStart = 0;

// autoplay scrolling
function autoScroll() {
  if (!isDragging) {
    pos -= 1; // speed
    logos.style.transform = `translateX(${pos}px)`;
    // reset for seamless loop
    if (Math.abs(pos) > logos.scrollWidth / 2) {
      pos = 0;
    }
  }
  requestAnimationFrame(autoScroll);
}
autoScroll();

// mouse/touch drag events
logos.addEventListener('mousedown', e => {
  isDragging = true;
  startX = e.pageX;
  scrollStart = pos;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const dx = e.pageX - startX;
  pos = scrollStart + dx;
  logos.style.transform = `translateX(${pos}px)`;
});

// touch support
logos.addEventListener('touchstart', e => {
  isDragging = true;
  startX = e.touches[0].pageX;
  scrollStart = pos;
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const dx = e.touches[0].pageX - startX;
  pos = scrollStart + dx;
  logos.style.transform = `translateX(${pos}px)`;
});


//CONTACT FORM

document.addEventListener('DOMContentLoaded', () => {
    const formInputs = document.querySelectorAll('.form-input');

    formInputs.forEach(input => {
        // On initial load, if input has value, ensure label is in 'floating' state
        if (input.value.trim() !== '') {
            input.classList.add('has-value'); // Not directly used by CSS for floating label here, but good for custom scenarios
        }

        // The primary floating label effect is handled by CSS using :not(:placeholder-shown) and :focus
        // This JS is more for demonstration of where you might add more complex interactions or validation

        input.addEventListener('focus', () => {
            // Add logic here if needed, e.g., for more complex animations or validation states
        });

        input.addEventListener('blur', () => {
            // Add logic here if needed
            // For this specific floating label, CSS handles it well
        });

        input.addEventListener('input', () => {
            // Add/remove a class based on content, useful if :placeholder-shown isn't enough
            if (input.value.trim() !== '') {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });

    // Example of client-side validation (basic)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        let isValid = true;
        formInputs.forEach(input => {
            if (input.hasAttribute('required') && input.value.trim() === '') {
                isValid = false;
                input.style.borderColor = '#dc3545'; // Highlight empty required fields
            } else {
                input.style.borderColor = ''; // Reset border color
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields.');
            event.preventDefault(); // Stop form submission if invalid
        } else {
            // Optionally, you could show a success message or disable the button
            // before the form submits to Proforms.top
            // alert('Form submitted successfully! (Redirecting...)');
        }
    });
});
