fis.config.merge({
    modules : {
        parser : {
            tmpl : 'utc'
        },
        postprocessor : {
            js : 'jswrapper, require-async'
        },
        postpackager : 'modjs'
    },
    settings : {
        postprocessor : {
            jswrapper : {
                type : 'amd'
            }
        },
        postpackager : {
            modjs : {
                subpath : 'pkg/map.js'
            }
        }
    }
});

fis.config.set('roadmap.path', [
    {
        reg : /^\/(control|model|view)\/([^\/]+)\/(\2.*)\.js$/i,
        isMod : true,
        id : '$1/$3',
        release : '/static/$&'
    },
    {
        reg : /^\/(control|model|view)\/(.*)\.js$/i,
        isMod : true,
        id : '$1/$2',
        release : '/static/$&'
    },
    {
        reg : 'lib/lib.js',
        useMap : false,
        release : '/static/$&'
    },
    {
        reg : 'lib/**.js',
        release : false
    },
    {
        reg : 'view/**.css',
        release : false
    },
    {
        reg : '**.css',
        useSprite : true,
        release : '/static/$&'
    },
    {
        reg : '**.tmpl',
        isJsLike : true,
        release : false
    },
    {
        reg : 'index.html'
    },
    {
        reg : 'map.json',
        release : false
    },
    {
        reg : /\/readme\.md$/i,
        release : false
    },
    {
        reg : '**',
        release : '/static/$&'
    }
]);