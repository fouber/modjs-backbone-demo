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
        jswrapper : {
            type : 'amd'
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
        id : '$3',
        release : '/static/$&'
    },
    {
        reg : /^\/(control|model|view)\/(.*)\.js$/i,
        isMod : true,
        id : '$2',
        release : '/static/$&'
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