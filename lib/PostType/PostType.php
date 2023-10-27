<?php

namespace QMS4\PostType;


abstract class PostType
{
	final public function register()
	{
		register_post_type(
			$this->name(),
			array(
				'label' => $this->label(),
				'labels' => $this->labels(),
				'description' => $this->description(),
				'public' => $this->public(),
				'hierarchical' => $this->hierarchical(),
				'exclude_from_search' => $this->exclude_from_search(),
				'publicly_queryable' => $this->publicly_queryable(),
				'show_ui' => $this->show_ui(),
				'show_in_menu' => $this->show_in_menu(),
				'show_in_nav_menus' => $this->show_in_nav_menus(),
				'show_in_admin_bar' => $this->show_in_admin_bar(),
				'show_in_rest' => $this->show_in_rest(),
				'rest_base' => $this->rest_base(),
				'rest_namespace' => $this->rest_namespace(),
				'rest_controller_class' => $this->rest_controller_class(),
				'menu_position' => $this->menu_position(),
				'menu_icon' => $this->menu_icon(),
				'capability_type' => $this->capability_type(),
				'capabilities' => $this->capabilities(),
				'map_meta_cap' => $this->map_meta_cap(),
				'supports' => $this->supports(),
				'register_meta_box_cb' => array( $this, 'register_meta_box_cb' ),
				'has_archive' => $this->has_archive(),
				'rewrite' => $this->rewrite(),
				'query_var' => $this->query_var(),
				'can_export' => $this->can_export(),
				'delete_with_user' => $this->delete_with_user(),
				'template' => $this->template(),
				'template_lock' => $this->template_lock(),
			)
		);
	}

	// ====================================================================== //

	/**
	 * @return    string
	 */
	abstract protected function name(): string;

	/**
	 * @return    string
	 */
	abstract protected function label(): string;

	/**
	 * @return    array<string,string>
	 */
	abstract protected function labels(): array;

	/**
	 * @return    string
	 */
	protected function description(): string
	{
		return '';
	}

	/**
	 * @return    bool
	 */
	protected function public(): bool
	{
		return true;
	}

	/**
	 * @return    bool
	 */
	protected function hierarchical(): bool
	{
		return false;
	}

	/**
	 * @return    bool
	 */
	protected function exclude_from_search(): bool
	{
		return ! $this->public();
	}

	/**
	 * @return    bool
	 */
	protected function publicly_queryable(): bool
	{
		return $this->public();
	}

	/**
	 * @return    bool
	 */
	protected function show_ui(): bool
	{
		return $this->public();
	}

	/**
	 * @return    bool|string
	 */
	protected function show_in_menu()
	{
		return $this->show_ui();
	}

	/**
	 * @return    bool
	 */
	protected function show_in_nav_menus(): bool
	{
		return $this->public();
	}

	/**
	 * @return    bool
	 */
	protected function show_in_admin_bar(): bool
	{
		return $this->show_in_menu();
	}

	/**
	 * @return    bool
	 */
	protected function show_in_rest(): bool
	{
		return false;
	}

	/**
	 * @return    string
	 */
	protected function rest_base(): string
	{
		return $this->name();
	}

	/**
	 * @return    string
	 */
	protected function rest_namespace(): string
	{
		return 'wp/v2';
	}

	/**
	 * @return    string
	 */
	protected function rest_controller_class(): string
	{
		return 'WP_REST_Posts_Controller';
	}

	/**
	 * @return    int|null
	 */
	protected function menu_position(): ?int
	{
		return null;
	}

	/**
	 * @return    string|null
	 */
	protected function menu_icon(): ?string
	{
		return null;
	}

	/**
	 * @return    string|string[]
	 */
	protected function capability_type()
	{
		return 'post';
	}

	/**
	 * @return    array<string,string>
	 */
	protected function capabilities(): array
	{
		return array();
	}

	/**
	 * @return    bool|null
	 */
	protected function map_meta_cap(): ?bool
	{
		return null;
	}

	/**
	 * @return    string[]|false
	 */
	protected function supports()
	{
		return array();
	}

	/**
	 * @param    \WP_Post    $wp_post
	 * @return    void
	 */
	public function register_meta_box_cb(\WP_Post $wp_post)
	{
	}

	/**
	 * @return    bool|string
	 */
	protected function has_archive()
	{
		return false;
	}

	/**
	 * @return    bool|array<string,mixed>
	 */
	protected function rewrite()
	{
		return true;
	}

	/**
	 * @return    bool|string
	 */
	protected function query_var()
	{
		return true;
	}

	/**
	 * @return    bool
	 */
	protected function can_export(): bool
	{
		return true;
	}

	/**
	 * @return    bool|null
	 */
	protected function delete_with_user(): ?bool
	{
		return null;
	}

	/**
	 * @return    array[]
	 */
	protected function template(): array
	{
		return array();
	}

	/**
	 * @return    string|false
	 */
	protected function template_lock()
	{
		return false;
	}
}
