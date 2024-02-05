
// let firstName = "anas";
// let lastName = "dahdouh";
// let pi = 3.14;
// let radius = 26;
// let favoriteSuperhero = "deadpool";
// let favoriteQuote = "let's move back to the front";

// console.log(firstName +" " + lastName )

// let area = pi*radius**2
// console.log(area)

// let perimiter = 2*pi*radius
// console.log(perimiter)

// let motivation = "A wise man named" + " " + favoriteSuperhero +" : " + favoriteQuote;

// console.log(motivation)


// // swap


// let a = 3;
// let b = 10;
// x= a;
// a = b;
// b=x;
// console.log("After swapping: a = ", a, " and b = ", b);

// let number = 3;
// if (number%2==0){
//     console.log("your number is even");
// }
// else {
//     console.log("your number is odd");
// }

// let day = 4;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednsday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//      case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("unvalid day");
// }


// //max

// let aSecond = -15;
// let bSecond = 6;
// let cSecond = 2.6;

//     console.log(Math.max(aSecond, bSecond, cSecond));


//     //teacher
//     let score = 83;
//     switch (true) {
//         case score >85 && score <=100:
//             console.log("A");
//             break;
//         case 70 < score && score <=85:
//             console.log("B");
//             break;
//         case 55 < score && score <=70:
//             console.log("C");
//             break;
//         case 40 < score && score <=55:
//             console.log("D");
//             break;
//         case 15 < score && score <=40:
//             console.log("E");
//             break;
//          case 15 >= score:
//             console.log("D");
//             break;
        
//         default:
//             console.log("unvalid score");
//     }

//     function factorialize(num) {
//         // 
//         {
//             for (var i = num - 1; i >= 1; i--) {
//                 num = num * i;
//             } 
//         }
        
//         return num;
//       }
//       console.log(factorialize(5));

        
//       function countDigits(numberx) {
//         // Handle negative numbers by taking the absolute value
//         let absoluteNumber = Math.abs(numberx);
      
//         // Initialize a variable to store the count of digits
//         let digitCount = 0;
      
//         // Use a loop to repeatedly divide the number by 10
//         while (absoluteNumber > 0) {
//           // Increment the digit count
//           digitCount++;
      
//           // Remove the last digit by performing integer division
//           absoluteNumber = Math.floor(absoluteNumber / 10);
//         }
      
//         // Return the count of digits
//         return digitCount;
//       }
    
//       console.log(countDigits(123452));


//     function maxnum(athird,bthird,cthird){
       
//         return  Math.max(athird, bthird, cthird); 
//     }   
//     max = maxnum(3,1,6)
//     console.log(max);

    
// // Set the height of the triangle
// let height = 4;

// // Print the upper part of the triangle
// for (let i = 1; i <= height; i++) {
//     let spaces = ' '.repeat(height - i);
//     let stars = '*'.repeat(2 * i - 1);
//     console.log(spaces + stars);
// }

// // Print the vertical line
// let verticalSpaces = ' '.repeat(height - 1);
// console.log(verticalSpaces + '|');



// function numberToday(dayx){
//     switch (dayx) {
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednsday");
//             break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//          case 6:
//             console.log("saturday");
//             break;
//         case 7:
//             console.log("sunday");
//             break;
//         default:
//             console.log("unvalid day");
//         }
// }
// numberToday(7)

// function sum(numbers) {
//     if (Array.isArray(numbers) && numbers.length > 0) {
//       return numbers.reduce((acc, current) => acc + current, 0);
//     } else {
//       return "Error: Please provide a non-empty array of numbers.";
//     }
//   }

// let numberArray = [1, 2 , 3 , 4];

// let totalsum = sum(numberArray);

// console.log(totalsum);

// function even(numberY){
//     if (Array.isArray(numberY)){
//         const evenNumbers = numberY.filter(num => num % 2 === 0);
//         return evenNumbers.length;
//     } else {
//       return "Error: Please provide an array of numbers.";
//     }
//     } 

//     let numberArrays = [1,2,3,4,5,6,7,8,9,10];
//     let evencount = even(numberArrays);
//     console.log(evencount);

//     function double(numberT){
//         if (Array.isArray(numberT)){
//             const doubledArray = numberT.map(numberT => numberT * 2);
//             return doubledArray;
//         }
//         else {
//             return "Error: Please provide an array of numbers.";
//         }
//     }

//     let arrayNumber = [1,2,3,4];
//     let doubleAr = double(arrayNumber);
//     console.log(doubleAr);



// function bubblesort(arr){
//     let len = arr.length;  
//     for(let i=0 ; i< len ; i++) {
//         for (let k=0; k < len ; k++) {
//             if (arr[k]> arr[k+1]){
//                 const temp= arr[k+1]
//                 arr[k+1]=arr[k]
//                 arr[k]=temp
//             }
//         }
//     }
//     return arr;

// }
// console.log(arr);
// bubblesort(arr);
// console.log(arr);

// function selectionsort(arr){
//     let lenTwo = arr.length;
    
//     for(let i =0; i<lenTwo; i++){
//         let min= i;
//         for (let j = i+1; j<lenTwo ; j++){
//             if (arr[j]<arr[min]){ min=j;

//             }
//         }
//         if (min!=i){
//             const temp2= arr[i]
//             arr[i]=arr[min]
//             arr[min]=temp2

//         }

        

//     }
// return arr}
// console.log(arr);
// console.log(selectionsort(arr));



// function insertionsort(arr){
//     for (let i=1; i < arr.length;i++){
//         let curr = arr[i];
//         let j = i - 1;

//      while(j>=0 && arr[j]>curr ){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j + 1] = curr;
//     }
//     return Array;
// }
// console.log(insertionsort(Array));

// function insertionSort(arr) {
//     const n = arr.length;
//     for (let i = 1; i < n; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }

//         arr[j + 1] = key;
//     }
//     return arr;
// }
// let arr = [3,2,6,4,1,8,7]
// console.log(insertionSort(arr));

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         // Check if the target is present at the middle
//         if (arr[mid] === target) {
//             return mid;
//         }

//         // If the target is greater, ignore the left half
//         if (arr[mid] < target) {
//             left = mid + 1;
//         }

//         // If the target is smaller, ignore the right half
//         else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }

// let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let targetElement = 5;
// let result = binarySearch(sortedArray, targetElement);

// if (result !== -1) {
//     console.log(`${targetElement} found at index ${result}.`);
// } else {
//     console.log(`${targetElement} not found in the array.`);
// }


let Person = {
    firstName : 'anas',
    lastName : 'dahdouh',
    Age : 33,
get fullname(){
    return `${Person.firstName} ${Person.lastName}`
},

};
console.log(Person.fullname);

