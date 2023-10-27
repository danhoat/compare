<?php

namespace QMS4\TaxonomyMeta\Factory;

use QMS4\TaxonomyMeta\TaxonomyMeta;


class FromPostType
{
	/**
	 * @return    TaxonomyMeta[]
	 */
	public function create( string $post_type ): array
	{
		$rows = $this->fetch( $post_type );

		$count = $this->count( $rows );
		$taxonomies = $this->format( $count, $rows );

		$taxonomy_metas = array();
		foreach ( $taxonomies as $taxonomy ) {
			$taxonomy_metas[] = TaxonomyMeta::from_array( $post_type, $taxonomy );
		}

		return $taxonomy_metas;
	}

	// ====================================================================== //

	/**
	 * @param    string    $post_type
	 * @return    object[]
	 */
	private function fetch( string $post_type ): array
	{
		global $wpdb;

		$sql = "
			SELECT
				`ID`
				,PM2.`meta_key` AS 'key'
				,PM2.`meta_value` AS 'value'
			FROM {$wpdb->posts} AS P
			INNER JOIN {$wpdb->postmeta} AS PM1
				ON
					1
					AND P.`ID` = PM1.`post_id`
					AND PM1.`meta_key` = 'qms4__post_type__name'
					AND PM1.`meta_value` = %s
			INNER JOIN {$wpdb->postmeta} AS PM2
				ON
					1
					AND P.`ID` = PM2.`post_id`
					AND PM2.`meta_key` LIKE 'qms4__post_type__taxonomies%'
			WHERE
				1
				AND P.`post_type` = 'qms4'
				AND P.`post_status` = 'publish'
		";

		$stmt = $wpdb->prepare( $sql, $post_type );
		return $wpdb->get_results( $stmt );
	}

	/**
	 * @param    object[]    $rows
	 * @return    int
	 */
	private function count( array $rows ): int
	{
		if ( empty( $rows ) ) { return 0; }

		foreach ( $rows as $row ) {
			if ( $row->key == 'qms4__post_type__taxonomies' ) {
				return (int) $row->value;
			}
		}

		throw new \RuntimeException();
	}

	/**
	 * @param    int    $count
	 * @param    object[]    $rows
	 * @return    array[]
	 */
	private function format( int $count, array $rows ): array
	{
		$regexp = '/^qms4__post_type__taxonomies_(?P<index>\d+)_(?P<key>.+)$/';

		$taxonomies = array_fill( 0, $count, array( 'query' => '' ) );
		foreach ( $rows as $row ) {
			if ( ! preg_match( $regexp, $row->key, $matches ) ) { continue; }

			$index = $matches[ 'index' ];
			$key = $matches[ 'key' ];

			$taxonomies[ $index ][ $key ] = $row->value;
		}

		return $taxonomies;
	}
}
