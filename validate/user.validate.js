module.exports.postCreate = function(req, res){
    var errors = [];
    if (!req.body.name){
        errors.push('Name is required.');
    }

    if (!req.body.phone){
        errors.push('Phone is required');
    }

    if (errors.length){
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
    }
    next();
};