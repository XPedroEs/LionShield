module.exports = (request, response, next) => {
    if (request.session.acceso < 2) {
        return response.redirect('/agentes/intruso');
    }
    next();
}