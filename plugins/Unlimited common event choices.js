//-----------------------------------------------------------------------------
// DaedraKyne Plugins - Unlimited common event choices - opening a website
//                    -------
//        Unlimited common event choices.js
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
 /*:
 * @plugindesc v1.5
 * 
 * @author DaedraKyne
 * 
 * 
 * @param choices
 * @text Choices
 * @desc Add choices (don't forget to add their respective common
 * events after!)
 * @type text[]
 * @default []
 * 
 * @param common events
 * @text The choices' common events.
 * @desc Link common events to each choice!
 * @type number[]
 * @default []
 * 
 *
 * 
 * @help
 * ----------------------------------------------------------------------------
 * Introduction
 * ----------------------------------------------------------------------------
 *
 * ----------------------------------------------------------------------------
 * Plugin commands
 * ----------------------------------------------------------------------------
 *
 * 
 * ----------------------------------------------------------------------------
 * Changelog
 * ----------------------------------------------------------------------------
 * v 1.5: Added two new plugin commands, randomChoices and randomChoice
 * v 1.0: Created the plugin.
 * 
//----------------------------------------------------------------------------
*/

(function () {

    var parameters = PluginManager.parameters("Unlimited common event choices");
    var choiceParameters = JSON.parse(parameters["choices"]);
    var commonEventParameters = JSON.parse(parameters["common events"]);


    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);

        if(command == "choice") {
            $gameMessage.setChoices(choiceAdding(), 0, -1);
            $gameMessage.setChoiceCallback(function(choice) {
                for(var i = 0; i < commonEventParameters.length; i++) {
                    if(choice == i) {$gameTemp.reserveCommonEvent(commonEventParameters[i])};
                    }

             });

        };
        if(command == "cutChoice") {
            var begin = Number(args[0]);
            var end = Number(args[1]);
            console.log(begin);
            console.log(end);
            $gameMessage.setChoices(choiceAddingCut(begin, end), 0, -1);
            $gameMessage.setChoiceCallback(function(choicy) {
                var choice = choicy + begin - 1;
                console.log(choice);
                for(var i = 0; i < commonEventParameters.length; i++) {
                    if(choice == i) {
                        $gameTemp.reserveCommonEvent(commonEventParameters[i])};
                    }

             });

        };

        if(command == "randomChoices") {
            var begin = Number(args[0]);
            var end = Number(args[1]);
            var num = Number(args[2]);
            var repeat = args[3];
            if (repeat === "false") {var repet = false;} else {var repet = true;}
            var ev;
            console.log(begin);
            console.log(end);
            console.log(num);
            console.log(repet);
            $gameMessage.setChoices(choiceRandoming(begin, end, num, repet), 0, -1);
            $gameMessage.setChoiceCallback(function(choicy) {
                console.log(choicy);
                var choice = choicy;
                console.log(choice);
                choice = randomChosens[choice];
                console.log(choice);
                for(var i = 0; i < commonEventParameters.length; i++) {
                    if(choice == i) {
                        console.log(commonEventParameters[choice]);
                        $gameTemp.reserveCommonEvent(commonEventParameters[i])};
                    }

             });

        };

        if(command == "randomChoice") {
            var begin = Number(args[0]);
            var end = Number(args[1]);
            console.log(begin);
            console.log(end);
            var choicer = choiceRandomer(begin, end);
                console.log(choicer);
                for(var i = 0; i < commonEventParameters.length; i++) {
                    if(choicer == i) {
                        console.log(commonEventParameters[choicer]);
                        $gameTemp.reserveCommonEvent(commonEventParameters[i]);
                    }

                };

        };

    };



var choiceAdding = function() {
    var fullChoices = [];
    for(var i = 0; i < choiceParameters.length; i++) {
        fullChoices.push(choiceParameters[i]);
    }
    return fullChoices;
};

var choiceAddingCut = function(beginning, ending) {
    var fullChoices = [];
    var begin = beginning - 1;
    var end = ending;
    for(var i = begin; i < end; i++) {
        fullChoices.push(choiceParameters[i]);
    }
    return fullChoices;
};

var randomChosens = [];

var choiceRandoming = function(beginning, ending, number, repeating) {
    var fullChoices = [];
    var begin = beginning - 1;
    var end = ending - 1;
    var repeat = repeating;
    var diff = end - begin;
    var rep = [];
    for (var i = 0; i < number; i++) {
        if (repeat == false) {
            if (number <= diff) {
                var j = false;
                while (j == false) {
                    var random =  Math.floor(Math.random() * (diff + 1)) + begin;
                    var repeated = 0;
                    for (var k = 0; k < rep.length; k++) {
                        if (random == rep[k]) {
                            repeated++;
                        }
                    }
                    console.log(random);
                    if (repeated == 0) {
                        rep.push(random);
                        j = true;
                    } else {
                        j = false;
                    }
                }
                console.log(rep);
                fullChoices.push(choiceParameters[random]);   
            } else {
                var random =  Math.floor(Math.random() * (diff + 1)) + begin;
                fullChoices.push(choiceParameters[random]);
            }     
        } else {
            var random =  Math.floor(Math.random() * (diff + 1)) + begin;
            fullChoices.push(choiceParameters[random]);
        }
    }
    console.log(fullChoices);
    randomChosens = rep;
    console.log(rep);
    return fullChoices;
};


var choiceRandomer = function(beginning, ending) {
    var fullChoices = [];
    var begin = beginning - 1;
    var end = ending - 1;
    var diff = end - begin;
    var random =  Math.floor(Math.random() * (diff + 1)) + begin;
    console.log(random);
    fullChoices.push(choiceParameters[random]);
    console.log(fullChoices);
    return random;
};


})();


