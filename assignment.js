//feetToMile
//function feetToMile(feet){
    //var mile = (0.000189394*feet);
    
    //return mile;
    
//}
//var rodeMile = feetToMile(3);
//console.log(rodeMile);

//woodCalculator
//function woodCalculator(char,tabil,bad){
    //var char = 1 * char;
    //var tabil = 3 * tabil;
    //var bad = 5 * bad;
    //var totalwood = char + tabil + bad;
    //return totalwood;
//}

//brickCalculator

//function brickCalculator(bulidin){
    //var brick = 1000;
    //var first = 15;
    //var second = 12;
    //var thired = 10;
    //if(first >= 15 * 1000 && second >= 12 && thired >= 10);
//}

//tinyFriend
function tinyFriend(name){
    var small = name[0].length;
    for(var i = 0; i < name.length; i++){
        var friendname = name[i];
        if(friendname < small){
            friendname = small[i];
        }
    }
    return small;
}
var smallName = tinyFriend("absh", "ab", "abc");
console.log(smallName);



