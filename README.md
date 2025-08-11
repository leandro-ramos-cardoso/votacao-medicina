# 🏥 Sistema de Votação - Semiologia

Sistema de inscrição para grupos de práticas de semiologia da turma de medicina.

## ✨ Funcionalidades

- ✅ **Inscrição única por usuário** - Cada pessoa só pode se inscrever uma vez
- ✅ **Controle de limites** - Máximo 9 pessoas por subgrupo (A1-A5, B1-B5)
- ✅ **Limite por grupo** - Máximo 45 pessoas por grupo (A e B)
- ✅ **Interface responsiva** - Funciona em desktop e mobile
- ✅ **Armazenamento local** - Dados salvos no navegador
- ✅ **Exportação de dados** - Backup em JSON e CSV
- ✅ **Estatísticas em tempo real** - Visualização dos grupos

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. **Fork este repositório** no GitHub
2. **Acesse [vercel.com](https://vercel.com)**
3. **Clique em "New Project"**
4. **Importe o repositório** do GitHub
5. **Clique em "Deploy"**

### Opção 2: Deploy Manual

1. **Instale o Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

## 📁 Estrutura do Projeto

```
├── sistema-votacao-medicina.html  # Sistema principal
├── vercel.json                    # Configuração Vercel
├── README.md                      # Este arquivo
└── arquivos-de-suporte/           # Ferramentas de diagnóstico
    ├── teste-rapido.html
    ├── diagnostico-conexao.html
    └── SOLUCAO_ERRO_CONEXAO.md
```

## 🎯 Como Usar

1. **Configure o Supabase** seguindo o guia `CONFIGURACAO_RAPIDA.md`
2. **Configure as credenciais** no arquivo `sistema-votacao-supabase.html`
3. **Faça deploy** na Vercel
4. **Use o sistema** normalmente

## 📊 Regras do Sistema

### Grupos Disponíveis:
- **Grupo A**: Terças-feiras às 13h
- **Grupo B**: Sextas-feiras às 7h

### Subgrupos:
- **A1, A2, A3, A4, A5** (máximo 9 cada)
- **B1, B2, B3, B4, B5** (máximo 9 cada)

### Limites:
- **45 pessoas por grupo** (total 90)
- **9 pessoas por subgrupo**
- **1 inscrição por pessoa**

## 💾 Armazenamento de Dados

- **Supabase**: Dados salvos no banco de dados
- **Exportação**: Backup em JSON e CSV
- **Sincronização**: Dados em tempo real para todos os usuários

## 🔧 Funcionalidades de Exportação

### Exportar JSON:
- Dados completos em formato JSON
- Inclui nome, grupo, subgrupo e data

### Exportar CSV:
- Dados em formato de planilha
- Compatível com Excel e Google Sheets

### Limpar Dados:
- Remove todas as inscrições
- **Ação irreversível**

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop e Mobile
- ✅ Responsivo para todos os tamanhos de tela

## 🛠️ Tecnologias

- **HTML5** - Estrutura
- **CSS3** - Estilização e responsividade
- **JavaScript** - Lógica e funcionalidades
- **Supabase** - Banco de dados
- **Vercel** - Hospedagem

## 🔒 Segurança

- **Validação client-side** para evitar duplicatas
- **Controle de limites** automático
- **Dados locais** - não há servidor externo
- **Exportação segura** - apenas download de arquivos

## 📞 Suporte

Se encontrar problemas:

1. **Verifique o console** do navegador (F12)
2. **Teste em outro navegador**
3. **Limpe o cache** se necessário
4. **Exporte os dados** antes de limpar

## 🚀 Status do Projeto

- ✅ **Sistema funcionando** 100%
- ✅ **Pronto para produção**
- ✅ **Deploy na Vercel** configurado
- ✅ **Interface responsiva**
- ✅ **Todas as validações** implementadas

---

**Desenvolvido para o Grupo de Práticas de Semiologia** 🏥 