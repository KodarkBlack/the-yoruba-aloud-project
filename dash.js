const threeStudentModal = document.getElementById('three-student-modal');
const modalContent = document.getElementById('modal-content');

// close modal

const closeModalThreeStudent = document.getElementById('close-modal-three-student');

// categories


const tableTitle = document.getElementById('table-title');
const tableContentModal = document.getElementById('table-content-modal');


threeStudentModal.addEventListener('click', () => {
    modalContent.style.display = 'block';
});

closeModalThreeStudent.addEventListener('click', () => {
    modalContent.style.display = 'none';
});

tableTitle.addEventListener('click', () => {
    tableContentModal.style.display = 'block';
});