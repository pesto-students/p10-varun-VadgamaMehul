// function PowerSet(arr) {
//   let n = arr.length;
//   let output = [];
//   let ans = [];
//   let index = 0;
//   subset(arr, index, output, ans);
//   return ans;

//   function subset(arr, index, output, ans) {
//     //base case
//     if (index >= arr.length) {
//       ans.push(output);
//       return;
//     }

//     //exclude
//     subset(arr, index + 1, output, ans);

//     //include
//     output.push(arr[index]);
//     subset(arr, index + 1, output, ans);
//   }
// }

// const test1Input = [1,2,3];
// //   const test2Input = "4 7 1 9";

// console.log(PowerSet(test1Input));



function PowerSet(arr) {
    let result = [] 
    
    function conarructSubSet(subSet, index) {
      if(index >= arr.length) {
        result.push(subSet.slice())
        return
      }
      conarructSubSet(subSet, index + 1)
      subSet.push(arr[index])
      conarructSubSet(subSet, index + 1)
      subSet.pop();
    }
    
    conarructSubSet([], 0)
    return result
  }

  const test1Input = [1,2,3];
  console.log(PowerSet(test1Input));