# Teste com Next.js

Projeto desenvolvido para avaliação técnica. O objetivo é criar uma aplicação Next.js com duas páginas: **Login** e **Maps**, utilizando boas práticas de código, arquitetura limpa e seguindo os princípios do SOLID.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para aplicações web.
- **TypeScript**: Superset do JavaScript para tipagem estática.
- **Leaflet.js**: Biblioteca para renderização de mapas interativos.
- **Lucide Icons**: Biblioteca de ícones vetoriais.
- **CSS Modules**: Estilização modular e isolada.

---

## 🚀 Funcionalidades

### **Página de Login**
- Campos para **email** e **senha**.
- Validação de email e senha (mínimo de 6 caracteres).
- Redirecionamento para a página **Maps** após login bem-sucedido.

### **Página de Maps**
- **Header** com botão para alternar entre os modos claro e escuro.
- **Sidebar** responsiva que pode ser aberta e fechada.
- Integração com o **Leaflet.js** para exibição de um mapa interativo.
- **Popup** ilustrado no mapa.

### **Tema**
- Suporte a **modo claro** e **modo escuro**:
  - **Modo Claro**:
    - Fundo da página: `#f3f4f6`
    - Componentes: `#ffffff`
    - Sidebar: `#0f172a`
    - Ícones: `bg-blue-600`
  - **Modo Escuro**:
    - Fundo da página: `rgb(5 17 57)`
    - Componentes: `rgb(17 28 68)`
    - Sidebar: `rgb(17 28 68)`
    - Ícones: `bg-blue-600`

---

## 📂 Estrutura de Pastas

src/
├── app/
│   ├── login/
│   │   ├── page.tsx
│   │   ├── styles.module.css
│   ├── maps/
│   │   ├── page.tsx
│   │   ├── styles.module.css
│   ├── layout.tsx
│   ├── globals.css
├── components/
│   ├── Header/
│   │   ├── index.tsx
│   │   ├── styles.module.css
│   ├── Sidebar/
│   │   ├── index.tsx
│   │   ├── styles.module.css
│   ├── Map/
│   │   ├── index.tsx
│   │   ├── styles.module.css
├── contexts/
│   └── ThemeContext.tsx
├── styles/
│   ├── theme.css
└── utils/
    └── validation.ts


---

## 🖥️ Como Rodar o Projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

### **Passos para execução**
1. Clone este repositório:
   ```bash
   git clone https://github.com/othongonzaga/teste-sergio-nextjs.git
   cd teste-sergio-nextjs

2. Instale as dependencias:
    ```bash
    npm install
    ou
    yarn install
3. Rodar projeto:
    ```bash
    npm run deve
    ou
    yarn dev

