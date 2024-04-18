<?php
/**
 * Plugin Name: Carrousel
 * Description: Un plugin qui affiche un carrousel d'images contrôlé par des boutons radio
 * Author: Raymond Beauregard-Casavant
 * Version: 1.0.0
 */



function eddym_enqueue(){

    $version_css = filemtime(plugin_dir_path( __FILE__ ) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

    global $version_css, $version_js;
    wp_enqueue_style(   'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css);
    
    wp_enqueue_script(  'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) ."js/carrousel.js",
    array(),
    $version_js,
    true); // true pour le mettre à la fin du document
}

add_action('wp_enqueue_scripts', 'eddym_enqueue');

function genere_html(){
    /////////////////////////////////////// HTML
    // Le conteneur d'une boîte
    
       $contenu = '<button class="bouton__ouvrir">Ouvrir</button>
       <div class="carrousel">
       <button class="carrousel__x">X</button>
       <figure class="carrousel__figure"></figure>
       <form class="carrousel__form"></form>
       </div>';
       return $contenu;
   }

add_shortcode('carrousel', 'genere_html');