import express from 'express';
import morgan from 'morgan';

import imgRouter from './routes/image';

const PORT = 3000;

const app = express();
app.use(morgan('combined'))


app.use('/api/images', imgRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
