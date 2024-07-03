#!/usr/bin/node
export default function getStudentsByLocation(student = getListStudents(), city) {
  return listStudents.filter((Student) => Student.location === city);
}
