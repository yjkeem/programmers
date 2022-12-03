// 문자열을 반복해서 돌면서 일단 빈 문자열(answer)에 넣어줌 +=
// 만약 answer에 있는 값이면 넣지 않음

function solution(my_string) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }

  return answer;
}

// 아래 식도 가능함
// const arr = my_string.split('');
// return [...new Set(arr)].join('');
