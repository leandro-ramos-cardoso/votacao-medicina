import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Responder a requisições OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { nome, grupo, subgrupo, data } = req.body

    // Validar dados obrigatórios
    if (!nome || !grupo || !subgrupo || !data) {
      return res.status(400).json({ 
        error: 'Dados incompletos: nome, grupo, subgrupo e data são obrigatórios' 
      })
    }

    // Verificar se o usuário já se inscreveu
    const { data: inscricaoExistente, error: errorBusca } = await supabase
      .from('inscricoes')
      .select('*')
      .eq('nome', nome)
      .single()

    if (errorBusca && errorBusca.code !== 'PGRST116') {
      return res.status(500).json({ error: 'Erro ao verificar inscrição existente' })
    }

    if (inscricaoExistente) {
      return res.status(409).json({ error: 'Usuário já realizou inscrição' })
    }

    // Verificar limite do subgrupo
    const { data: inscricoesSubgrupo, error: errorSubgrupo } = await supabase
      .from('inscricoes')
      .select('*')
      .eq('subgrupo', subgrupo)

    if (errorSubgrupo) {
      return res.status(500).json({ error: 'Erro ao verificar limite do subgrupo' })
    }

    if (inscricoesSubgrupo.length >= 9) {
      return res.status(409).json({ error: 'Subgrupo lotado' })
    }

    // Verificar limite do grupo
    const { data: inscricoesGrupo, error: errorGrupo } = await supabase
      .from('inscricoes')
      .select('*')
      .eq('grupo', grupo)

    if (errorGrupo) {
      return res.status(500).json({ error: 'Erro ao verificar limite do grupo' })
    }

    if (inscricoesGrupo.length >= 45) {
      return res.status(409).json({ error: 'Grupo lotado' })
    }

    // Salvar inscrição
    const { data: novaInscricao, error: errorSalvar } = await supabase
      .from('inscricoes')
      .insert([{
        nome,
        grupo,
        subgrupo,
        data,
        timestamp: new Date().toISOString()
      }])
      .select()

    if (errorSalvar) {
      console.error('Erro ao salvar:', errorSalvar)
      return res.status(500).json({ error: 'Erro ao salvar inscrição' })
    }

    res.status(200).json({ 
      success: true, 
      message: 'Inscrição realizada com sucesso',
      data: novaInscricao[0]
    })

  } catch (error) {
    console.error('Erro interno:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
} 