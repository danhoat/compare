<?php

namespace QMS4\Fetch;

use QMS4\Item\Post\Schedule;
use QMS4\Param\Param;
use QMS4\PostMeta\EventDate;
use QMS4\PostMeta\ParentEventId;


class EventTimetable
{
	/** @var    \WP_Post */
	private $wp_post;

	/**
	 * @param    int    $post_id
	 */
	public function __construct( string $post_id )
	{
		$this->wp_post = get_post( $post_id );
	}

	// ====================================================================== //

	/**
	 * @param    string[]    $dates
	 */
	public function fetch( array $dates = array() )
	{
		$wp_posts = $this->query( $dates );

		$param = new Param( array() );

		$schedules = array();
		foreach ( $wp_posts as $wp_post ) {
			$schedules[] = new Schedule( $wp_post, $param );
		}

		return $schedules;
	}

	/**
	 * @param    string[]    $dates
	 * @return    \WP_Post[]
	 */
	private function query( array $dates ): array
	{
		$schedule_post_type = "{$this->wp_post->post_type}__schedule";

		$meta_query = array(
			array(
				'key' => ParentEventId::KEY,
				'value' => $this->wp_post->ID,
			),
		);

		if ( ! empty( $dates ) ) {
			$meta_query[] = array(
				'key' => EventDate::KEY,
				'value' => $dates,
				'compare' => 'IN',
				'type' => 'DATE',
			);
		}

		$query = new WP_Query( array(
			'post_type' => $schedule_post_type,
			'post_status' => 'publish',
			'orderby' => 'meta_value_date',
			'meta_key' => EventDate::KEY,
			'order' => 'ASC',
			'posts_per_page' => 999999,
			'meta_query' => $meta_query,
		) );

		return $query->posts;
	}
}
