# 🎭 Face Detection with Next.js & OpenCV

🚀 **Face Detection** é um mini projeto que combina **Next.js 14 (App Router)** e **OpenCV.js** para detectar rostos em tempo real. Ele também conta os rostos detectados e salva logs que podem ser exportados como CSV.

🔍 **Principais Recursos**:
- 📷 Detecção de rostos usando **OpenCV.js**
- 🔢 Contagem de rostos detectados
- 📜 Registro de logs com timestamp
- 📂 Exportação dos logs para **CSV**
- 🚮 Confirmação antes de apagar os logs
- ✅ Notificações toast para melhor UX

---

## 🛠 **Tecnologias Utilizadas**
- ⚡ [Next.js 14](https://nextjs.org/) - App Router
- 🖼 [OpenCV.js](https://docs.opencv.org/master/d5/d10/tutorial_js_root.html) - Processamento de imagem
- 💅 [Tailwind CSS](https://tailwindcss.com/) - Estilização
- 🔥 [react-hot-toast](https://react-hot-toast.com/) - Notificações
- 📦 [pnpm](https://pnpm.io/) - Gerenciador de pacotes

---

## 🚀 **Como Rodar o Projeto**

### 📌 1️⃣ Instale as dependências
Certifique-se de ter o **pnpm** instalado. Se não tiver, instale com:
```sh
npm install -g pnpm
```
Agora, instale os pacotes do projeto:
```sh
pnpm install
```

### 📌 2️⃣ Inicie o servidor de desenvolvimento
```sh
pnpm dev
```
O projeto estará rodando em [http://localhost:3000](http://localhost:3000) 🚀

---

## 📸 Demonstração
🖼 Adicione aqui prints do projeto em funcionamento!

---

## 📂 Exportação de Logs
Após detectar rostos, você pode visualizar os logs e exportá-los em CSV.

1. Acesse a página de logs em `/logs`
2. Clique no botão "Export CSV & Clear Logs"
3. Você verá um toast de sucesso e poderá baixar o CSV

⚠️ O sistema pedirá confirmação antes de excluir os logs

---

## 🔥 Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests! 💡

✅ Boas práticas seguidas no projeto:
- Clean Code & Clean Architecture
- Commits atômicos com mensagens em inglês
- Código modular e reutilizável

---

## 📝 Licença
Este projeto é de código aberto e está sob a licença MIT.

---

🚀 Feito com ❤️ por Caroline