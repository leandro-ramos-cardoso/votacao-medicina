# 🔢 Solução: Contadores nos Botões dos Subgrupos

## 🎯 Problema
Os contadores não estão aparecendo nos botões dos subgrupos (A1, A2, etc.) no modal.

## 🧪 Teste Rápido

### 1. Teste Local
1. **Abra** `teste-contadores.html` no navegador
2. **Verifique se** os botões mostram:
   - A1 (2/9)
   - A2 (1/9)
   - A3 (0/9)
   - etc.

### 2. Teste no Sistema Principal
1. **Abra** `sistema-votacao-supabase.html`
2. **Configure o Supabase**
3. **Faça algumas inscrições**
4. **Abra o modal** e verifique os contadores

## 🔧 Debug

### Console Logs
Abra **F12** → **Console** e procure por:

```
Estatísticas atualizadas: {grupoA: 5, grupoB: 3, subgrupos: {...}}
Subgrupos calculados: {A1: 2, A2: 1, A3: 0, ...}
Criando botão A1: 2/9
Criando botão A2: 1/9
...
```

### Verificar Dados no Supabase
1. **Vá no Supabase Dashboard**
2. **Table Editor** → **inscricoes**
3. **Verifique** se os dados estão corretos:
   ```sql
   SELECT subgrupo, COUNT(*) as total 
   FROM inscricoes 
   GROUP BY subgrupo 
   ORDER BY subgrupo;
   ```

## 🚨 Possíveis Problemas

### 1. Dados não estão sendo carregados
**Sintoma**: Console mostra `estatisticas.subgrupos: {}`
**Solução**: 
- Verifique se o Supabase está configurado
- Teste a conexão
- Verifique se há dados na tabela

### 2. Cálculo incorreto
**Sintoma**: Contadores mostram 0 mesmo com dados
**Solução**:
- Verifique se o campo `subgrupo` está correto no banco
- Verifique se os dados têm o formato correto (A1, A2, etc.)

### 3. Interface não atualiza
**Sintoma**: Dados corretos no console, mas botões não mostram
**Solução**:
- Recarregue a página
- Feche e abra o modal novamente
- Clique em "🔄 Atualizar Estatísticas"

## 📊 Resultado Esperado

### Modal do Grupo A (com dados):
```
Escolha um subgrupo do Grupo A (5/45)

Grupo A: 5/45 inscrições
40 vagas restantes

[A1]          [A2]          [A3]
A1            A2            A3
2/9           1/9           0/9
7 vagas       8 vagas       9 vagas

[A4]          [A5]
A4            A5
1/9           1/9
8 vagas       8 vagas
```

## 🔄 Passos para Resolver

### 1. Verificar Dados
```javascript
// No console do navegador
console.log('Inscrições:', inscricoes);
console.log('Estatísticas:', estatisticas);
console.log('Subgrupos:', estatisticas.subgrupos);
```

### 2. Forçar Atualização
```javascript
// No console do navegador
carregarEstatisticas();
```

### 3. Testar Modal
```javascript
// No console do navegador
abrirModalSubgrupos('A');
```

## ✅ Checklist

- [ ] Dados estão sendo carregados do Supabase
- [ ] Estatísticas estão sendo calculadas corretamente
- [ ] Console mostra logs de debug
- [ ] Modal abre com contadores corretos
- [ ] Botões mostram formato "A1 (2/9)"
- [ ] Vagas restantes são mostradas
- [ ] Subgrupos lotados mostram "LOTADO"

## 🆘 Se Ainda Não Funcionar

1. **Limpe o cache** do navegador
2. **Recarregue a página**
3. **Reconfigure o Supabase**
4. **Teste com dados novos**
5. **Verifique se há erros no console** 