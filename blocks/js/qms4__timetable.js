console.log( 'qms4__timetable.js' );

jQuery( function ( $ ) {
	$( './js__qms4__block__timetable' ).each( function () {
		const $unit = $( this );
		const $dates = $unit.find( '.js__qms4__block__timetable__dates' );
		const $timetable = $unit.find( '.qms4__block__timetable__timetable' );
		const $prev = $unit.find( 'js__qms4__block__timetable__button-prev' );
		const $next = $unit.find( 'js__qms4__block__timetable__button-next' );

		const endpoint = $unit.data( 'endpoint' );
	} );
} );
