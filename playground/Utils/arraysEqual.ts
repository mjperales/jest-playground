/**
 * Find out if two arrays match in size and "strings" it contains
 *
 * @param array1  First array to compare
 * @param array2  Second array to compare
 * @returns bool Returns true if arrays match
 */
export default function arraysEqual(array1: string[], array2: string[]) {
  return (
    array1.length === array2.length && array1.every((el) => array2.includes(el))
  );
}
