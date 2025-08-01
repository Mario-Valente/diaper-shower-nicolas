# 🚀 Como Configurar GitHub Pages

## Passos para Configurar GitHub Pages:

### 1. **Fazer Push dos Arquivos**
```bash
git add .
git commit -m "Configure GitHub Pages with generated docs"
git push origin main
```

### 2. **Configurar GitHub Pages no Repositório**
1. Vá para **Settings** do seu repositório no GitHub
2. Clique em **Pages** no menu lateral
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **main**
5. Em **Folder**, selecione **/ (root)** ou **docs** se a opção estiver disponível
6. Clique em **Save**

### 3. **Aguardar o Deploy**
- O GitHub Pages vai automaticamente detectar os arquivos na pasta `docs`
- O site ficará disponível em: `https://mario-valente.github.io/diaper-shower-nicolas/`
- O processo pode levar alguns minutos

### 4. **Automatização com GitHub Actions**
O arquivo `.github/workflows/deploy.yml` foi criado para automatizar o deploy:
- Toda vez que você fizer push na branch `main`
- Os arquivos serão automaticamente gerados e deployados
- Usando a branch `gh-pages` como destino

## 📝 Comandos Úteis:

```bash
# Desenvolver localmente
npm run dev

# Gerar arquivos para produção
npm run generate

# Visualizar build localmente
npx serve docs
```

## 🔧 Configurações:

### `nuxt.config.ts`:
- **baseURL**: Configurado para o repositório GitHub Pages
- **output**: Arquivos gerados na pasta `docs`
- **ssr: false**: Para geração estática

### Estrutura dos Arquivos:
```
docs/
├── index.html          # Página principal
├── 200.html           # SPA fallback
├── 404.html           # Página de erro
├── _nuxt/             # Assets do Nuxt
├── images/            # Imagens dos produtos
└── .nojekyll          # Evita processamento Jekyll
```

## 🌐 URL Final:
Após configurar, seu site estará disponível em:
**https://mario-valente.github.io/diaper-shower-nicolas/**

## 🔄 Atualizações:
Para atualizar o site:
1. Faça suas alterações no código
2. Execute `npm run generate`
3. Faça commit e push
4. O GitHub Actions fará o deploy automaticamente
