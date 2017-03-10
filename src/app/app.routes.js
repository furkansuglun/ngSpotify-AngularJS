"use strict";
var router_1 = require('@angular/router');
var search_component_1 = require('./component/search/search.component');
var about_component_1 = require('./component/about/about.component');
var artist_component_1 = require("./component/artist/artist.component");
var album_component_1 = require("./component/album/album.component");
var router = [
    {
        path: '',
        component: search_component_1.SearchComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'search',
        component: search_component_1.SearchComponent
    },
    {
        path: 'artist/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.routes = router_1.RouterModule.forRoot(router);
//routing is gonna be imported on app.module.ts !
//# sourceMappingURL=app.routes.js.map