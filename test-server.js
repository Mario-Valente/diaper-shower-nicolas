import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Servir arquivos estáticos no caminho /diaper-shower-nicolas/
app.use('/diaper-shower-nicolas', express.static(path.join(__dirname, 'docs')))

// Redirect da raiz para o projeto
app.get('/', (req, res) => {
  res.redirect('/diaper-shower-nicolas/')
})

const PORT = 3004
app.listen(PORT, () => {
  console.log(`Servidor GitHub Pages simulado rodando em: http://localhost:${PORT}/diaper-shower-nicolas/`)
})
