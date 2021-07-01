import cors from 'cors';
import transferRouter from './transfer';

export default (app) => {
    app.use(cors());
    app.get('/', (req, res) => {
        // app.use('/api/v1/transfers', transferRouter);
        res.json({ mesage: 'Welcome to Metafora' })
    })

    app.use((err, req, res, next) => {
        console.error('what is the error', err);
        res.status(500).json({ error: 'an error occurred' });
    });
}
