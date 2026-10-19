<?php
/**
 * Plugin Name: Padisar Robot Starter
 * Plugin URI: https://github.com/Colonthes/cursor-following-robot
 * Description: An original 3D robot with pointer-driven head movement. Add [padisar_robot] to an Enfold Text Block.
 * Version: 1.4.0
 * Author: Colonthes
 * Author URI: https://github.com/Colonthes
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * License: MIT
 * Text Domain: padisar-robot
 */

defined('ABSPATH') || exit;

function padisar_robot_starter_register_assets() {
    $base = plugin_dir_url(__FILE__);
    wp_register_style('padisar-robot-starter', $base . 'assets/robot.css', array(), '1.4.0');
    wp_register_script('padisar-robot-chat', $base . 'assets/chat-bridge.js', array(), '1.4.0', true);
    wp_register_script('padisar-robot-starter', $base . 'assets/loader.js', array('padisar-robot-chat'), '1.4.0', true);
}
add_action('init', 'padisar_robot_starter_register_assets');

function padisar_robot_starter_styles() {
    // Small scoped stylesheet also covers shortcodes in Enfold saved layouts/widgets.
    wp_enqueue_style('padisar-robot-starter');
}
add_action('wp_enqueue_scripts', 'padisar_robot_starter_styles');

function padisar_robot_starter_shortcode($atts = array()) {
    $atts = shortcode_atts(array(
        'height' => '560',
        'accent' => '#06b6d4',
        'tracking' => 'page',
        'idle' => 'true',
        'chat_selector' => '.scb-fab',
        'chat_panel' => '.scb-panel',
        'chat_label' => is_rtl() ? 'گفت‌وگو با پشتیبانی' : 'Open support chat',
    ), $atts, 'padisar_robot');

    $height = max(320, min(900, absint($atts['height'])));
    $accent = sanitize_hex_color($atts['accent']);
    if (!$accent) {
        $accent = '#06b6d4';
    }
    $tracking = $atts['tracking'] === 'section' ? 'section' : 'page';
    $idle = in_array(strtolower((string) $atts['idle']), array('0', 'false', 'no'), true) ? 'false' : 'true';
    $base = plugin_dir_url(__FILE__);
    wp_enqueue_script('padisar-robot-starter');

    ob_start();
    ?>
    <div class="padisar-robot" data-padisar-robot
         data-bundle="<?php echo esc_url($base . 'assets/robot.bundle.js?ver=1.4.0'); ?>"
         data-accent="<?php echo esc_attr($accent); ?>"
         data-tracking="<?php echo esc_attr($tracking); ?>"
         data-idle="<?php echo esc_attr($idle); ?>"
         data-chat-selector="<?php echo esc_attr(sanitize_text_field($atts['chat_selector'])); ?>"
         data-chat-panel="<?php echo esc_attr(sanitize_text_field($atts['chat_panel'])); ?>"
         data-chat-unavailable="<?php echo esc_attr(is_rtl() ? 'گفت‌وگوی پشتیبانی هنوز در این صفحه آماده نیست.' : 'Support chat is not available on this page yet.'); ?>"
         style="--pr-height:<?php echo esc_attr($height); ?>px;--pr-accent:<?php echo esc_attr($accent); ?>">
        <div class="padisar-robot__visual" aria-hidden="true">
            <img class="padisar-robot__poster" src="<?php echo esc_url($base . 'assets/robot-poster.webp?ver=1.4.0'); ?>"
                 width="1000" height="800" alt="" decoding="async">
            <div class="padisar-robot__canvas"></div>
        </div>
        <button class="padisar-robot__chat" type="button" aria-haspopup="dialog" aria-expanded="false" aria-label="<?php echo esc_attr($atts['chat_label']); ?>"></button>
        <span class="padisar-robot__status" role="status" hidden></span>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('padisar_robot', 'padisar_robot_starter_shortcode');
