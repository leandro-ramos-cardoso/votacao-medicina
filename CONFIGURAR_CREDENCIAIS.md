# 🔧 Configurar Credenciais do Supabase

## 🎯 O que fazer

Você precisa substituir as credenciais de exemplo no arquivo `sistema-votacao-supabase.html` pelas suas credenciais reais do Supabase.

## 📍 Onde Editar

Abra o arquivo `sistema-votacao-supabase.html` e procure por estas linhas (por volta da linha 480):

```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
```

## 🔑 Como Obter as Credenciais

### 1. Acesse o Supabase
1. **Vá para [supabase.com](https://supabase.com)**
2. **Faça login** na sua conta
3. **Acesse seu projeto**

### 2. Obtenha as Credenciais
1. **Vá em "Settings"** (no menu lateral)
2. **Clique em "API"**
3. **Copie**:
   - **Project URL** (ex: `https://xyz.supabase.co`)
   - **anon public** key (chave anônima)

## ✏️ Como Editar

Substitua as linhas no código:

### ❌ Antes (exemplo):
```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'your-anon-key';
```

### ✅ Depois (suas credenciais):
```javascript
const SUPABASE_URL = 'https://xyz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

## 🚨 Importante

- **Use a chave ANÔNIMA** (anon public), NÃO a service_role key
- **A URL deve começar com** `https://`
- **A chave deve ser longa** (começa com `eyJ...`)
- **Não compartilhe** essas credenciais publicamente

## 🧪 Teste

Após configurar:

1. **Salve o arquivo**
2. **Recarregue a página**
3. **Verifique se** não aparece mais "Sistema não configurado"
4. **Teste** fazendo uma inscrição

## 🔍 Verificar se Funcionou

Se estiver configurado corretamente:

- ✅ **Não aparece** mensagem de erro
- ✅ **Estatísticas carregam** automaticamente
- ✅ **É possível** fazer inscrições
- ✅ **Console mostra** "Supabase configurado com sucesso"

## 🆘 Se Não Funcionar

1. **Verifique** se copiou as credenciais corretas
2. **Verifique** se não há espaços extras
3. **Verifique** se a URL começa com `https://`
4. **Verifique** se a chave é a anônima (não service_role)
5. **Verifique** se a tabela `inscricoes` existe no Supabase

## 📝 Exemplo Completo

```javascript
// Configurar Supabase com credenciais fixas
const SUPABASE_URL = 'https://abc123def456.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYzEyM2RlZjQ1NiIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjM5MjQ5NjAwLCJleHAiOjE5NTQ4MjU2MDB9.example';
```

## 🎉 Resultado

Após configurar corretamente, o sistema funcionará automaticamente sem necessidade de configuração no frontend! 