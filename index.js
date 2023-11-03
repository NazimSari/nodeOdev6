const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  if (ctx.request.url === "/") {
    ctx.body = "<h1>Ana sayfaya hosgeldiniz</h1>";
  } else if (ctx.request.url === "/hakkimda") {
    ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz</h1>";
  } else if (ctx.request.url === "/iletisim") {
    ctx.body = "<h1>iletisim sayfasina hosgeldiniz</h1>";
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalışmaya başladı...`);
});
