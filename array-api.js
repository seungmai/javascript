// Q1. make a string out of an array(배열을 string(문자열)으로 변환하기)
{
  const fruits = ['apple', 'banana', 'orange'];
  const a = fruits.join();
  console.log(a);
}

// Q2. make an array out of a string (주어진 string을 array로 변환해주는 것)
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const b = fruits.split(',');
  console.log(b);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] (주어진 배열의 순서를 거꾸로 만들기)
{
  const array = [1, 2, 3, 4, 5];
  const a = array.reverse();  
}

// Q4. make new array without the first two elements(첫번째와 두번째를 제외한 새로운 배열만들기. 단 array는 동일해야한다.)
{
  const array = [1, 2, 3, 4, 5];
  const a = array.slice(2, 5);
  console.log(a);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90(90점인 학생의 점수를 찾아야 된다.)
{
 const a = students.find((student) => student.score === 90);
 console.log(a);
}


// Q6. make an array of enrolled students (학원에 등록한 학생들만 나열하는 것, true인 학생들만 찾기!)
{
  const a = students.filter((student) => student.enrolled);
  console.log(a);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88] (점수만 들어있는 배열만들기.)
{
  const a = students.map((student) => student.score);
  console.log(a);
}

// Q8. check if there is a student with the score lower than 50 (학생들 중에 50점보다 낮은 점수가 있는지 없는지 확인하라.)
{
  const a = students.some((student) => student.score < 50);
  console.log(a);

  const b = !students.every((student) => student.score >= 50);
  console.log(b);
}


// Q9. compute students' average score(학생들의 평균점수 구하기)
{
  const a = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(a / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88' (학생들의 모든 점수를 string으로 변환하라.)
{
  const a = students.map((student) => student.score).join();
  console.log(a);
  const c = students.sort((student) => student.score).join();
  console.log(c);
}

// Bonus! do Q10 sorted in ascending orde
// result should be: '45, 66, 80, 88, 90'
{
  const a = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(a);
}