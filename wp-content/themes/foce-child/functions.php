<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Ajout du CSS et du SCRIPT personnalisés pour le thème enfant
add_action( 'wp_enqueue_scripts', 'add_koukaki_scripts' );
function add_koukaki_scripts() {
    wp_enqueue_style( 'koukaki', get_stylesheet_directory_uri() . '/css/koukaki.css');
    wp_enqueue_script( 'koukaki', get_stylesheet_directory_uri() . '/js/koukaki.js' );
}

function add_defer_attribute($tag, $handle) {
    if ( 'koukaki' !== $handle )
      return $tag;
    return str_replace( ' src', ' defer="defer" src', $tag );
  }
  add_filter('script_loader_tag', 'add_defer_attribute', 10, 2);

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
