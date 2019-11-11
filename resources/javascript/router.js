/* 
 * Este script eh o responsavel pelo roteamento das views no frontend.
 * Utilizando o plugin (JavaScript): https://www.npmjs.com/package/jq-router
*/

var routes = {},
defaultRoute = 'list';

routes['list'] = {
    url: '#/',
    templateUrl: 'views/list.html'
};

routes['add'] = {
    url: '#/add',
    templateUrl: 'views/add.html'
};

$.router
.setData(routes)
.setDefault(defaultRoute)
.onViewChange(function(e, viewRoute, route, params) {
	if (route.name != 'list') {
		$('#message').html('');
	}
});

$.when($.ready)
.then(function() {
    $.router.run('.view', 'list');
});