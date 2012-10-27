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
 * @version			1.3.0
 *
 ******************************************/

jQuery.extend(
{
	uri: function(arg)
	{
		var _l = window.location,
		_ls = _l.toString(),
		_h = _l.hostname,
		_hs = _h.split('.'),
		_p = _l.pathname,
		_ps = _p.split('/');

		if(!arg) return _ls;
		else if(arg === 'domain') return _h;
		else if(arg === 'host') return _hs.slice(-2).join('.');
		else if(arg === 'tld') return _hs.slice(-1).join('.');
		else if(arg === 'sub') return _hs.slice(0, _hs.length - 2).join('.');
		else if(arg === 'path') return _p;
		else if($.isNumeric(arg)){ arg = parseInt(arg); return _ps[arg < 0 ? _ps.length + arg : arg] || ''; }
		else if(arg === 'file') return _ps.slice(-1);
		else if(arg === 'filename') return _ps.slice(-1)[0].split('.')[0];
		else if(arg === 'fileext') return _ps.slice(-1)[0].split('.')[1] || '';
		else if(arg[0] === '?' || arg[0] === '#')
		{
			var params = _ls, param = null;

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