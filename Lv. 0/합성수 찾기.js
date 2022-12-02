function solution(n) {
  var answer = 0;
  // n 자체가 합성수인지 판단하는 것이 아닌, n이하의 모든 수 각각이 합성수인지
  // 이중 for문으로 일단 1부터 n까지를 반복하고 (1부터보다 4부터가 나은 듯 1, 2, 3은 소수니까)
  // 내부 반복문에서는 해당 n을 또 2부터 n까지 모듈러

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
}
