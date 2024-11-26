const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const alistamentoRoute = require('./routes/alistamento');
const carreiraRoute = require('./routes/carreira');
const cnhRoute = require('./routes/cnh');
const contatoRoute = require('./routes/contato');
const direitosDeveresRoute = require('./routes/direitosDeveres');
const diretrizesRoute = require('./routes/diretrizes');
const especialidadesRoute = require('./routes/especialidades');
const feedbackRoute = require('./routes/feedback');
const financeiroRoute = require('./routes/financeiro');
const independenciaRoute = require('./routes/independencia');
const sobreRoute = require('./routes/sobre');

app.use('/api/alistamento', alistamentoRoute);
app.use('/api/carreira', carreiraRoute);
app.use('/api/cnh', cnhRoute);
app.use('/api/contato', contatoRoute);
app.use('/api/direitos-e-deveres', direitosDeveresRoute);
app.use('/api/diretrizes', diretrizesRoute);
app.use('/api/especialidades', especialidadesRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/financeiro', financeiroRoute);
app.use('/api/independencia', independenciaRoute);
app.use('/api/sobre', sobreRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});