# 🗄️ Configuração Supabase - Sistema Centralizado

## 🚀 Passo a Passo para Configurar o Banco de Dados

### 1. Criar Conta no Supabase

1. **Acesse [supabase.com](https://supabase.com)**
2. **Clique em "Start your project"**
3. **Faça login com GitHub ou Google**
4. **Clique em "New Project"**

### 2. Configurar Projeto

1. **Nome do projeto**: `sistema-votacao-semiologia`
2. **Database Password**: Crie uma senha forte
3. **Region**: Escolha a mais próxima (ex: São Paulo)
4. **Clique em "Create new project"**

### 3. Criar Tabela no Banco de Dados

1. **No painel do Supabase, vá em "Table Editor"**
2. **Clique em "New Table"**
3. **Configure a tabela:**

```sql
-- Nome da tabela
inscricoes

-- Colunas
id: int8 (Primary Key, Auto Increment)
nome: text (Not Null)
grupo: text (Not Null)
subgrupo: text (Not Null)
data: text (Not Null)
timestamp: timestamptz (Default: now())

-- Políticas de segurança (RLS)
Enable Row Level Security: ✅
```

### 4. Configurar Políticas de Segurança

1. **Vá em "Authentication" > "Policies"**
2. **Clique em "New Policy"**
3. **Configure:**

```sql
-- Política para inserção
Policy Name: "Permitir inserção de inscrições"
Target Roles: public
Using Expression: true

-- Política para leitura
Policy Name: "Permitir leitura de inscrições"
Target Roles: public
Using Expression: true
```

### 5. Obter Credenciais da API

1. **Vá em "Settings" > "API"**
2. **Copie:**
   - **Project URL** (ex: `https://xyz.supabase.co`)
   - **anon public** key
   - **service_role** key (para as APIs)

### 6. Configurar Variáveis de Ambiente na Vercel

1. **No painel da Vercel, vá em "Settings" > "Environment Variables"**
2. **Adicione:**

```
SUPABASE_URL=https://xyz.supabase.co

SUPABASE_SERVICE_KEY=sua-service-role-key
```

### 7. Testar a Configuração

1. **Faça deploy na Vercel**
2. **Teste uma inscrição**
3. **Verifique se aparece na tabela do Supabase**

## 📊 Estrutura da Tabela

```sql
CREATE TABLE inscricoes (
    id BIGSERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    grupo TEXT NOT NULL,
    subgrupo TEXT NOT NULL,
    data TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);
```

## 🔒 Políticas de Segurança

```sql
-- Permitir inserção
CREATE POLICY "Permitir inserção de inscrições" ON inscricoes
FOR INSERT WITH CHECK (true);

-- Permitir leitura
CREATE POLICY "Permitir leitura de inscrições" ON inscricoes
FOR SELECT USING (true);
```

## 🎯 Vantagens do Sistema Centralizado

- ✅ **Dados centralizados** - Todos os usuários veem as mesmas inscrições
- ✅ **Visão geral** - Administrador vê todas as inscrições
- ✅ **Sincronização** - Dados sempre atualizados
- ✅ **Backup automático** - Supabase faz backup automático
- ✅ **Escalável** - Suporta milhares de inscrições
- ✅ **Gratuito** - Plano gratuito do Supabase é suficiente

## 📞 Suporte

Se encontrar problemas:

1. **Verifique as variáveis de ambiente** na Vercel
2. **Confirme as políticas de segurança** no Supabase
3. **Teste as APIs** diretamente no painel do Supabase
4. **Verifique os logs** na Vercel

## 🚀 Próximos Passos

Após configurar:

1. **Teste o sistema** com algumas inscrições
2. **Configure backup** automático (opcional)
3. **Monitore o uso** no painel do Supabase
4. **Configure alertas** se necessário

---

**Sistema 100% centralizado e pronto para produção!** 🎉 