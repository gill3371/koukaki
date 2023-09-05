<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?>
                </a>
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul>
                    <li class="site-title-full-nav">
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <img class="burgerLogo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="Logo Koukaki">
                        </a>
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                    <div class="animatedElements">
                        <img class="site-title-full-nav orchid" src="<?php echo get_template_directory_uri() . '/assets/images/orchid.png'; ?>" alt="Fleur d'orchidée en rotation">
                        <img class="site-title-full-nav sunflower" src="<?php echo get_template_directory_uri() . '/assets/images/sunflower.png'; ?>" alt="Fleur blanche en rotation">
                        <img class="site-title-full-nav random_flower" src="<?php echo get_template_directory_uri() . '/assets/images/random_flower.png'; ?>" alt="Fleur en rotation">
                        <img class="site-title-full-nav flower" src="<?php echo get_template_directory_uri() . '/assets/images/flower.png'; ?>" alt="Fleur rouge en rotation">
                        <img class="site-title-full-nav hibiscus" src="<?php echo get_template_directory_uri() . '/assets/images/Hibiscus.png'; ?>" alt="Fleurs d'hibiscus en rotation">
                        <img class="site-title-full-nav catBlack" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/black_cat.png'; ?>" alt="Chat noir flottant">
                        <img class="site-title-full-nav catOrange" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/orange_cat.png'; ?>" alt="Chat noir flottant">
                        <img class="site-title-full-nav catBlue" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/blue_cat.png'; ?>" alt="Chat noir flottant">
                    </div>
                </ul>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->