#!/usr/bin/node
import getListStudents from "./0-get_list_students";

export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((current, next) => current + next.id, 0);
}
