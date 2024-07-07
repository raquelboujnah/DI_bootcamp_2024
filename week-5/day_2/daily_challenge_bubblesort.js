const arr = [5,0,9,1,7,4,2,6,3,8];
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        if (arr[i] < arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);