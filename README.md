# 🏥 Sistema de Inscrição - Grupo de Práticas de Semiologia

Sistema de votação e inscrição para turmas de medicina, com controle de vagas por grupo e subgrupo.

## 🎯 Funcionalidades

- ✅ **Inscrição única** por usuário (sem duplicatas)
- ✅ **Controle de vagas** (9 por subgrupo, 45 por grupo)
- ✅ **Atualização em tempo real** dos contadores
- ✅ **Interface responsiva** e intuitiva
- ✅ **Dados centralizados** no Supabase
- ✅ **Exportação** em JSON e CSV

## 🚀 Como Usar

### 1. **Configure o Supabase**
- Crie uma conta em [supabase.com](https://supabase.com)
- Crie um novo projeto
- Crie uma tabela `inscricoes` com as colunas:
  - `id` (int, primary key, auto increment)
  - `nome` (text, not null)
  - `grupo` (text, not null)
  - `subgrupo` (text, not null)
  - `data` (timestamp, default: now())

### 2. **Configure as Credenciais**
- Abra `sistema-votacao-supabase.html`
- Substitua as credenciais nas linhas 30-31:
```javascript
const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_KEY = 'sua-anon-public-key';
```

### 3. **Configure as Políticas RLS**
No Supabase Dashboard → Authentication → Policies:
- **Desabilite RLS** temporariamente, ou
- **Crie políticas** para INSERT e SELECT:
```sql
-- Política para INSERT
CREATE POLICY "Permitir inserção" ON inscricoes
FOR INSERT WITH CHECK (true);

-- Política para SELECT  
CREATE POLICY "Permitir leitura" ON inscricoes
FOR SELECT USING (true);
```

### 4. **Faça Deploy**
- Conecte o repositório ao Vercel
- O deploy será automático

## 📊 Regras do Sistema

### **Grupos Disponíveis:**
- **Grupo A**: Terças-feiras às 13h (A1, A2, A3, A4, A5)
- **Grupo B**: Sextas-feiras às 7h (B1, B2, B3, B4, B5)

### **Limites:**
- **Subgrupo**: Máximo 9 usuários
- **Grupo**: Máximo 45 usuários (5 subgrupos × 9)
- **Total**: Máximo 90 usuários

### **Regras:**
1. **Uma inscrição por pessoa** (sem duplicatas)
2. **Não é possível alterar** a inscrição
3. **Subgrupos lotados** ficam desabilitados
4. **Grupos lotados** ficam desabilitados

## 💾 Armazenamento

- **Supabase**: Dados centralizados no banco PostgreSQL
- **Sincronização**: Tempo real para todos os usuários
- **Backup**: Exportação em JSON e CSV
- **Segurança**: Verificação de duplicatas

## 🔧 Funcionalidades Técnicas

### **Atualização Automática:**
- A cada 5 segundos
- Quando volta para a aba
- Quando a página ganha foco
- Após cada inscrição

### **Verificação de Duplicatas:**
- Verificação na etapa 1 (nome)
- Verificação na etapa 3 (subgrupo)
- Constraint única no banco (opcional)

### **Interface:**
- Contadores em tempo real
- Vagas restantes visíveis
- Cores indicativas (verde/vermelho)
- Modal responsivo

## 📁 Estrutura do Projeto

```
votacao-med/
├── sistema-votacao-supabase.html  # Arquivo principal
├── vercel.json                    # Configuração Vercel
├── package.json                   # Dependências
└── README.md                      # Documentação
```

## 🛠️ Tecnologias

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Supabase (PostgreSQL)
- **Deploy**: Vercel
- **Biblioteca**: Supabase JS Client

## 🧪 Como Testar

1. **Configure o Supabase** seguindo o guia acima
2. **Abra o sistema** no navegador
3. **Digite um nome** e clique em "Continuar"
4. **Escolha um grupo** (A ou B)
5. **Selecione um subgrupo** (A1-A5 ou B1-B5)
6. **Confirme a inscrição**
7. **Teste duplicatas** tentando o mesmo nome

## 📊 Exportação de Dados

### **JSON:**
- Clique em "📊 Exportar JSON"
- Download automático do arquivo

### **CSV:**
- Clique em "📊 Exportar CSV"
- Download automático do arquivo

## 🔒 Segurança

- **Verificação de duplicatas** em múltiplas camadas
- **Validação de limites** antes da inscrição
- **Dados centralizados** no Supabase
- **Interface protegida** contra manipulação

## 🎉 Resultado Final

Sistema completo e funcional para inscrições em grupos de práticas de semiologia, com:

- ✅ **Controle total** de vagas
- ✅ **Prevenção de duplicatas**
- ✅ **Interface intuitiva**
- ✅ **Dados centralizados**
- ✅ **Exportação de dados**
- ✅ **Atualização em tempo real**

**Pronto para uso em produção!** 🚀 