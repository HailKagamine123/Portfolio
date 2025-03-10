 // Navigation Toggle
 const navToggle = document.querySelector('.nav-toggle');
 const nav = document.querySelector('nav');

 navToggle.addEventListener('click', () => {
     nav.classList.toggle('active');
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         nav.classList.remove('active');
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });

 // Back to top button
 const backToTopButton = document.querySelector('.back-to-top');
 
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         backToTopButton.classList.add('show');
     } else {
         backToTopButton.classList.remove('show');
     }
 });

 backToTopButton.addEventListener('click', (e) => {
     e.preventDefault();
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Dark mode toggle
 const themeToggle = document.querySelector('.theme-toggle');
 const themeIcon = themeToggle.querySelector('i');
 
 themeToggle.addEventListener('click', () => {
     document.body.classList.toggle('dark-mode');
     
     // Update icon
     if (document.body.classList.contains('dark-mode')) {
         themeIcon.classList.remove('fa-moon');
         themeIcon.classList.add('fa-sun');
     } else {
         themeIcon.classList.remove('fa-sun');
         themeIcon.classList.add('fa-moon');
     }
     
     // Save preference to localStorage
     const isDarkMode = document.body.classList.contains('dark-mode');
     localStorage.setItem('darkMode', isDarkMode);
 });
 
 // Check for saved theme preference
 const savedDarkMode = localStorage.getItem('darkMode');
 
 if (savedDarkMode === 'true') {
     document.body.classList.add('dark-mode');
     themeIcon.classList.remove('fa-moon');
     themeIcon.classList.add('fa-sun');
 }

 // Animate elements when they come into view
 const animateElements = document.querySelectorAll('.animate');
 
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.animationPlayState = 'running';
             observer.unobserve(entry.target);
         }
     });
 }, {
     threshold: 0.1
 });
 
 animateElements.forEach(element => {
     element.style.animationPlayState = 'paused';
     observer.observe(element);
 });

 // Form submission handling
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Get form values
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;
     
     // Here you would typically send the form data to a server
     // For now, we'll just log it and show a success message
     console.log({ name, email, subject, message });
     
     // Show success message (this would be replaced with actual form submission)
     contactForm.innerHTML = `
         <div style="text-align: center; padding: 30px 0;">
             <i class="fas fa-check-circle" style="font-size: 48px; color: #6c63ff; margin-bottom: 20px;"></i>
             <h3>Thank You!</h3>
             <p>Your message has been sent successfully. I'll get back to you soon!</p>
         </div>
     `;
 });

 // Initialize skill bars animation
 const skillBars = document.querySelectorAll('.skill-level');
 
 const skillObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.style.width = entry.target.style.width; // Trigger animation
             skillObserver.unobserve(entry.target);
         }
     });
 }, {
     threshold: 0.5
 });
 
 skillBars.forEach(bar => {
     // Initially set width to 0
     const targetWidth = bar.style.width;
     bar.style.width = '0';
     
     // After a small delay, animate to the target width
     setTimeout(() => {
         skillObserver.observe(bar);
         bar.style.width = targetWidth;
     }, 100);
 });