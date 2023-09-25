function presentStudent() {
   const id = document.getElementById('id').value;
   const studentList = document.getElementById('studentList');

   let studentName = getStudentName(id);

   if (studentName !== 'Student not found') {
      const currentTime = new Date().toLocaleTimeString();
      const date = new Date().toDateString();
      const listItem = document.createElement('li');
      listItem.textContent = `${studentName} (ID: ${id}) - reported at ${currentTime} - on (${date}) `;
      studentList.appendChild(listItem);
   }

   document.getElementById('id').value = '';
}

function getStudentName(id) {
   switch (id) {
      case 'M19994':
         return 'Fahimur Rahman Chowdhury (M19994)';
      case 'M19983':
         return 'Mahrus Chowdhury (M19983)';
      case 'M20000':
         return 'Efaz Hossain Moon';
      case 'M20035':
         return 'Sadat Islam Swapno';
      case 'M20040':
         return 'Akib Islam';
      default:
         alert("Student id is not correct or not defined")
         return 'Student id is not correct or not defined';
   }
}
