// 다음과 같은 정수 배열이 주어지고, 양의 정수 N이 주어졌을 때,
// 배열에서 합해서 N이되는 두 개의 요소(index)를 찾는 keyPair(arr, N) 함수를 작성하시오.

const keyPair = function(arr, N) {
    for(let i = 0; i < arr.length; i += 1) {
        for(let j = 0; j < arr.length; j += 1) {
            if (arr[i] + arr[j] === N) {
                console.log([i, j]);
                return [i, j];
            }
        }
    }
}

keyPair([1, 3, 4, 5], 7);             // [1, 2]
keyPair([1, 4, 45, 6, 10, 8], 16);    // [3, 4]
keyPair([1, 2, 4, 3, 6], 10);         // [2, 4]
keyPair([1, 2, 3, 4, 5, 7], 9);       // [3, 4]
