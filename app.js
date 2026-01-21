const tg = window.Telegram.WebApp;
tg.expand();

function submitForm() {
  const data = {
    business: business.value,
    platform: platform.value,
    tasks: tasks.value,
    tone: tone.value,
    user_id: tg.initDataUnsafe.user.id
  };

  fetch('/create-order', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
    price.innerText = `💰 Стоимость: ${res.price} ₽`;
    tg.openInvoice(res.invoiceLink);
  });
}
