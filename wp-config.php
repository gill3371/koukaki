<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ig>M2m/%vi=_I8:6&JZ|o),<&8I^nqv9ySTYt,e-@[$sFk8=ZGwVm3tDW^SF!2-j' );
define( 'SECURE_AUTH_KEY',  '`]ab8-)];)SgY(qZB#b$rjP|bA9P|An~}#yo}rIF~8+hcLdFxN!9~W8Wy2k4FV{{' );
define( 'LOGGED_IN_KEY',    'C1mMtf~I|d$H>MTfiK-8Aeen{]@^$Ktss_/m~m:Z8BX;uAs,7&(O!VEqAUb.Y/NS' );
define( 'NONCE_KEY',        'cxR2q[y|yZ~MN&)ov/1Jkv3bKRF=bs_?JuY-B =KEYJX=QF>y7>i,O!|+Y,GbUT$' );
define( 'AUTH_SALT',        'g7WgTg606papR`[JUVk:Ahi:kE3j@li~HX>L[miFEAwh02G;syWj#H9n*ckSbe^_' );
define( 'SECURE_AUTH_SALT', 'Sof>b8{x~0Q<?`w%~L#|w!2VxhTuxf)3,}Y~421iR=QKBBC^SZDXMcPj Ijdaw*@' );
define( 'LOGGED_IN_SALT',   'x|tX?XSnxJg>Gx]E1#iX])4>Uk<CO!+IO.jxY6#KV2&Xdr-iFJH}jin3u4+ q)Ct' );
define( 'NONCE_SALT',       'sbTF(*Nv+Rg0bbs[q%qU)i3<WsPQ?1MGoO$a64+a<7ukrMovUH:zG%TGrDewqDDs' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
