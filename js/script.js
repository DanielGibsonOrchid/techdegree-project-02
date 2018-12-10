/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Global Variables that store the DOM elements that will be referenced and/or manipulated
const studentsPerPage = 10;
const studentList = document.querySelector('.student-list').children;
const pageDiv = document.querySelector('.page');


//function to hide or show students according to the page number
const showPage = (list, page) => {
	let lastIndex = (studentsPerPage * page) - 1;
	let firstIndex = lastIndex - (studentsPerPage - 1);

  	//change the styles to hide or show accordingly
  	for (let i = 0; i < list.length; i += 1) {
    	if (i >= firstIndex && i <= lastIndex) {
      	list[i].style.display = '';
    } else {
    	list[i].style.display = 'none';
    }
  }
}


//function to generate, append, and add functionality to the pagination buttons.

const appendPageLinks = (list) => {
	//1. Number of pages needed
	const totalPages = Math.ceil(list.length / studentsPerPage);

	//2. Created 'div' with pagination class and append to '.page' div
	const paginationDiv = document.createElement('div');
	paginationDiv.classList.add('pagination');
	pageDiv.appendChild(paginationDiv);

	//3. Add 'ul' to the pagination div to store the pagination links
	const ul = document.createElement('ul');
	paginationDiv.appendChild(ul);

	//4. for every page, add 'li' and 'a' tags with the page number text
	const li = document.createElement('li');
	const a = document.createElement('a');

	for (let i = 1; i <= totalPages; i += 1) {
		ul.appendChild(li);
		let a = document.createElement('a');
		a.href = '#';
		a.innerText = i;
		li.appendChild(a);
		if (i === 1) {
			a.className = 'active';
		}
	
		//5. Add event listener to each 'a' tag. When clicked call the showPage function to display the appropriate page
		a.addEventListener('click', (event) => {
			let currentPageNumber = event.target.textContent;
			showPage(studentList, currentPageNumber);
			const links = document.querySelectorAll('a');

			//6. Loop over pagination links to remove active class from all links
			const paginationLinks = document.querySelectorAll('.pagination ul li a');
			for (let i = 0; i < paginationLinks.length; i += 1) {
				paginationLinks[i].classList.remove('active');
			}

			//7. Add the active class to the link that was just clicked.
			event.target.className = 'active';
		});
	}
}

//execute the functions
showPage(studentList, 1);
appendPageLinks(studentList);
