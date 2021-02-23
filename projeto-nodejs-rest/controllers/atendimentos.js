

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Você esta na rota de atendimentos'));


    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você esta na rota de atendimentos e de post')});
}
