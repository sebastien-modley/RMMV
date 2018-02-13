//-----------------------------------------------------------------------------
// DaedraKyne Plugins - Player Rotate - Makes the player rotate instead of move
//                    -------
//                  PlayerRotate.js
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
 /*:
 * @plugindesc v1.0
 * 
 * @author DaedraKyne
 * 
 * @param Key mode
 * @desc Determine if you want the player to rotate while the key is prossed, or if you want the key to toggle the rotation.
 * @type select
 * @option Hold
 * @option Toggle
 * @default Toggle
 * 
 * @param Block keycode
 * @desc The code of the key you want to use to block the characters. Find the keycode you want at www.keycode.info!
 * @default 82
 *
 * @help
 * 
 * Instructions: Assign a mode and a key to block the player, making him only able to rotate on himself.
 * 
//----------------------------------------------------------------------------
*/

(function() {

    var params = PluginManager.parameters("PlayerRotate");
    var Rotate = params["Key mode"];
    var KeyCode = params["Block keycode"];
    var stop = false;

    Input.keyMapper[Number(KeyCode)] = 'rotate';    
    
    var Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        if (Rotate == "Toggle") {
            if(Input.isTriggered('rotate')) {
                stop = !stop;
            }
        } else if(Rotate == "Hold") {
            if(Input.isPressed('rotate')) {
                stop = true;
            } else {
                stop = false;
            }
        }
        Scene_Map_update.call(this);
    };

    Game_Player_isMapPassable = Game_Player.prototype.isMapPassable;
    Game_Player.prototype.isMapPassable = function(x, y, d) {
        if(stop) {return false}
        return Game_Player_isMapPassable.call(this, x, y, d);
    };

})()
