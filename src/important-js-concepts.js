import React from 'react';

export const ImportantJsConcepts = () => {
  // duplicate element in an array
  console.time('a');
  console.timeEnd('a');
  const duplicateElemFinder = (arr = []) => {
    let a = [];
    let count = 0;
    let unique = [];
    let dups = [];
    for (let i = 0; i < arr.length; i++) {
      count = arr[i];
      arr[i] = '';
      console.log(count, arr);
      if (arr.indexOf(count) === -1) {
        unique.push(count);
      } else {
        if (dups.indexOf(count) == -1) {
          dups.push(count);
        }
      }
    }
    console.log(unique, dups);
  };

  // duplicateElemFinder(["s","i","o","s"]);

  //bubble sort

  const bubbleSort = (arr = []) => {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        const element = arr[j];
        if (arr[j] > arr[j + 1]) {
          arr[j] = arr[j + 1];
          arr[j + 1] = element;
        }
      }
    }
    console.log(arr, 'aa');
  };

  // bubbleSort([1,5,34,2,7,6,43,36,6,33])

  // sum of numbers

  const sum = (num) => {
    let count = 0;
    for (let i = 0; i < `${num}`.length; i++) {
      count = count + parseInt(`${num}`[i]);
    }
    return count;
  };

  // console.log(sum(2343432432434324));

  // find the exponent using recurssion

  const pow = (num, p) => {
    if (p === 0) {
      return 1;
    } else {
      return num * pow(num, p - 1);
    }
  };

  // console.log(pow(10,3))

  // do factorial

  const factorial = (num) => {
    if (num == 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  };

  // console.log(factorial(5));

  // from an unsorted array find any pair that sums up to a different number

  const sumChecker = (arr = [], num = 0) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let diff = num - arr[i];
      if (obj[diff]) {
        return true;
      }
      obj[arr[i]] = true;
    }
    return false;
  };

  // console.log(sumChecker([1,5,4,7,5,4,8,3],110));

  // reverse a string

  const reverseString = (str = '') => {
    let st = '';
    for (let i = str.length - 1; i >= 0; i--) {
      st += str[i];
    }
    return st;
  };
  // console.log(reverseString("babies"))

  // find a missing number from an array 1- n

  const findMissingNumber = (arr = []) => {
    arr.sort((a, b) => a - b);
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (count !== arr[i]) {
        return count;
      }
      count++;
    }
    return 'no missing number';
  };

  // console.log(findMissingNumber([1,2,3,4,5,6,7,8,9]));

  // palindrome Number

  const palindromeChecker = (num) => {
    return `${num}` === `${num}`.split('').reverse().join('');
  };
  // console.time("start");
  // console.log(palindromeChecker(1211121))
  // console.timeEnd("start");

  const fibo = (num) => {
    if (num <= 1) return num;
    return fibo(num - 1) + fibo(num - 2);
  };

  // console.log(fibo(5));

  let quickSort = (arr = []) => {
    if (arr.length < 2) {
      return arr;
    }
    let left = [];
    let right = [];
    let pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
      const element = arr[i];
      if (element < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  // console.log(quickSort([1,5,6,4,33,99,2,56,-9,-4,-11]))
  // console.log(typeof Error)
  //currying

  const nonCurrySum = (a, b, c) => {
    return a + b + c;
  };

  const currySum = (a) => (b) => (c) => a + b + c;

  function currySm(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          return a + b + c + d;
        };
      };
    };
  }

  // console.log(currySum(1)(4)(9));

  // closure example

  let privateCounter = () => {
    let counter = 0;
    return {
      increment: (val = 1) => {
        counter = counter + val;
        return counter;
      },
      getCounter: () => {
        return counter;
      },
    };
  };

  // custom array flatten

  const arrayFlat = (arr = [], depth = 1) => {
    let result = [];
    arr.forEach((ar) => {
      if (Array.isArray(ar) && depth > 0) {
        result.push(...arrayFlat(ar, depth - 1));
      } else {
        result.push(ar);
      }
    });

    return result;
  };

  // console.log(arrayFlat([1,2,5,[1,2,3,[4,66,5]],4],2))

  // caching and memoization in JS

  const memoIzation = (cb) => {
    const res = {};
    return (...args) => {
      if (!res[`${args}`]) {
        res[`${args}`] = cb(...args);
      }
      return res[`${args}`];
    };
  };

  const abc = (...args) => {
    for (let index = 0; index < 99; index++) {}
    return args.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  };
  const mem = memoIzation(abc);
  // console.time('start1');
  // mem(3, 4, 5, 6, 7, 8);
  // console.timeEnd('start1');

  // console.time('start2');
  // mem(3, 4, 5, 6, 7, 8);
  // console.timeEnd('start2');

  return <></>;
};
