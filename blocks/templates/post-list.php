<?php if ( ! $server_side_rendering ) { ?>
<div
  class="qms4__post-list"
  data-layout="<?= $layout ?>"
  data-num-columns-pc="<?= $num_columns_pc ?>"
  data-num-columns-sp="<?= $num_columns_sp ?>"
  data-num-posts-pc="<?= $num_posts_pc ?>"
  data-num-posts-sp="<?= $num_posts_sp ?>"
>
<?php } ?>

  <div class="qms4__post-list__list">
<?php foreach ( $list as $item ) { ?>
    <div class="qms4__post-list__list-item">
      <a
        href="<?= $item->permalink ?>"
        target="<?= $link_target === '__custom' ? $link_target_custom : $link_target ?>"
      >
        <?= $renderer->render( $item ) ?>
      </a>
    </div>
    <!-- /.qms4__post-list__list-item -->
<?php } ?>
  </div>
  <!-- /.qms4__post-list__list -->

<?php if ( ! $server_side_rendering ) { ?>
</div>
<!-- /.qms4__post-list -->
<?php } ?>
