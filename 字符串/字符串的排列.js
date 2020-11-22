function Permutation(str) {
    const result = [];
    if (str) {
      queue = str.split('')
      PermutationCore(queue, result);
    }
    //result.sort();
    return [... new Set(result)];
  }

  function PermutationCore(queue, result, temp = "", current = "") {
    current += temp;   //current是当前队列   temp是当前的数
    if (queue.length === 0) {
      result.push(current);       //当排完三个后 加入result
      return;
    }
    for (let i = 0; i < queue.length; i++) {
      temp = queue.shift();
      PermutationCore(queue, result, temp, current);
      queue.push(temp);
    }
  }
console.log(Permutation('123'))