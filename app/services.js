'use strict'

angular.module('myOdysseyServices', [])

.factory('heroBuilderService', function(){
        
    let heroObject = {
        "health": 90,
        "resolve": 100,
        "arete": 80,
        "men": 200 }
        
    return {
        hero : heroObject
    }
})

.factory('rulesMessagesService', function(){
    
    let rulesArr = [
        
                    {
                        name: "intro",
                        operator: "showIntro",
                        logic: "",
                        message: "Welcome to the Odyssey App. While navigating Odysseus homeward, " +
                        "watch your resources displayed at the bottom of the screen. If you are running " +
                        "low choose carefully to survive."
                    },
                    {   
                        name: "health",
                        operator: "showHealth",
                        logic: "",      
                        message: "If you run out of health, you die." +
                             " Gain health by doing something restful or" +
                             " avoiding conflict for a round to recharge" },
                    {   
                        name: "resolve",
                        operator: "showResolve",
                        logic: "",
                        message: "Odysseus's will power to return" +
                        " home. Comforts, a goddess's" +
                        " spell or military diversions, might cause him" +
                        " to forsake the journey."},
                    {   
                        name: "arete",
                        operator: "showArete",
                        logic: "",
                        message: "A distinctly Greek sense of heroic excellence." +
                        " Losing Arete will not kill you outright, but you will disastrously lose"+
                        " the respect of the Hellenic world."},
                    {   
                        name: "men",
                        operator: "showMen",
                        logic: "",
                        message: "Some brawn always helps. You don't need them but keep them around."}
                  ];
    
    rulesArr.forEach(function(obj){
        obj.logic = updateActiveElem(obj.operator).answer;
        
        return obj;
    });
    
    let arrStrings = ["showIntro", "showHealth", "showResolve", "showArete", "showMen"];
     
    function updateActiveElem(activeString){
         
         let responsiveElems = { 
         "showIntro": true, 
         "showHealth": true,
         "showResolve": true,
         "showArete": true,
         "showMen": true }
         
        function updateElem(testString, arrayObj){
            let keysArr = Object.keys(arrayObj);
            let operatorArr = [];
                
                keysArr.forEach(function(elem){
                   
                    if( elem === testString){

                        arrayObj[elem] = true;
                        operatorArr.push( arrayObj[elem] );
                    }
                    else {
                        arrayObj[elem] = false;
                        operatorArr.push( arrayObj[elem]);
                    }
                })
                 console.log(operatorArr);
                return operatorArr;
               
        }
        let answer = updateElem(activeString, responsiveElems); 
         return {
           answer }
     }
                     
   return {
       rulesArr: rulesArr,
       updateActiveElem: updateActiveElem,
       arrStrings: arrStrings }
})

.factory('storyService', function(){
    
    
})

.factory('imgViewService', function(){
    let imgArr = [
        {
          name: "view-0",
          image: 'part-0.PNG' },
        {
         name: "view-1",
         image: 'view-1.PNG' },
        {
         name: "view-2",
         image: 'view-2.PNG'
        }];
        
        return {
            imgArr: imgArr
        }
})

.factory('gameChoiceService', function(){
    
    let viewOptionsArr = [
        
        {
            id: 0,
            name: "Trojan Beach",
            action: "Boredom",
            result: "Your men are listless and your resolve crumbles",
            option0: "Stay on the Beach at Troy",
            option1: "Set Sail for the Cicones by the Shore",
            option2: "Set Sail for Home offshore"
        },
        {
            id: 1,
            name: "Land of Cicones",
            action: "You raid the Chicones", 
            result: "plunder and your leadership invigorate your men",
            options: {
                
            }
            
        },
        {
            
        }
        
    ];
    
    return {
        viewOptionsArr : viewOptionsArr
    }
    
})

