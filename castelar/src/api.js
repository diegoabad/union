const urlStudents = 'http://localhost:3001/students';

export const fetchStudents = async () => {
  const response = await fetch(urlStudents);
  const students = await response.json();
  return students;
}