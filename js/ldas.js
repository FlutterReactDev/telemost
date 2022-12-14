jQuery( document ).ready( function( $ ) {
	//Калькулятор страницы Тарифы
	let support = {
		1 : 50000,
		20 : 100000,
		50: 200000,
		100 : 300000,
	};
	
	let mouth = {
		9 : 4800,
		14 : 6360,
		19 : 7800,
		24 : 9000,
		29 : 10800,
		34 : 12600,
		39 : 14400,
		44 : 16200,
		49 : 19440,
		54 : 20350,
		59 : 22000,
		64 : 24050,
		69 : 25900,
		74 : 27750,
		79 : 29600,
		84 : 31450,
		89 : 33300,
		94 : 35150,
		99 : 37000,
		104 : 38850,
		109 : 40700,
		114 : 42250,
		119 : 44400,
		124 : 46250,
		129 : 48100,
		134 : 49950,
		139 : 51800,
		144 : 53650,
		149 : 55500,
		154 : 57350,
		159 : 59200,
		164 : 61050,
		169 : 62900,
		174 : 64750,
		179 : 66600,
		184 : 68450,
		189 : 70300,
		194 : 72150,
		199 : 74000,
	};
	let mouth6 = {
		9 : 4080,
		14 : 5406,
		19 : 6630,
		24 :7650,
		29 : 9180,
		34 : 12240,
		39 : 13770,
		44 : 15300,
		49 : 18360,
		54 : 19250,
		59 : 21000,
		64 : 22780,
		69 : 24500,
		74 : 26250,
		79 : 28000,
		84 : 29750,
		89 : 31500,
		94 : 33250,
		99 : 35000,
		104 : 36750,
		109 : 38500,
		114 : 40250,
		119 : 42000,
		124 : 43750,
		129 : 45500,
		134 : 47250,
		139 : 49000,
		144 : 50750,
		149 : 52500,
		154 : 54250,
		159 : 56000,
		164 : 57750,
		169 : 59500,
		174 : 61250,
		179 : 63000,
		184 : 64750,
		189 : 66500,
		194 : 68250,
		199 : 70000,

	};
	let mouth12 = {
		9 : 3600,
		14 : 4770,
		19 : 5850,
		24 : 6750,
		29 : 8100,
		34 : 10800,
		39 : 12150,
		44 : 13500,
		49 : 16200,
		54 : 18315,
		59 : 19980,
		64 : 21645,
		69 : 23310,
		74 : 24975,
		79 : 26640,
		84 : 28305,
		89 : 29970,
		94 : 31635,
		99 : 33300,
		104 : 34650,
		109 : 36300,
		114 : 37950,
		119 : 39600,
		124 : 41250,
		129 : 42900,
		134 : 44500,
		139 : 46200,
		144 : 47850,
		149 : 49500,
		154 : 51150,
		159 : 52800,
		164 : 54450,
		169 : 56100,
		174 : 57750,
		179 : 59400,
		184 : 61050,
		189 : 62700,
		194 : 64350,
		199 : 66000,

	};


	let wmouth = {
		99 : 15000,
		199 : 20000,
		//249 : 23750,
		299 : 28500,
	};
	let wmouth6 = {
		99 : 13500,
		199 : 18000,
		//249 : 22500,
		299 : 27000,

	};
	let wmouth12 = {
		99 : 12750,
		199 : 17000,
		//249 : 20000,
		299 : 24000,
	};

	let webinar_select = {
		0 : {
			1 : 'Вебинар'
		},
		30 : {
			1 : 'Добавить вебинар',
			100 : 'Вебинар до 100 участников'
		},
		50 : {
			1 : 'Добавить вебинар',
			100 : 'Вебинар до 100 участников',
			200 : 'Вебинар до 200 участников'
		}
	};

	let rates = {
//бессрочный вебинар
		32 : {
			min 	: 0,
			max	: 300,
			price 	: {
				100 : 300000,
				200 : 500000,
				300 : 600000,
			}
		},
//годовой вебинар
		31 : {
			min 	: 0,
			max	: 300,
			price 	: {
				100 : 200000,
				200 : 320000,
				300 : 360000,
			}
		},

		30 : {
			min 	: 100,
			max	: 300,
			price 	: {
				100 : 15000,
				300 : 24000,
			}
		},

		29 : {
			min 	: 10,
			max 	: 200,
			price 	: {
				10 : 3000,
				15 : 3975,
				20 : 4875,
				25 : 5625,
				30 : 6750,
				35 : 7875,
				40 : 9000,
				45 : 10125,
				50 : 11250,
			}
		},
		28 : {
			min 	: 3,
			max 	: 200,
			web : {
				1 : 0,
				100 : 100000,
				200 : 170000
			},
//Годовая конференция
			price 	: {
				3 : 24000,
				4 : 32000,
				5 : 40000,
				6 : 48000,
				7 : 56000,
				8 : 64000,
				9 : 72000,
				10 : 75000,
				11 : 82500,
				12 : 90000,
				13 : 97500,
				14 : 105000,
				15 : 112000,
				16 : 120000,
				17 : 127500,
				18 : 135000,
				19 : 142500,
				20 : 146000,
				21 : 153300,
				22 : 160600,
				23 : 167900,
				24 : 175200,
				25 : 182500,
				26 : 189800,
				27 : 197100,
				28 : 204400,
				29 : 211700,
				30 : 216000,
				31 : 223200,
				32 : 230400,
				33 : 237600,
				34 : 244800,
				35 : 252000,
				36 : 259200,
				37 : 266400,
				38 : 273600,
				39 : 280800,
				40 : 288000,
				41 : 289050,
				42 : 296100,
				43 : 303150,
				44 : 310200,
				45 : 317250,
				46 : 324300,
				47 : 331350,
				48 : 338400,
				49 : 345450,
				50 : 352500,
				51 : 359550,
				52 : 366600,
				53 : 373650,
				54 : 380700,
				55 : 387750,
				56 : 394800,
				57 : 401850,
				58 : 408900,
				59 : 415950,
				60 : 417000,
				61 : 423950,
				62 : 430900,
				63 : 437850,
				64 : 444800,
				65 : 451750,
				66 : 458700,
				67 : 465650,
				68 : 472600,
				69 : 479550,
				70 : 486500,
				71 : 493450,
				72 : 500400,
				73 : 507350,
				74 : 514300,
				75 : 521250,
				76 : 528200,
				77 : 535150,
				78 : 542100,
				79 : 549050,
				80 : 552000,
				81 : 558900,
				82 : 565800,
				83 : 572800,
				84 : 579600,
				85 : 586500,
				86 : 593400,
				87 : 600300,
				88 : 607200,
				89 : 614100,
				90 : 621000,
				91 : 623350,
				92 : 630200,
				93 : 637050,
				94 : 643900,
				95 : 650750,
				96 : 657600,
				97 : 664450,
				98 : 671300,
				99 : 678150,
				100 : 680000,
				101 : 686800,
				102 : 693600,
				103 : 700400,
				104 : 707200,
				105 : 714000,
				106 : 720800,
				107 : 727600,
				108 : 734400,
				109 : 741200,
				110 : 748000,
				111 : 754800,
				112 : 761600,
				113 : 768400,
				114 : 775200,
				115 : 782000,
				116 : 788800,
				117 : 795600,
				118 : 802400,
				119 : 809200,
				120: 816000,
				121: 816750,
				122: 823500,
				123: 830250,
				124: 837000,
				125: 843750,
				126: 850500,
				127: 857250,
				128: 864000,
				129: 870750,
				130: 877500,
				131: 884250,
				132: 891000,
				133: 897750,
				134: 904500,
				135: 911250,
				136: 918000,
				137: 924750,
				138: 931500,
				139: 934080,
				140: 940800,
				141: 947520,
				142: 954240,
				143: 960960,
				144: 947680,
				145: 974400,
				146: 981120,
				147: 987840,
				148: 994560,
				149: 1001280,
				150: 1008000,
				151: 1011700,
				152: 1018400,
				153: 1025100,
				154: 1031800,
				155: 1038500,
				156: 1045200,
				157: 1051900,
				158: 1058600,
				159: 1065300,
				160: 1070400,
				161: 1077090,
				162: 1083780,
				163: 1090470,
				164: 1097160,
				165: 1103850,
				166: 1110540,
				167: 1117230,
				168: 1123920,
				169: 1130610,
				170: 1137300,
				171: 1138860,
				172: 1148960,
				173: 1155640,
				174: 1158840,
				175: 1169000,
				176: 1175680,
				177: 1182360,
				178: 1189040,
				179: 1195720,
				180: 1202400,
				181: 1209080,
				182: 1215760,
				183: 1222440,
				184: 1229120,
				185: 1235800,
				186: 1242480,
				187: 1249160,
				188: 1255840,
				189: 1262520,
				190: 1269200,
				191: 1275880,
				192: 1282560,
				193: 1289240,
				194: 1295920,
				195: 1302600,
				196: 1309280,
				197: 1315960,
				198: 1322640,
				199: 1329320,
				200: 1336000,
			}
		},
		27 : {
			min 	: 3,
			max 	: 200,
			web : {
				1 : 0,
				100 : 300000,
				200 : 500000
			},
			price 	: {
				3 : 66000,
				4 : 88000,
				5 : 110000,
				6 : 132000,
				7 : 154000,
				8 : 176000,
				9 : 198000,
				10 : 210000,
				11 : 231000,
				12 : 252000,
				13 : 273000,
				14 : 294000,
				15 : 315000,
				16 : 336000,
				17 : 357000,
				18 : 378000,
				19 : 399000,
				20 : 400000,
				21 : 420000,
				22 : 440000,
				23 : 460000,
				24 : 480000,
				25 : 500000,
				26 : 520000,
				27 : 540000,
				28 : 560000,
				29 : 580000,
				30 : 585000,
				31 : 604500,
				32 : 624000,
				33 : 643500,
				34 : 663000,
				35 : 682500,
				36 : 702000,
				37 : 721500,
				38 : 741000,
				39 : 742000,
				40 : 743200,
				41 : 746200,
				42 : 764400,
				43 : 782600,
				44 : 800800,
				45 : 819000,
				46 : 837200,
				47 : 855400,
				48 : 873600,
				49 : 891800,
				50 : 910000,
				51 : 928200,
				52 : 946400,
				53 : 964600,
				54 : 982800,
				55 : 1001000,
				56 : 1019200,
				57 : 1037400,
				58 : 1055600,
				59 : 1073800,
				60 : 1092000,
				61 : 1110200,
				62 : 1128400,
				63 : 1146600,
				64 : 1164800,
				65 : 1183000,
				66 : 1201200,
				67 : 1219400,
				68 : 1237600,
				69 : 1255000,
				70 : 1260000,
				71 : 1278000,
				72 : 1296000,
				73 : 1314000,
				74 : 1332000,
				75 : 1350000,
				76 : 1368000,
				77 : 1386000,
				78 : 1404000,
				79 : 1422000,
				80 : 1440000,
				81 : 1458000,
				82 : 1476000,
				83 : 1494000,
				84 : 1512000,
				85 : 1530000,
				86 : 1548000,
				87 : 1566000,
				88 : 1584000,
				89 : 1602000,
				90 : 1611000,
				91 : 1628900,
				92 : 1648000,
				93 : 1664700,
				94 : 1682600,
				95 : 1700500,
				96 : 1718400,
				97 : 1736300,
				98 : 1754200,
				99 : 1772100,
				100 : 1790000,
				101: 1792750,
				102: 1810500,
				103: 1828250,
				104: 1846000,
				105: 1863750,
				106: 1881500,
				107: 1899250,
				108: 1917000,
				109: 1934750,
				110: 1947000,
				111: 1964700,
				112: 1982400,
				113: 2000100,
				114: 2017800,
				115: 2035500,
				116: 2053200,
				117: 2070900,
				118: 2088600,
				119: 2106300,
				120: 2124000,
				121: 2141700,
				122: 2159400,
				123: 2177100,
				124: 2194800,
				125: 2212500,
				126: 2230200,
				127: 2247900,
				128: 2265600,
				129: 2283300,
				130: 2301000,
				131: 2318700,
				132: 2336400,
				133: 2354100,
				134: 2371800,
				135: 2389500,
				136: 2407200,
				137: 2424900,
				138: 2442600,
				139: 2460300,
				140: 2478000,
				141: 2495700,
				142: 2513400,
				143: 2531100,
				144: 2548800,
				145: 2566500,
				146: 2584200,
				147: 2601900,
				148: 2619600,
				149: 2637300,
				150: 2640000,
				151: 2642500,
				152: 2660000,
				153: 2677500,
				154: 2695000,
				155: 2712500,
				156: 2730000,
				157: 2747500,
				158: 2765000,
				159: 2782500,
				160: 2800000,
				161: 2817500,
				162: 2835000,
				163: 2852500,
				164: 2870000,
				165: 2887500,
				166: 2905000,
				167: 2922500,
				168: 2940000,
				169: 2957500,
				170: 2975000,
				171: 2992500,
				172: 3010000,
				173: 3027500,
				174: 3045000,
				175: 3062500,
				176: 3080000,
				177: 3097500,
				178: 3115000,
				179: 3132500,
				180: 3150000,
				181: 3167500,
				182: 3185000,
				183: 3202500,
				184: 3220000,
				185: 3237500,
				186: 3255000,
				187: 3272500,
				188: 3290000,
				189: 3307500,
				190: 3325000,
				191: 3342500,
				192: 3360000,
				193: 3377500,
				194: 3395000,
				195: 3412500,
				196: 3430000,
				197: 3447500,
				198: 3465000,
				199: 3482500,
				200: 3500000,
			}
		},
	};

	//Считаем результат при изменении количества участников
	$( document ).on( 'change', '#rates-table .calculator input', function ( ) {
		calc_totals($(this));
	} );

	//Управляем переключателями + / -
	$( document ).on( 'click', '#rates-table .calculator span', function ( ) {
		var rate_id = $( this ).parent(  ).attr( 'data-id' );
		var input = $( '#rates-table .calculator[data-id="' + rate_id + '"] input' );
		if ( $( this ).attr( 'uk-icon' ) == 'icon: plus' ) {
			//Только 10 и 20 для Облачный
			if (rate_id == 29) {
				var value = parseInt( input.val(  ) ) + 5;
			} else {
				var value = parseInt( input.val(  ) ) + 1;
			}

	//Только 100 и 200 для Вебинар
			if (rate_id == 32) {
				var value = parseInt( input.val(  ) ) + 100;}

			if (rate_id == 31) {
				var value = parseInt( input.val(  ) ) + 100;}

			if (rate_id == 30) {
				var value = parseInt( input.val(  ) ) + 100;}

		} else {
			//Только 10 и 20 для Облачный
			if (rate_id == 29) {
				var value = parseInt( input.val(  ) ) - 5;
			} else {
				var value = parseInt( input.val(  ) ) - 1;
			}
	
	//Только 100 и 200 для Вебинар^M
			if (rate_id == 32) {
				var value = parseInt( input.val(  ) ) - 100;
			}
			if (rate_id == 31) {
				var value = parseInt( input.val(  ) ) - 100;
			}
			if (rate_id == 30) {
				var value = parseInt( input.val(  ) ) - 100;
			}

		}
		input.val( value );
		input.change(  );
	})




	//Считаем результат при изменении вебинара
	$( document ).on( 'change', '#rates-table .advanced-support, #rates-table .webinar, #rates-table .wbnr, #rates-table .mouth, #rates-table .mouth6, #rates-table .mouth12', function ( ) {
		calc_totals( $( '#rates-table .calculator[data-id="' + $( this ).attr( 'data-id' ) + '"] input' ), true );
	})


///////////WEBINAR_NEW
	$( document ).on( 'change', '#rates-table .advanced-support, #rates-table .webinar, #rates-table .wbnr, #rates-table .wmouth, #rates-table .wmouth6, #rates-table .wmouth12', function ( ) {
		calc_totals( $( '#rates-table .calculator[data-id="' + $( this ).attr( 'data-id' ) + '"] input' ), true );
	})

///////////////////


	/**
	 * calc_totals function.
	 * Считаем итоговую сумму за тариф
	 * @param Object element - input, который меняется
	 * @param bool is_select (default: false) - вызывается ли функция при изменении вебинара
	 */
	function calc_totals( element, is_select = false ){
		var rate_id = element.parent(  ).attr( 'data-id' );
		var value = parseInt( element.val(  ) );


		//Вебинар
		if (value > 0 && value < 30 ){
			$select_values = webinar_select[0];
		} else if ( value >= 30 && value < 50 ) {
			$select_values = webinar_select[30];
		} else if ( value >= 50 ) {
			$select_values = webinar_select[50];
		}

		$select = [];

		$.each($select_values,function(index,val){

			$select.push('<option value="' + index + '">' + val + '</option>');

		})
		if (rate_id != 29 && !is_select){

			var select_container = $('select.webinar[data-id="' + rate_id + '"]');
			if ( $select.length <= 1 ){
				select_container.attr('disabled','disabled');
			} else {
				select_container.removeAttr('disabled');
			}
			select_container.html($select.join(''));

		}

		//Облачный только 10 или 20
		/*if ( rate_id == 29 && value < 15 ){
			value = 10;
		} else if ( rate_id == 29 && value >= 15 ) {
			value = 20;
		}*/
		var container = element.parent(  );
		container.find( '.disabled' ).removeClass( 'disabled' );
		if ($.isNumeric(value) == false) {
			element.val( rates[rate_id].min );
			element.change(  );
			return;
		}
		//Убираем кнопку -, если достигли минимума и устанавливаем минимальное возможное значение
		if ( value <= rates[rate_id].min ) {
			element.val( rates[rate_id].min );
			container.find( '[uk-icon="icon: minus"]' ).addClass( 'disabled' );
			value = rates[rate_id].min;
		}
		//Убираем кнопку +, если достигли максимума и устанавливаем максимальное возможное значение
		if ( value >= rates[rate_id].max ) {
			element.val( rates[rate_id].max );
			container.find( '[uk-icon="icon: plus"]' ).addClass( 'disabled' );
			value = rates[rate_id].max;
		}
		var total = rates[rate_id].price[value];
		//Если установлена галочка "Расширенная поддержка"
		
		if ( $( '.advanced-support[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( support, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total + parseInt( prepend );
			support = support;
			$( '#rates-table .tech[data-id="' + rate_id + '"] h4' ).text('включая тех. поддержку ' + parseInt( prepend ) + ' руб.' );
		}

		if ( $( '.mouth[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( mouth, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}

		if ( $( '.mouth6[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( mouth6, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}
		
		if ( $( '.mouth12[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( mouth12, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}
		


//////////WEBINAR_NEW
		if ( $( '.wmouth[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( wmouth, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}

		if ( $( '.wmouth6[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( wmouth6, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}
		
		if ( $( '.wmouth12[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 0;
			$.each( wmouth12, function( index,val ){
				if ( index < parseInt( value ) ) {
					prepend = val;
				}
			} )


			total = total = parseInt( prepend );
		}
		

////////////////////////////////////






		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.mouth12[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 4125;
			total = total = parseInt( prepend );

		}

		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.mouth6[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			total = total = parseInt( prepend );

		}

		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.mouth[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 5500;
			total = total = parseInt( prepend );

		}

		

////////WEBINAR_NEW
		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.wmouth12[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 4125;
			total = total = parseInt( prepend );

		}

		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.wmouth6[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 4675;
			total = total = parseInt( prepend );

		}

		if ( $( '.wbnr[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true && $( '.wmouth[data-id="' + rate_id + '"]' ).prop( 'checked' ) == true ){
			var prepend = 5500;
			total = total = parseInt( prepend );

		}

		
/////////////////////////////






		//Если выбрали вебинар
		var webinar = 0;
		if (typeof $( '.webinar[data-id="' + rate_id + '"]' ).val(  ) !== 'undefined') {
			webinar = rates[rate_id].web[parseInt($( '.webinar[data-id="' + rate_id + '"]' ).val(  ))];
		}
		total = total + webinar;
		$( '#rates-table .total-price[data-id="' + rate_id + '"] h3' ).text( total.toLocaleString('ru-RU') + ' руб.' );
	}

	//Передаём значения  в форму
	$( document ).on( 'click','#rates-table button',function(  ){
		var id = $( this ).attr( 'data-id' );
		var form = $( '.wpcf7-form' );
		$( '[name="count-users"]' ).val( $( '.calculator[data-id="' + id + '"] input' ).val(  ) );
		$( '[name="total-price"]' ).val( $( '.total-price[data-id="' + id + '"] h3' ).parent().text(  ) );

		$( '[name="space"]' ).val( $( '#select-op-btn i' ).parent().text(  ) );
///////////////////////////////////////////////////////////////////////////////////////////////////
		$( '[name="space1"]' ).val( $( '#select-op-btn1 i' ).parent().text(  ) );

//////////////////////////////////////////////////////////////////////////////////////////////////
		$( '[name="selected-rate"]' ).val( $( '.rate-title[data-id="' + id + '"]' ).parent().text(  ) );
		if ( $( '.advanced-support[data-id="' + id + '"]' ).prop( 'checked' ) ){
			$( '[name="expanded-support"]' ).val( 'Да' );
		} else {
			$( '[name="expanded-support"]' ).val( 'Нет' );
		}

		if ( $( '.wbnr[data-id="' + id + '"]' ).prop( 'checked' ) ){
			$( '[name="expanded-supportweb"]' ).val( 'Да' );
		} else {
			$( '[name="expanded-supportweb"]' ).val( 'Нет' );
		}


		if ( typeof $( '.webinar[data-id="' + id + '"]' ) !== 'undefined' ) {
			switch( parseInt( $( '.webinar[data-id="' + id + '"]' ).val(  ) ) ){
				case 100 :
					$( '[name="webinar"]' ).val( 'до 100 участников' );
				break;
				case 200 :
					$( '[name="webinar"]' ).val( 'до 200 участников' );
				break;
				default :
					$( '[name="webinar"]' ).val( 'Нет' );
			}
		}
	} )
	//Калькулятор страницы Тарифы Конец

	//Таблица Каналы связи
	$( document ).on( 'change','select#quality, input#members-count', function(){ generateConnectionsTable(  ); } );
	function generateConnectionsTable(  ){
		let connection_channels = {
			defaults : {
				minMembers : 1,
				maxMembers : 100
			},
			quality : {
				1 : {
					member_channel : 512,
					step : 0.5,
					step_text : 'Кбит/с'
				},
				2 : {
					member_channel : 1,
					step : 1,
					step_text : 'Мбит/с'
				},
				3 : {
					member_channel : 2,
					step : 2,
					step_text : 'Мбит/с'
				}
			}
		};
		var quality = $( 'select#quality' ).val(  );
		var members_count = $( 'input#members-count' ).val(  );
		if ( members_count < connection_channels.defaults.minMembers ) {
			$( 'input#members-count' ).val( connection_channels.defaults.minMembers );
			members_count = connection_channels.defaults.minMembers;
		} else if ( members_count > connection_channels.defaults.maxMembers ){
			$( 'input#members-count' ).val( connection_channels.defaults.maxMembers );
			members_count = connection_channels.defaults.maxMembers;
		}
		var server = parseInt( members_count ) * connection_channels.quality[quality].step;
		$( 'input#server' ).val( server + ' Мбит/с' );
		$( 'input#member' ).val( connection_channels.quality[quality].member_channel + ' ' +  connection_channels.quality[quality].step_text );
	}
	//Таблица Каналы связи Конец
} )

/*
jQuery(document).ready(function($){
	if ( typeof $('#rates-table') !== 'undefined' ){
		jQuery('table').stickyTableHeaders({
			fixedOffset: 80,
			cacheHeaderHeight: true,
			//scrollableArea: $('.scrollable-area')
		});
	}
})
*/

jQuery(document).ready(($) => {
		if ( typeof $('#rates-table') === 'undefined' ) return;
           $('#rates-table').stickyTableHeaders({
                       fixedOffset: 0,
                       //scrollableArea: $('.scrollable-area')
          });
           $('.scrollable-area').scroll(() => {
                       let scroll = $('.scrollable-area').scrollLeft() -30;
                       $('.tableFloatingHeaderOriginal').css({ left: -scroll, 'margin-top':'80px' });
           });
           
        $('.wbnr').change(function(){
		    if($(this).is(":checked")) {
		        $('.l_29').addClass('hide');
		    } else {
		        $('.l_29').removeClass('hide');
		    }
		});

		$('.tech1').change(function(){
		    if($(this).is(":checked")) {
		        $('.l_27').addClass('active');
		    } else {
		        $('.l_27').removeClass('active');
		    }
		});
		$('.tech2').change(function(){
		    if($(this).is(":checked")) {
		        $('.l_28').addClass('active2');
		    } else {
		        $('.l_28').removeClass('active2');
		    }
		});

		$('.space input').on('change', function() {
		  $('#select-op-btn i').html(this.checked ? this.value : '');
		});

		$('.space1 input').on('change', function() {
		  $('#select-op-btn1 i').html(this.checked ? this.value : '');
		});

		$('.js-option').on('click', function() {
		  $("#options").toggleClass("js-drop");
		});

		$('.js-option1').on('click', function() {
		  $("#options1").toggleClass("js-drop1");
		});


});


