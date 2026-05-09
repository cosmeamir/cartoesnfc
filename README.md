# Cartões NFC Premium (Next.js + API)

Este projeto inclui:
- **Frontend** Next.js 15 (App Router, Tailwind, Framer Motion, R3F).
- **Backend** Express (`/api`) para pedidos de cartões.

## Porque apareceu **403 Forbidden** no seu domínio (Hostinger)
O erro **403** geralmente significa que o servidor web não encontrou/permitiu um ficheiro inicial (`index.html`) ou está a apontar para a pasta errada.

No Hostinger existem **2 cenários**:

---

## 1) Hostinger Shared (hPanel comum, sem Node persistente)
Use **deploy estático** do frontend.

### Passos
1. No seu computador/local, dentro deste projeto:
   ```bash
   npm install
   npm run export
   ```
2. Será criada a pasta `out/` com ficheiros estáticos.
3. Faça upload do conteúdo de `out/` para `public_html/` (não envie a pasta por cima; envie os ficheiros dentro dela).
4. Confirme permissões:
   - pastas: `755`
   - ficheiros: `644`
5. Limpe cache/CDN do domínio e teste.

> Se subir o código-fonte Next.js diretamente para `public_html` sem exportar, normalmente vai dar 403/500.

---

## 2) Hostinger VPS (Node permitido)
Use execução Node com build Next.

### Passos
```bash
npm install
npm run build
PORT=3000 npm run start
```

Depois configure o domínio para fazer proxy para a porta `3000` (Nginx/Apache do VPS).

Exemplo Nginx:
```nginx
location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
}
```

---

## Scripts
- `npm run dev` → desenvolvimento
- `npm run build` → build produção
- `npm run start` → servir produção (Node)
- `npm run export` → build estático para Shared Hosting

## API Express (`/api`)
A API está na pasta `api/`.

```bash
cd api
npm install
npm run dev
```

Em produção, pode colocar a API no VPS, Railway, Render ou outro serviço Node e apontar o frontend para esse endpoint.
