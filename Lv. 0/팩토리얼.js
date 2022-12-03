// 반복문을 사용해서 변수 result에 계속 곱한다.
// 곱한 뒤 count++
// n과 같거나 커지면 count 를 반환한다.

function solution(n) {
  let count = 0;
  let result = 1;
  let i = 1;
  while ((result *= i) <= n) {
    i++;
    count++;
  }
  return count;
}
