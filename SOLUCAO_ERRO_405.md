# 🔧 Solução - Erro 405 Method Not Allowed

## ❌ Problema
```
https://votacao-medicina.vercel.app/api/salvar-inscricao error 405
```

## 🔍 Diagnóstico

O erro 405 indica que o método HTTP não está sendo aceito. Isso pode acontecer por:

1. **APIs não configuradas** na Vercel
2. **Variáveis de ambiente** não configuradas
3. **Estrutura de pastas** incorreta
4. **Dependências** não instaladas

## ✅ Solução Passo a Passo

### 1. Verificar Estrutura de Arquivos

Certifique-se de que a estrutura está assim:
```
├── api/
│   ├── salvar-inscricao.js
│   ├── estatisticas.js
│   └── teste.js
├── sistema-votacao-medicina.html
├── package.json
├── vercel.json
└── README.md
```

### 2. Verificar Dependências

No `package.json`, deve ter:
```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.38.0"
  }
}
```

### 3. Configurar Variáveis de Ambiente na Vercel

1. **Acesse o painel da Vercel**
2. **Vá em "Settings" > "Environment Variables"**
3. **Adicione:**

```
SUPABASE_URL=https://xyz.supabase.co
SUPABASE_SERVICE_KEY=sua-service-role-key
```

### 4. Reimplantar na Vercel

1. **Faça commit das mudanças**
2. **Push para o GitHub**
3. **A Vercel vai fazer deploy automático**

### 5. Testar APIs

#### Teste a API de teste:
```
https://votacao-medicina.vercel.app/api/teste
```

Deve retornar:
```json
{
  "message": "API funcionando!",
  "method": "GET",
  "timestamp": "2024-01-15T..."
}
```

#### Teste a API de estatísticas:
```
https://votacao-medicina.vercel.app/api/estatisticas
```

### 6. Verificar Logs da Vercel

1. **No painel da Vercel, vá em "Functions"**
2. **Clique na função que está dando erro**
3. **Verifique os logs** para ver o erro específico

## 🚨 Problemas Comuns

### Problema 1: "Module not found"
**Solução:** Instalar dependências
```bash
npm install
```

### Problema 2: "Environment variable not found"
**Solução:** Configurar variáveis na Vercel

### Problema 3: "CORS error"
**Solução:** As APIs já têm CORS configurado

### Problema 4: "Supabase connection error"
**Solução:** Verificar URL e chave do Supabase

## 🔧 Teste Manual

### 1. Teste GET:
```bash
curl https://votacao-medicina.vercel.app/api/teste
```

### 2. Teste POST:
```bash
curl -X POST https://votacao-medicina.vercel.app/api/salvar-inscricao \
  -H "Content-Type: application/json" \
  -d '{"nome":"Teste","grupo":"A","subgrupo":"A1","data":"2024-01-15T10:00:00Z"}'
```

## 📞 Próximos Passos

1. **Teste a API de teste** primeiro
2. **Configure as variáveis** de ambiente
3. **Reimplante** na Vercel
4. **Teste o sistema** completo

## 🆘 Se Nada Funcionar

### Opção 1: Deploy Manual
```bash
npm install -g vercel
vercel login
vercel
```

### Opção 2: Verificar Supabase
1. **Acesse o painel do Supabase**
2. **Verifique se a tabela existe**
3. **Teste as políticas de segurança**

### Opção 3: Logs Detalhados
1. **Abra o console do navegador** (F12)
2. **Faça uma inscrição**
3. **Verifique os erros** no console

---

**Após seguir estes passos, o erro 405 deve ser resolvido!** 🚀 