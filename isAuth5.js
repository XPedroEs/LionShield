module.exports = (request, response, next) => {
    if (request.session.acceso < 5) {
        return response.redirect('/agentes/intruso');
    }
    next();
}