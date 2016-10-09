'use strict'     
     function updateActiveElem(activeString){
         
         let responsiveElems = { 
         "showIntro": true, 
         "showHealth": false,
         "showResolve": false,
         "showArete": false }
         
        function updateElem(testString, arrayObj){
            let keysArr = Object.keys(arrayObj);
                
               //console.log(keysArr);
                
                keysArr.forEach(function(elem){
                    if( elem === testString){
                        console.log(arrayObj[elem]);
                        arrayObj[elem] = true;
                    }
                    else {
                        arrayObj[elem] = false;
                        
                    }
                return arrayObj;
                })
                return arrayObj;
        }
        
         let answer = updateElem(activeString, responsiveElems);
         //console.log(answer);
         return {
            answer
         }
        
     }
     
updateActiveElem("showIntro");

//console.log(updateActiveElem.responsiveElems);