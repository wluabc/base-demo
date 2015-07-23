/**
 * Created by WangLu on 2015-07-23.
 */
function route(handle, pathname){
    console.log('About to route a request for ' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log('no request handler found for ' + pathname);
    }
}

exports.route = route;