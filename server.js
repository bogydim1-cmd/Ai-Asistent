import express from 'express';
import { createInvoice } from './payments.js';

const app = express();
app.use(express.json());

app.post('/create-order', async (req, res) => {
  const { business, tasks } = req.body;

  let price = 2990;
  if (tasks.length > 200) price += 1000;

  const invoiceLink = await createInvoice(price, req.body.user_id);

  res.json({ price, invoiceLink });
});

app.listen(3000);
