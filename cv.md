# Name 
   Yury Hrymats
   ![myPhoto](/rsschool-cv/2022-12-14%2016.08.35.jpg)
   
## Contacts
   1. Phone: +375336677798
   2. Email: yury.hrymats@icloud.com   
   3. telegram : @iuragrimot
   4. discord: prostayuri1k

## About me
    I want to become a developer! I like to learn something new and try to apply it in my life

## Skills
    * Completed a course on stepik "javascript for beginners"
    * HTML basics
    * CSS basics

## Code examples
    Codevars : prostayurik
    ```
    function duplicateCount(text){
        let text1 = text.toLowerCase();
        let arr = [], count = 0;
        for(let i = 0; i < text1.length; i++){
            arr.push(text1[i]);
        }
        for(let i = 0; i < arr.length; i++){
            if(arr.includes(arr[i], i + 1)){
                count++;
                while(arr.includes(arr[i], i+1)){
                    arr.splice(arr.indexOf(arr[i],i+1),1);
                }            
            }
        }    
        return count;  
    }
    ```
    ```
    function solution(number){
        let sum = 0;  
        for(let i = 1; i < number; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum = sum + i;
            }
        } 
        return sum;
    }
    ```
    
### English: beginner (a1)    