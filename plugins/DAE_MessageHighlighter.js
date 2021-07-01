//-----------------------------------------------------------------------------
//        DaedraKyne Plugins - Message Highlighter
//                    -------
//              MessageHighlighter.js
//       Work email: dohvacore@gmail.com
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
 /*:
 * @plugindesc v1.0 Message Highlighter
 * 
 * @author DaedraKyne
 * 
 * 
 * @param === MAIN PARAMETERS ===
 * @default
 * 
 * @param Start-Highlight escape character
 * @default H
 * @desc The character to enter in your game when you want to start highlighting.
 *
 * @param End-Highlight escape character
 * @default E
 * @desc The character to enter in your game when you want to end highlighting.
 *
 * @param Highlight colors
 * @type struct<Highlight>[]
 * @default []
 * @desc The list of highlight colors usable. Can be as long as you need it to be.
 * 
 * 
 * 
 * 
 * @help
 * 
 * Use \H[c] to start highlighting! (replace c with the id of the color)
 * Use \E to stop highlighting!
 * Set as many id's as you want in the plugin parameters!
 * Each id needs to be unique or it will be overwritten.
 * ----------------------------------------------------------------------------
 * Introduction
 * ----------------------------------------------------------------------------
 * Requires MV 1.6.1 or higher
 * ----------------------------------------------------------------------------
 * Changelog
 * ----------------------------------------------------------------------------
 * 
 * Version 1.0:
 */

/*~struct~Highlight:
 * @param id
 * @type num
 * @default 0
 * @desc The id of the highlight color. Can be any int.
 * 
 * @param color
 * @default #ffffff
 * @desc The color of the highlight, in hex.
 */






 var Imported = Imported || {};
 Imported.MessageHighlighter = true;
 
 var MessageHighlighter = MessageHighlighter || {};
 
 var parameters = PluginManager.parameters('DAE_MessageHighlighter');
 var $startChar = parameters["Start-Highlight escape character"];
 var $endChar = parameters["End-Highlight escape character"];
 var $old_highlight = JSON.parse(parameters["Highlight colors"]);
 var $highlights = new Map();
 $old_highlight.forEach(element => {
     element = JSON.parse(element);
     $highlights.set(Number(element.id), element.color);
 });
 
 
 
 //fidless change positions
 
 (function(_) {
 
var _0x380a=['fontSize','591071iQsdlg','1412232VpsDyG','421VMbZbu','5ITcSsY','313DtpUBf','obtainEscapeParam','145547OBQIwl','endHighlight','1394507frwhfH','_context','7217VHTgRt','call','contents','highlighting','_drawTextOutline','processEscapeCharacter','prototype','683fQKKJd','3391ljQLYe','18vJALib','changeHighlight','highlightColor'];var _0x39e940=_0x4eff;(function(_0x3eb4cd,_0x1728a2){var _0x3dd9d4=_0x4eff;while(!![]){try{var _0x31c6b4=-parseInt(_0x3dd9d4(0xda))*parseInt(_0x3dd9d4(0xca))+parseInt(_0x3dd9d4(0xc8))+-parseInt(_0x3dd9d4(0xd0))+parseInt(_0x3dd9d4(0xcb))*-parseInt(_0x3dd9d4(0xce))+parseInt(_0x3dd9d4(0xd9))*parseInt(_0x3dd9d4(0xdb))+parseInt(_0x3dd9d4(0xc9))+-parseInt(_0x3dd9d4(0xd2))*-parseInt(_0x3dd9d4(0xcc));if(_0x31c6b4===_0x1728a2)break;else _0x3eb4cd['push'](_0x3eb4cd['shift']());}catch(_0x2a4939){_0x3eb4cd['push'](_0x3eb4cd['shift']());}}}(_0x380a,0xb0eb9));var _btmp_drawTextOutline=Bitmap['prototype']['_drawTextOutline'];Bitmap['prototype'][_0x39e940(0xd6)]=function(_0x2609e1,_0x18ef57,_0x11e9a1,_0x2dc15e){var _0x49f58d=_0x39e940;if(this[_0x49f58d(0xd5)]){var _0x1a01a=this[_0x49f58d(0xd1)],_0x5ba113=this[_0x49f58d(0xc6)];_0x1a01a['fillStyle']=_0x5ba113,_0x1a01a['fillRect'](_0x18ef57,_0x11e9a1-this['fontSize'],_0x2dc15e,this[_0x49f58d(0xc7)]+this[_0x49f58d(0xc7)]/0x2);}_btmp_drawTextOutline[_0x49f58d(0xd3)](this,_0x2609e1,_0x18ef57,_0x11e9a1,_0x2dc15e);};var winBase_processEscapeCharacter=Window_Base[_0x39e940(0xd8)]['processEscapeCharacter'];function _0x4eff(_0x27d984,_0x5cc876){return _0x4eff=function(_0x380a0b,_0x4eff9){_0x380a0b=_0x380a0b-0xc6;var _0x554f76=_0x380a[_0x380a0b];return _0x554f76;},_0x4eff(_0x27d984,_0x5cc876);}Window_Base[_0x39e940(0xd8)][_0x39e940(0xd7)]=function(_0x1f35ab,_0x368f6c){var _0x2b3cdb=_0x39e940;switch(_0x1f35ab){case $startChar:this[_0x2b3cdb(0xdc)](this[_0x2b3cdb(0xcd)](_0x368f6c));break;case $endChar:this['endHighlight']();break;default:winBase_processEscapeCharacter['call'](this,_0x1f35ab,_0x368f6c);break;}},Window_Base['prototype'][_0x39e940(0xdc)]=function(_0x41aa57){var _0x3c8cf5=_0x39e940;this['contents'][_0x3c8cf5(0xd5)]=!![],this['contents'][_0x3c8cf5(0xc6)]=$highlights['get'](_0x41aa57);},Window_Base[_0x39e940(0xd8)][_0x39e940(0xcf)]=function(){var _0x14dc46=_0x39e940;this[_0x14dc46(0xd4)][_0x14dc46(0xd5)]=![];};

 })(); 