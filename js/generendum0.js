// т.н. ДНР

// сохранение
// т.н. ДНР
// в составе
// Украины

// включение 
// т.н. ДНР
// в состав
// России

// провозглашение
// т.н. ДНР
// независимым
// государством
function getOptions() {

	"use strict";

	var actions = [ "Сохранение", "Включение" ];
	var creations = [ "Провозглашение", "Похищение", "Оповещение" ];
	var names = [ "Украины", "т.н. ДНР", "России", "Днепропетровской области", "Януковича" ];
	var inThe = [ "в составе", "в состав" ];
	var beingThe = [ "независимым государством", "тратой времени", "агентом ЦРУ" ];
	var ofthe = [ "Украины", "т.н. ДНР", "России", "Днепропетровской области", "ЕС", "Вселенной", "подсудимых", "Русского Мира", "Крыма" ];
	// Math.random().toString(36).substr(2);
	
	function getAction() {
		return actions.splice( 0, 1 ) + " " + name;
	}

	function getName() {
		var idx = Math.floor( Math.random() * names.length );
		var name = names.splice( idx, 1 );
		var idxs = ofthe.indexOf( name );
		ofthe.splice( idxs, 1 );
		return name;
	}

	function getOfThe() {
		var idx = Math.floor( Math.random() * ofthe.length );
		return ofthe.splice( idx, 1 );
	}


	function getInThe() {
		return inThe.splice( 0, 1 );
	}

	function getBeingThe() {
		var idx = Math.floor( Math.random() * beingThe.length );
		return beingThe.splice( idx, 1 );
	}

	function getCreation() {
		var idx = Math.floor( Math.random() * creations.length );
		return creations.splice( idx, 1 ) + " " + name;
	}

	var name = getName();

	var r = {
		keep: {
			action: getAction(),
			inthe: getInThe(),
			ofthe: getOfThe()
		},
		separate: {
			action: getAction(),
			inthe: getInThe(),
			ofthe: getOfThe()
		},
		indie:{
			action: getCreation(),
			beingThe: getBeingThe()
		}
	};

	var optionA = r.keep.action + " " + r.keep.inthe + " " + r.keep.ofthe;
	var optionB = r.separate.action + " " + r.separate.inthe + " " + r.separate.ofthe;
	var optionC = r.indie.action + " " + r.indie.beingThe + " ";

	console.log( optionA );
	console.log( optionB );
	console.log( optionC );
}

getOptions();

0