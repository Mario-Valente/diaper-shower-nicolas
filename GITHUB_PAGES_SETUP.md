# 🚀 Como Configurar GitHub Pages

## ⚠️ **SOLUÇÃO PARA TELA BRANCA NO GITHUB PAGES**

### 🔧 **Correções Aplicadas:**
- ✅ Arquivo `.nojekyll` criado (impede Jekyll de processar arquivos)
- ✅ Workflow GitHub Actions atualizado
- ✅ Scripts de deploy corrigidos

## 📋 **Checklist para Deploy:**

### 1. **Verificar Arquivos Gerados**
```bash
# Gerar arquivos com .nojekyll
npm run deploy:github

# Verificar se .nojekyll existe
ls -la docs/.nojekyll
```

### 2. **Fazer Push com Todas as Correções**
```bash
git add .
git commit -m "fix: Add .nojekyll file and fix GitHub Pages deployment"
git push origin main
```

### 3. **Configurar GitHub Pages - IMPORTANTE!**
1. Vá para **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main`
4. **Folder**: `/docs` (importante escolher docs, não root!)
5. Clique **Save**

### 4. **Verificar Deploy**
- Aguardar 3-5 minutos após push
- Verificar: `https://mario-valente.github.io/diaper-shower-nicolas/`
- Se ainda branco, force refresh (Ctrl+F5)

## 🔍 **Debugging GitHub Pages:**

### Problema: Tela Branca
**Causas Possíveis:**
1. ❌ Falta arquivo `.nojekyll`
2. ❌ GitHub Pages configurado para pasta errada
3. ❌ JavaScript/CSS não carregando (404s)
4. ❌ Cache do navegador

**Soluções:**
```bash
# 1. Recriar .nojekyll
touch docs/.nojekyll

# 2. Verificar links no HTML
grep -r "_nuxt" docs/index.html

# 3. Regenerar tudo
rm -rf docs/*
npm run deploy:github
```

### Verificar no Navegador:
1. Abra F12 (DevTools)
2. Aba **Console** - erros JavaScript?
3. Aba **Network** - arquivos 404?
4. Aba **Sources** - arquivos carregaram?

## 📁 **Estrutura Correta:**
```
docs/
├── .nojekyll          # ← ESSENCIAL para GitHub Pages
├── index.html         # Página principal
├── 200.html          # SPA fallback
├── 404.html          # Página de erro
├── favicon.ico        # Ícone da aba (formato tradicional)
├── favicon.svg        # Ícone da aba (vetorial)
├── _nuxt/            # Assets JS/CSS
│   ├── entry.*.css
│   └── *.js
└── images/           # Imagens dos produtos
```

## 🛠️ **Comandos de Debug:**

```bash
# Testar localmente (simula GitHub Pages)
node test-server.js
# Acesse: http://localhost:3004/diaper-shower-nicolas/

# Verificar arquivos gerados
ls -la docs/
cat docs/.nojekyll

# Regenerar tudo limpo
rm -rf docs/
npm run deploy:github
```

## 🌐 **URLs de Teste:**
- **Local Dev**: http://localhost:3000
- **Local Prod**: http://localhost:3004/diaper-shower-nicolas/
- **GitHub Pages**: https://mario-valente.github.io/diaper-shower-nicolas/

## ⚡ **Se AINDA Estiver Branco:**

1. **Force Refresh**: Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)
2. **Limpar Cache**: DevTools → Application → Storage → Clear
3. **Testar Incógnito**: Nova janela privada
4. **Verificar GitHub Actions**: Repo → Actions → Ver se build passou
5. **Aguardar**: GitHub Pages pode demorar até 10 minutos

## 🎯 **Status Final:**
- ✅ Arquivo .nojekyll criado
- ✅ Workflow atualizado  
- ✅ Scripts corrigidos
- ✅ Estrutura docs/ correta
- ✅ Favicon personalizado (👶 + nome Nicolas)
- ✅ Meta tags SEO configuradas
- ✅ Pronto para deploy!
