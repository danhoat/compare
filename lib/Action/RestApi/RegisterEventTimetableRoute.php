<?php

namespace QMS4\Action\RestApi;

use QMS4\CalendarMonth\CalendarTerm;
use QMS4\CalendarMonth\DateClassFormatterFactory;
use QMS4\CalendarMonth\DayOfWeek;
use QMS4\CalendarMonth\ScheduleFormatter;
use QMS4\Fetch\EventCalendar as FetchEventCalendar;


class RegisterEventTimetableRoute
{
	public function __invoke()
	{
		register_rest_route(
			'qms4/v1',
			'/event/timetable/(?P<post_id>[0-9]+)/',
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * @param    \WP_REST_Request    $request
	 * @return    \WP_REST_Response|\WP_Error
	 */
	public function get( \WP_REST_Request $request )
	{
		$param = $request->get_params();

		$validation_result = $this->validate( $param );
		if ( is_wp_error( $validation_result ) ) {
			return $validation_result;
		}

		$post_id = $param[ 'post_id' ];

		$start_of_week = DayOfWeek::from_week( get_option( 'start_of_week', DayOfWeek::MONDAY ) );
		$calendar_term = CalendarTerm::from_year_month( $start_of_week, $year, $month );

		$event_calendar = new FetchEventCalendar( $post_type );
		$calendar_month = $event_calendar->fetch( $calendar_term );

		$factory = new DateClassFormatterFactory( 'qms4__block__event-calendar__body-cell--' );
		$date_class_formatter = $factory->create( $post_type, $calendar_term );

		$schedule_formatter = new ScheduleFormatter();

		return new \WP_REST_Response(
			$calendar_month->to_array( $date_class_formatter, $schedule_formatter ),
			200
		);
	}

	/**
	 * @param    array<string,mixed>    $param
	 * @return    true|\WP_Error
	 */
	private function validate( array $param )
	{
		$post_id = $param[ 'post_id' ];

		if ( get_post_status( $param[ 'post_id' ] ) === 'publish' ) {
			return new \WP_Error(
				'post_not_found',
				"Post not found: \$post_id: {$param['post_id']}",
				array( 'status' => 400 )
			);
		}

		return true;
	}
}
