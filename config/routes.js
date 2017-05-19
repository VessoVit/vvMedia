var express = require('express');
var routes = require('./blog/index');
var router = express.Router();
var path = require('path');

router.get('/allContent', routes.index);
router.get('/p/:page', routes.page);
router.get('/_CreaTe/:cpage', routes.cpage);
router.get('/blog', routes.index);
router.get('/blog/:year?/:month?/:day?', routes.archive);
router.get('/blog/:year/:month/:day/:article', routes.article);


router.get('/_CreaTe/m/:mname', routes.staticMedia);


// HardCoded routers to be automated later
router.get('/',function(req,res){
	res.render('index', {title: 'World'});
});


router.get('/globalTheme', function(req,res) {
	res.render('globalTheme', {title: 'Topics'});

});

router.get('/_CreaTe', function(req, res) {
	res.render('CreaTe', {title: 'Creative Technology || _CreaTe'});

})
router.get('/_Society', function(req, res) {
	res.render('Society', {title: 'Soci€ty '});

})
module.exports = router;
