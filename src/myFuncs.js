
class MyFuncs{
    
    sumOfTwoArrays(array1, array2) {
          
            if (array1.length > array2.length) {
              for (let i = 0; i < array1.length; i++) {
               
                if (i < array2.length) {
                  array1[i] = array1[i] + array2[i];
                }
              }
              return array1;
            } else {
              for (let i = 0; i < array2.length; i++) {
               
                if (i < array1.length) {
                  array2[i] = array1[i] + array2[i];
                }
              }
              return array2;
            }
          }
        //   let myarray1 = [1, 2, 3, 4, 5];
        //   let myarray2 = [5, 4, 3, 2, 1,8,7];
        //   console.log(sumOfTwoArrays(myarray1, myarray2));
    
    }
    
    module.exports = new MyFuncs;