/*
 * Defines the various settings as used by Syte
 */

var settings = {};

settings.sitename = "vvMedia";
settings.url = "http://vv.media/"
settings.development = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');
settings.development ? settings.port = 8080 : settings.port = 80;

module.exports = settings;
