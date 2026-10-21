# Portfólio Zevitor

Aluno: José Victor Xavier Silva

## Descrição
Aplicativo de portfólio pessoal em tema escuro com Login simulado, Home (apresentação e projetos), Sobre e Contato, desenvolvido para a disciplina de Programação para Dispositivos Móveis I.

## Tecnologia
React Native com Expo e React Navigation (native stack). App voltado para Android (também roda no navegador para testes).

## Como executar
```
npm install
npx expo start
```
Escaneie o QR code com o Expo Go no Android, ou pressione `a` para o emulador Android e `w` para abrir no navegador.

## Executar com Docker
Requer Docker Desktop. O compose usa a imagem `node:22-slim`, compatível com o Expo SDK 58.

1. Copie `.env.example` para `.env` e troque `HOST_IP` pelo IPv4 do seu computador na rede Wi-Fi (`ipconfig` no Windows).
2. Rode:
```
docker compose up
```
3. No celular Android (mesma rede Wi-Fi), abra o Expo Go e escaneie o QR code exibido no terminal. No computador, o app também abre em http://localhost:8081.

Para ver alterações no código, rode `docker compose restart` e recarregue o app. Se o firewall do Windows bloquear, permita a porta 8081 para redes privadas.

## Credenciais de teste
- Usuário: `aluno`
- Senha: `123456`

Definidas em `src/config/credentials.js`.

## Estrutura
```
App.js
src/
  config/       credenciais de teste
  data/         dados do portfólio (profile.js)
  navigation/   rotas
  pages/        Login, Home, Sobre, Contato (cada uma com seu .styles.js quando necessário)
  components/   Button, Input, Toolbar, Tag, ProjectCard, SectionHeader, IconCircle
  styles/       colors, fonts, global
assets/         images (foto e logos dos projetos), icons
```

## Funcionalidades
- Login simulado com validação de campos vazios e credenciais inválidas
- Senha oculta com botão mostrar/ocultar e botão limpar
- Navegação Login, Home, Sobre e Contato
- Toolbar com título por tela, links de navegação e retorno para Home
- Componentes reutilizáveis e estilos centralizados com StyleSheet
- Botões de ligar e enviar e-mail na tela Contato

## Capturas de tela
Adicionar capturas de Login, Home, Sobre e Contato.

## Personalização
Todo o conteúdo do portfólio fica em `src/data/profile.js`. Substitua o e-mail e o telefone de exemplo pelos seus dados reais.
