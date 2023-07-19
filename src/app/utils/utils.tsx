export function range (min: number, max: number) {
    //@ts-ignore
    return Array.from({ length: max - min + 1 }, (_,i) => min + i);
}

export function random (min: number, max: number) {
    return min + Math.floor(Math.random() * (max-min+1));
}

export function sum (nums: number[]) {
    return nums.reduce((acc: number, curr: number) => acc + curr, 0);
}

export function randomSumIn (arr: number[], max: number) {
    let sets: number[][] = [[]];
    let sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[random(0, sums.length - 1)];
  }
