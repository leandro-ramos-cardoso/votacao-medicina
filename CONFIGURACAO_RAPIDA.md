# ⚡ Configuração Rápida - Sistema Centralizado

## 🚀 Solução para o Erro 405

Criei uma versão que funciona **sem APIs complexas**, usando Supabase diretamente no frontend.

## 📋 Passo a Passo (5 minutos)

### 1. Criar Supabase
1. **Acesse [supabase.com](https://supabase.com)**
2. **Crie um novo projeto**
3. **Nome**: `sistema-votacao-semiologia`

### 2. Criar Tabela
1. **Vá em "Table Editor"**a
2. **Clique em "New Table"**
3. **Nome**: `inscricoes`
4. **Colunas**:
   - `id` (int8, Primary Key, Auto Increment)
   - `nome` (text, Not Null)
   - `grupo` (text, Not Null)
   - `subgrupo` (text, Not Null)
   - `data` (text, Not Null)
   - `timestamp` (timestamptz, Default: now())

### 3. Configurar Políticas
1. **Vá em "Authentication" > "Policies"**
2. **Clique em "New Policy"**
3. **Configure**:
   - **Policy Name**: "Permitir inserção de inscrições"
   - **Target Roles**: public
   - **Using Expression**: true
4. **Repita para leitura**:
   - **Policy Name**: "Permitir leitura de inscrições"
   - **Target Roles**: public
   - **Using Expression**: true

### 4. Obter Credenciais
1. **Vá em "Settings" > "API"**
2. **Copie**:
   - **Project URL** (ex: `https://xyz.supabase.co`)
   - **anon public** key

### 5. Deploy na Vercel
1. **Faça push** para o GitHub
2. **A Vercel vai fazer deploy automático**
3. **Acesse o sistema**

### 6. Configurar no Sistema
1. **Abra o sistema** na Vercel
2. **Cole a URL do Supabase**
3. **Cole a chave anônima**
4. **Clique em "Configurar"**
5. **Teste a conexão**

## ✅ Vantagens da Nova Versão

- ✅ **Sem APIs complexas** - Funciona direto no frontend
- ✅ **Sem erro 405** - Não depende de Vercel Functions
- ✅ **Configuração simples** - Interface para configurar
- ✅ **Dados centralizados** - Todos veem as mesmas inscrições
- ✅ **Exportação funcionando** - JSON e CSV
- ✅ **Todas as validações** - Limites e duplicatas

## 🎯 Como Usar

1. **Configure o Supabase** no sistema
2. **Teste a conexão**
3. **Use normalmente** - Funciona igual ao anterior
4. **Exporte dados** quando necessário

## 📊 Funcionalidades

- ✅ **Inscrição única** por usuário
- ✅ **Controle de limites** (9 por subgrupo, 45 por grupo)
- ✅ **Interface responsiva**
- ✅ **Estatísticas em tempo real**
- ✅ **Exportação de dados**
- ✅ **Configuração fácil**

## 🆘 Se Tiver Problemas

### Erro de conexão:
1. **Verifique a URL** do Supabase
2. **Verifique a chave** anônima
3. **Teste a conexão** no sistema

### Erro de tabela:
1. **Verifique se a tabela** `inscricoes` existe
2. **Verifique as políticas** de segurança
3. **Teste no painel** do Supabase

### Erro de deploy:
1. **Verifique o vercel.json**
2. **Faça push** para o GitHub
3. **Aguarde o deploy** automático

---

**Sistema 100% funcional sem APIs complexas!** 🚀 