'use strict'     
     function updateActiveElem(activeString){
         
         let responsiveElems = { 
         "showIntro": true, 
         "showHealth": true,
         "showResolve": true,
         "showArete": true,
         "showMen": true }
         
        function updateElem(testString, arrayObj){
            let keysArr = Object.keys(arrayObj);
            let operatorString = '';
                
                keysArr.forEach(function(elem){
                    operatorString += elem;
                    if( elem === testString){

                        arrayObj[elem] = true;
                        operatorString += ' = ' + arrayObj[elem] + '; ';
                    }
                    else {
                        arrayObj[elem] = false;
                        operatorString += ' = ' + arrayObj[elem] + '; ';
                    }
                
                })

                return operatorString
        }
        
         let answer = updateElem(activeString, responsiveElems);
         
        // let string = " "answer
         console.log(answer);
         return {
            answer
         }
        
     }
     
updateActiveElem("showMen");
