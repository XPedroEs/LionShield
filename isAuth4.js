module.exports = (request, response, next) => {
    if (request.session.acceso < 4) {
        return response.redirect('/agentes/intruso');
    }
    next();
}