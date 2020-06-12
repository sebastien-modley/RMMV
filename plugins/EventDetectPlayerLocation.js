//-----------------------------------------------------------------------------
// DaedraKyne Plugins - Event Detects Player Location
//                    -------
//          EventDetectPlayerLocation.js
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
 /*:
 * @plugindesc v1.5 Detects the player's location in parallel to the event's location,
 * and checks the distance between the event and the player.
 * 
 * @author DaedraKyne
 * 
 *
 * @help
 * ----------------------------------------------------------------------------
 * Introduction
 * ----------------------------------------------------------------------------
 *
 * Use this to know if the player is north, south, east or west from the event.
 *
 * ----------------------------------------------------------------------------
 * Script calls
 * ----------------------------------------------------------------------------
 *
 * this.playerVsThisEventDistance(distance) === true/false;
 * this.playerVsThisEventPosition() === 'string';   
 * this.playerVsEventPosition(eventId) === 'string';
 *     
 *  Use this in a conditional branch along with the possible outcomes:
 *      - 'center'
 *      - 'up'
 *      - 'down'
 *      - 'left'
 *      - 'right'
 *      - 'up-left'
 *      - 'up-right'
 *      - 'down-left'
 *      - 'down-right'
 * 
 * example:
 *  this.playerVsThisEventPosition() === 'left'; -> checks if the player is
 *                                  on the left of this event
 *  this.playerVsThisEventDistance(7) === true -> checks if the player is
 *                                  withing 7 tiles of the event.
 * 
 * ----------------------------------------------------------------------------
 * Changelog
 * ----------------------------------------------------------------------------
 * 
 * Version 1.00:
 * - Finished Plugin!
 * 
 * Version 1.02:
 * - Added function this.playerVsThisEventDistance(distance);
 * 
 * Version 1.03:
 * - this.playerVsThisEventDistance(distance); now checks in a circle (it checked in a square before)!
 * 
 * Version 1.05:
 * - if you indicate 0 for one of eventVsEventDistance's events, it will select the player.
 */
//----------------------------------------------------------------------------

(function () {

    Game_Interpreter.prototype.playerVsThisEventPosition = function() {
        var event = $gameMap.event(this._eventId);
        var eventX = event._x
        var eventY = event._y
        var playerX = $gamePlayer.x;
        var playerY = $gamePlayer.y;
        var distanceX = Math.abs(eventX - playerX);
        var distanceY = Math.abs(eventY - playerY);

        if(distanceX === distanceY) {
            if(distanceX === 0) {
                return 'center';
            }
            return (eventY > playerY ? 'up' : 'down') + '-' + (eventX > playerX ? 'left' : 'right');
        }
        if(distanceX > distanceY) {
            return (eventX > playerX ? 'left' : 'right');
        } else {
            return (eventY > playerY ? 'up' : 'down');
        }
    };

    Game_Interpreter.prototype.playerVsEventPosition = function(eventID) {
        var event = $gameMap.event(eventID);
        var eventX = event._x
        var eventY = event._y
        var playerX = $gamePlayer.x;
        var playerY = $gamePlayer.y;
        var distanceX = Math.abs(eventX - playerX);
        var distanceY = Math.abs(eventY - playerY);

        if(distanceX === distanceY) {
            if(distanceX === 0) {
                return 'center';
            }
            return (eventY > playerY ? 'up' : 'down') + '-' + (eventX > playerX ? 'left' : 'right');
        }
        if(distanceX > distanceY) {
            return (eventX > playerX ? 'left' : 'right');
        } else {
            return (eventY > playerY ? 'up' : 'down');
        }
    };

    Game_Interpreter.prototype.playerVsThisEventDistance = function(distance) {
        var event = $gameMap.event(this._eventId);
        var eventX = event._x
        var eventY = event._y
        var playerX = $gamePlayer.x;
        var playerY = $gamePlayer.y;
        var distanceX = Math.abs(eventX - playerX);
        var distanceY = Math.abs(eventY - playerY);
        var trueDistance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) 
        var trueDistance = Math.ceil(trueDistance)
        var v = $gameVariables._data;
        distance = eval(distance);
        if(trueDistance <= distance) {
            return true;
        } else {
            return false;
        }
    };

    Game_Interpreter.prototype.eventVsEventDistance = function(distance, event1, event2) {
        if (event1 == 0) {
            var Event1 = $gamePlayer;
            var Event1X = $gamePlayer.x;
            var Event1Y = $gamePlayer.y;
        } else {
            var Event1 = $gameMap.event(event1);
            var Event1X = Event1._x;
            var Event1Y = Event1._y;
        }
        if (event2 == 0) {
            var Event2 = $gamePlayer;
            var Event2X = $gamePlayer.x;
            var Event2Y = $gamePlayer.y;
        } else {
            var Event2 = $gameMap.event(event2);
            var Event2X = Event2._x;
            var Event2Y = Event2._y;
        }
        var distanceX = Math.abs(Event1X - Event2X);
        var distanceY = Math.abs(Event1Y - Event2Y);
        var trueDistance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) 
        var trueDistance = Math.ceil(trueDistance)
        var v = $gameVariables._data;
        distance = eval(distance);
        if(trueDistance <= distance) {
            return true;
        } else {
            return false;
        }
    };


    
})();


