module.exports = (request, response, next) => {
    if (request.session.acceso < 1) {
        return response.redirect('/agentes/intruso');
    }
    next();
}