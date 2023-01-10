// n까지의 소수를 구한다
// 소수들을 배열에 넣는다
// n을 소수로 나눈다
// 소수로 나눠져서 나머지가 발생하면 다시 그 다음 소수로 나눈다.

function solution(n) {
  const answer = [];
  const prime = [1, 2, 3];

  // 소수 구하기
  for (let i = 3; i < n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (!(i % j === 0)) {
        prime.push(i);
      }
    }
  }
  console.log(prime);

  return answer;
}

solution(12);
