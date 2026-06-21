# 🛍️ TADS Store

Projeto Integrador TADS Store, desenvolvido como atividade final da disciplina de Desenvolvimento Front-End II com React.

A TADS Store (nome: Urban Style) é uma loja virtual construída com React, consumindo API externa, utilizando componentização, roteamento SPA e autenticação simulada com Context API.

---

## 🚀 Tecnologias utilizadas

- React
- React Router DOM
- Context API
- JavaScript (ES6+)
- CSS3
- API DummyJSON

---

## 📦 Como executar o projeto

1. Clone o repositório e instale as dependências:

npm install

2. Execute o projeto:

npm run dev

3. Abra no navegador esse link:

http://localhost:5173

4. Login de teste

Para acessar a área protegida, digite:

Usuário: aluno
Senha: 1234

5. Funcionalidades:
✔ Componentização
Layout com children
Componentes reutilizáveis (Cabecalho, Rodape, Vitrine, ProdutoCard, Botao, Selo).

✔ Consumo de API
Produtos vindos da API DummyJSON
useEffect para carregamento
useState para controle de estado
Loading durante carregamento

✔ Busca e Filtros
Filtro por nome do produto
Filtro por categoria

✔ Navegação SPA
React Router configurado
Página inicial (/)
Página de detalhe (/produto/:id)
Página de login (/login)
Página de erro 404

✔ Autenticação
Login simulado com Context API
Sessão de usuário
Rota protegida (/minha-conta)
Logout funcional
Controle de visualização (Entrar/Sair)

## 📁 Estrutura do projeto

O projeto segue uma organização padrão com Vite + React:

src/
├── assets/         # imagens e arquivos estáticos
├── componentes/    # componentes reutilizáveis da aplicação
├── contexts/       # gerenciamento de estado global (Context API)
├── pages/          # páginas principais da aplicação (rotas)
├── App.jsx         # componente principal da aplicação
├── App.css         # estilos do App
├── index.css       # estilos globais
└── main.jsx        # ponto de entrada da aplicação

🎯 Objetivo do projeto:

Aplicar os conceitos de React aprendidos em aula, incluindo:

Componentização
Hooks (useState, useEffect)
Consumo de API
React Router (SPA)
Context API (autenticação)
Organização de projeto

👩‍💻 Autora: Vanêssa Pereira

Projeto acadêmico desenvolvido para fins educacionais.