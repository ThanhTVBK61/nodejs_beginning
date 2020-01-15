function route(handle, pathName) {
    if (typeof handle[pathName] === 'function') {
        handle[pathName]();
    } else {
        console.log("Error 404: Not Found!");
    }
}

exports.route = route;