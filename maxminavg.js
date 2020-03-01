function maxMinavg(arr){
    sum = [0]
    max = [0]
    min = [0]
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        if (arr[i] < min){
            min = arr[i]
        }
        sum = sum + arr[i];
        var avg = sum/arr.length
    }
    console.log( "the max is " + max);
    console.log( "the min is " + min);
    console.log("the avg is " + avg);
    return [max, min, avg];
}

maxMinavg([1, -2, 9, 4]);