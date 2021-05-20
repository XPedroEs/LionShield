module.exports = (request, response, next) => {
    if (request.session.acceso < 3) {
        return response.redirect('/agentes/intruso');
    }
    next();
}