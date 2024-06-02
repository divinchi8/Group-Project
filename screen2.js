const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show'); // Toggle show/hide class
});
