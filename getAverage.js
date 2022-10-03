function getAverage(marks){
  const sum = marks.reduce((acc, number) => acc + number, 0);
  const length = marks.length;
  return Math.floor(sum / length);
}