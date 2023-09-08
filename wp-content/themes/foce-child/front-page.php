<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <div class="bannerDiv">
            <video muted autoplay loop id="myVideo" poster="<?php echo get_template_directory_uri() . '/assets/images/banner.png' ?>">
                <source src="<?php echo get_stylesheet_directory_uri() . '/asset/video/Studio-Koukaki-vidéo.mp4' ?>" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
            <img class="imgBanner" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/banner.png' ?>" alt="Image fond bannière Koukaki">
            <img class="animFloating imgLogo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants" data-bottom-top="transform:translate3d(0, -50px, 0)" data-top-bottom="transform:translate3d(0, 50px, 0)">
        </div>
    </section>
    <section id="story" class="story">
        <div class="storyDiv">
            <h2><span class="storyTitle">L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php include 'slider-characters.php' ?>
            <article id="place">
                <div>
                    <h3>Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>
                <div class="storyCloud">
                    <div class="clouds" style="--rightCloud: 50px;">
                    <img class="bigCloud" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/big_cloud.png' ?>" alt="Gros nuage dans le ciel">
                    <img class="littleCloud" src="<?php echo get_stylesheet_directory_uri() . '/asset/images/little_cloud.png' ?>" alt="Gros nuage dans le ciel">
                    </div>
                </div>
            </article>
        </div>
    </section>


    <section id="studio" class="">
        <div class="studioDiv">
            <h2><span class="title_A">Studio</span> <span class="title_B">Koukaki</span></h2>
            <div class="textStudio">
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </div>
    </section>
</main><!-- #main -->


<?php
get_footer();
