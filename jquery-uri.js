/******************************************
 * Websanova.com
 *
 * Resources for web entrepreneurs
 *
 * @author          Websanova
 * @copyright       Copyright (c) 2012 Websanova.
 * @license         This websanova jQuery boilerplate is dual licensed under the MIT and GPL licenses.
 * @link            http://www.websanova.com
 * @github          http://github.com/websanova/jquery-uri
 * @version			1.1.0
 *
 ******************************************/

jQuery.extend(
{
	uri: function(arg)
	{
		if(!arg) return window.location.toString();
		else if(arg === 'domain') return window.location.hostname;
		else if(arg === 'tld') return window.location.hostname.split('.').slice(-2).join('.');
		else if(arg === 'path') return window.location.pathname;
		else if($.isNumeric(arg)) return window.location.pathname.split('/')[arg] || '';
		else if(arg[0] === '?' || arg[0] === '#')
		{
			var params = window.location.toString(), param = null;

			if(arg[0] === '?') params = (params.split('?')[1] || '').split('#')[0];
			else if(arg[0] === '#') params = (params.split('#')[1] || '');

			if(!arg[1]) return params;

			arg = arg.substring(1);
			params = params.split('&');

			for(var i=0,ii=params.length; i<ii; i++)
			{
				param = params[i].split('=');
				if(param[0] === arg) return param[1];
			}
		}

		return '';
	}
});