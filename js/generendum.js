$(document).ready(function(){
	"use strict";
	function getOptions() {
		var action;
		var actions = [
			[ "Сохранение", "в составе" ],
			[ "Включение", "в состав" ],
			[ "Исключение", "из состава" ],
			[ "Отключение", "от" ],
			[ "Федерализация", "независимо от" ]
		];
		var names = [ "Украины", "т.н. ДНР", "РФ", "Днепропетровской области", "Януковича", "Крыма", "трубы", "олихархов", "власти криминала", "Дамбаса", "интернета" ];
		var ofThe = [ "Украины", "т.н. ДНР", "РФ", "Днепропетровской области", "ЕС", "трубы", "интернета", "Русского Мира", "Крыма", "обстоятельств", "олихархов", "власти криминала", "Дамбаса" ];
		var creations = [ "Провозглашение", "Похищение", "Назначение", "Облучение", "Объявление", "Признание", "Отвращение" ];
		var beingThe = [ "независимым государством", "наследником СССР", "агентом ЦРУ", "пособником терроризма", "невиновным", "столицей Украины", "жертвой обстоятельств" ];
		// Math.random().toString(36).substr(2);	
		function getName() {
			var name = names.splice( idx = Math.floor( Math.random() * names.length ), 1 );
			var idx = ofThe.indexOf( name );
			ofThe.splice( idx, 1 );
			return name;
		}
		function getAction() {
			action = actions.splice( Math.floor( Math.random() * actions.length ), 1 )[0];
			return action[0] + " " + name;
		}
		function getInThe() {
			return action[1];
		}
		function getOfThe() {
			return ofThe.splice( Math.floor( Math.random() * ofThe.length ), 1 );
		}
		function getBeingThe() {
			return beingThe.splice( Math.floor( Math.random() * beingThe.length ), 1 );
		}
		function getCreation() {
			return creations.splice( Math.floor( Math.random() * creations.length ), 1 ) + " " + name;
		}

		var name = getName();

		$(".opt1").html( "1. " + getAction() + " " + getInThe() + " " + getOfThe() );
		$(".opt2").html( "2. " + getAction() + " " + getInThe() + " " + getOfThe() );
		$(".opt3").html( "3. " + getCreation() + " " + getBeingThe() );
	}

	var $generate = $(".btn-generate");
	var $result = $(".options-wrapper");

	$generate.bind( "click", function(){
		getOptions();
		$result.show();
	});
});