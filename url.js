window.url = (function() {

    function _t() {
        return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
    }

    function _d(s) {
      return decodeURIComponent(s.replace(/\+/g, ' '));
    }

    function _i(arg, str) {
        var sptr = arg.charAt(0),
            split = str.split(sptr);

        if (sptr === arg) { return split; }

        arg = parseInt(arg.substring(1), 10);

        return split[arg < 0 ? split.length + arg : arg - 1];
    }

    function _f(arg, str) {
        var sptr = arg.charAt(0),
            split = str.split('&'),
            field = [],
            params = {},
            tmp = [],
            arg2 = arg.substring(1);

        for (var i in split) {
            var tmpS = /^([^\=]+)\=(.*)$/.exec(split[i]);
            if (tmpS!==null && tmpS.length>=3) {
                field = [tmpS[1], tmpS[2]];
            } else {
                field = [split[i]];
            }

            if (field[0].replace(/\s/g, '') !== '') {
                field[1] = _d(field[1] || '');

                // If we have a match just return it right away.
                if (arg2 === field[0]) { return field[1]; }

                // Check for array pattern.
                tmp = field[0].match(/(.*)\[([0-9]+)\]/);

                if (tmp) {
                    params[tmp[1]] = params[tmp[1]] || [];
                
                    params[tmp[1]][tmp[2]] = field[1];
                }
                else {
                    params[field[0]] = field[1];    
                }
            }
        }

        if (sptr === arg) { return params; }

        return params[arg2];
    }

    return function(arg, url) {
        var _l = {}, tmp, tmp2;

        if (arg === 'tld?') { return _t(); }

        url = url || window.location.toString();

        if ( ! arg) { return url; }

        arg = arg.toString();

        if (url.match(/^mailto:[^\/]/)) {
            _l.protocol = 'mailto';
            _l.email = url.split("mailto:")[1];
        }
        else {

            // Anchor.
            _l.hash = undefined;
            if(url.indexOf('#')!==-1) {
                var tmpH = /^[^\#]+\#(.*)$/.exec(url);

                if (tmpH!==null && tmpH.length>=2) {
                    _l.hash = tmpH[1];
                    tmp = [url.replace("#"+_l.hash, ""), _l.hash];
                } else {
                    tmp = [url];
                }

            } else {
                tmp = [url];
            }

            _l.hash = tmp[1] ? tmp[1] : undefined;

            // Return anchor parts.
            if (_l.hash && arg.match(/^#/)) { return _f(arg, _l.hash); }
            
            // Query
            _l.query = undefined;
            if(tmp[0].indexOf('?')!==-1) {
                var tmpQ = /^[^\?]*\?(.*)$/.exec(tmp[0]);
                if (tmpQ!==null && tmpQ.length>=2) {
                    _l.query = tmpQ[1];
                }
                tmp = [tmp[0].replace("?"+_l.query, ""), _l.query];
            } else {
                tmp = [tmp[0]];
            }

            // Return query parts.
            if (_l.query && arg.match(/^\?/)) { return _f(arg, _l.query); }

            // Protocol.
            tmp = tmp[0].split(/\:?\/\//);
            _l.protocol = tmp[1] ? tmp[0].toLowerCase() : undefined;

            // Path.
            var purl = tmp[1] ? tmp[1] : tmp[0],
                tmpArr = /^[^\/]*(\/.*)$/.exec(purl);
            _l.path = '';
            if (tmpArr!==null && tmpArr.length>=2) {
                _l.path = tmpArr[1];
                tmp = [purl.replace(_l.path, ""), _l.path];
            } else {
                tmp = [purl];
            }


            // Clean up path.
            _l.path = _l.path.replace(/^([^\/])/, '/$1').replace(/\/$/, '');

            // Return path parts.
            if (arg.match(/^[\-0-9]+$/)) { arg = arg.replace(/^([^\/])/, '/$1'); }
            if (arg.match(/^\//)) { return _i(arg, _l.path.substring(1)); }

            // File.
            tmp2 = _i('/-1', _l.path.substring(1));

            // Filename and fileext.
            if(tmp2 && tmp2.indexOf('.')!==-1) {
                tmp2 = tmp2.split(".");
                _l.file = tmp2[0] + '.' + tmp2[1];
                _l.filename = tmp2[0];
                _l.fileext = tmp2[1];
            }

            // Port.
            _l.port = undefined;
            if (/^.*\:[0-9]+$/.test(tmp[0])) {
                tmp = tmp[0].split(":");
                _l.port = tmp[1];
            }

            // Auth.
            _l.auth = undefined;
            if (/.*@.*/.test(tmp[0])) {
                tmp = tmp[0].split("@");
                _l.auth = tmp[0];
            }

            // User and pass.
            if (_l.auth && /^.*\:.*$/.test(_l.auth)) {
                tmp2 = _l.auth.split(":");
                _l.user = tmp2[0];
                _l.pass = tmp2[1];
            }

            // Hostname.
            _l.hostname = (tmp[1] ? tmp[1] : tmp[0]).toLowerCase();

            // Return hostname parts.
            if (arg.charAt(0) === '.') { return _i(arg, _l.hostname); }

            // Domain, tld and sub domain.
            if (_t()) {
                tmp = _l.hostname.match(_t());

                if (tmp) {
                    _l.tld = tmp[3];
                    _l.domain = tmp[2] ? tmp[2] + '.' + tmp[3] : undefined;
                    _l.sub = tmp[1] || undefined;
                }
            }

            // Set port and protocol defaults if not set.
            _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
            _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
        }

        // Return arg.
        if (arg in _l) { return _l[arg]; }

        // Return everything.
        if (arg === '[]') { return _l; }

        // Default to undefined for no match.
        return undefined;
    };
})();

if(typeof jQuery !== 'undefined') {
    jQuery.extend({
        url: function(arg, url) { return window.url(arg, url); }
    });
}