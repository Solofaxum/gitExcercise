
class MyFuncs {

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

    mySubstring(string, startIndex, endIndex) {
        let result = '';
        let length;
         if (endIndex === undefined) {
            length = string.length
        } else {
            length = endIndex;
        }
        if (startIndex < 0 && endIndex < 0 && endIndex > string.length) {
            return '';
        }
        if (typeof string !=='string' && typeof startIndex !=='number' && typeof endIndex!=='number'){
         return ''; }
       
        while (startIndex < length)
            result += string[startIndex++];
        return result;
    }
}

module.exports = new MyFuncs;
