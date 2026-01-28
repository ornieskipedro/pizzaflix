# 🚀 Como Publicar no GitHub

## ⚠️ Pré-requisito: Instalar o Git

O Git não está instalado no seu sistema. Siga estes passos:

### 1. Baixar e Instalar o Git

1. Acesse: https://git-scm.com/download/win
2. Baixe a versão mais recente
3. Execute o instalador (use as opções padrão)
4. Reinicie o terminal após a instalação

### 2. Configurar o Git (Primeira Vez)

Após instalar, execute no terminal:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

---

## 📤 Publicar no GitHub

### Método 1: Via Terminal (Após Instalar Git)

```bash
# 1. Inicializar repositório
git init

# 2. Adicionar arquivos
git add .

# 3. Fazer commit
git commit -m "Initial commit: Movie + Pizza landing page"

# 4. Criar repositório no GitHub
# Acesse: https://github.com/new
# Nome sugerido: movie-pizza-site
# Deixe VAZIO (não adicione README, .gitignore, etc)

# 5. Conectar ao GitHub (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/movie-pizza-site.git

# 6. Enviar código
git branch -M main
git push -u origin main
```

---

### Método 2: Via GitHub Desktop (Mais Fácil)

1. **Baixar GitHub Desktop**: https://desktop.github.com/
2. **Instalar e fazer login** com sua conta GitHub
3. **Add Local Repository**:
   - File → Add Local Repository
   - Selecione: `C:\Users\DELL\.gemini\antigravity\scratch\movie-pizza-site`
4. **Criar repositório**:
   - Clique em "Create repository"
   - Marque "Initialize this repository with a README" (desmarque)
5. **Publish**:
   - Clique em "Publish repository"
   - Nome: `movie-pizza-site`
   - Descrição: "Landing page mobile-first para recomendação de filmes + pizzaria"
   - Desmarque "Keep this code private" se quiser público
   - Clique em "Publish Repository"

✅ **Pronto!** Seu código estará no GitHub.

---

### Método 3: Upload Manual (Sem Git)

1. **Criar repositório no GitHub**:
   - Acesse: https://github.com/new
   - Nome: `movie-pizza-site`
   - Descrição: "Landing page mobile-first para recomendação de filmes + pizzaria"
   - Público ou Privado (sua escolha)
   - **NÃO** adicione README, .gitignore ou licença
   - Clique em "Create repository"

2. **Upload de arquivos**:
   - Na página do repositório, clique em "uploading an existing file"
   - Arraste todos os arquivos da pasta:
     ```
     C:\Users\DELL\.gemini\antigravity\scratch\movie-pizza-site
     ```
   - Arquivos para enviar:
     - index.html
     - style.css
     - script.js
     - movie-poster.jpg
     - README.md
     - .gitignore
   - Commit message: "Initial commit: Movie + Pizza landing page"
   - Clique em "Commit changes"

---

## 🌐 Ativar GitHub Pages (Site Online Grátis)

Após publicar, você pode hospedar o site gratuitamente:

1. No repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. Aguarde 1-2 minutos
6. Seu site estará em: `https://SEU_USUARIO.github.io/movie-pizza-site`

---

## 🔧 Atualizações Futuras

### Com Git Instalado:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

### Com GitHub Desktop:

1. Faça as alterações nos arquivos
2. Abra GitHub Desktop
3. Veja as mudanças no painel esquerdo
4. Escreva um commit message
5. Clique em "Commit to main"
6. Clique em "Push origin"

---

## 📝 Recomendação

**Para iniciantes**: Use o **Método 2 (GitHub Desktop)** - é visual e mais fácil.

**Para desenvolvedores**: Use o **Método 1 (Terminal)** - mais rápido e profissional.

**Sem instalar nada**: Use o **Método 3 (Upload Manual)** - funciona, mas é limitado.

---

## ✅ Checklist

- [ ] Git instalado OU GitHub Desktop instalado
- [ ] Conta no GitHub criada
- [ ] Repositório criado no GitHub
- [ ] Código enviado
- [ ] GitHub Pages ativado (opcional)
- [ ] Site online funcionando (opcional)

---

**Escolha o método que preferir e me avise se precisar de ajuda!** 🚀
