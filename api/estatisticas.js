import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Responder a requisições OPTIONS (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    // Buscar todas as inscrições
    const { data: inscricoes, error } = await supabase
      .from('inscricoes')
      .select('*')
      .order('timestamp', { ascending: false })

    if (error) {
      console.error('Erro ao buscar inscrições:', error)
      return res.status(500).json({ error: 'Erro ao buscar inscrições' })
    }

    // Calcular estatísticas
    const total = inscricoes.length
    const grupoA = inscricoes.filter(i => i.grupo === 'A').length
    const grupoB = inscricoes.filter(i => i.grupo === 'B').length

    // Estatísticas por subgrupo
    const subgrupos = {}
    for (let i = 1; i <= 5; i++) {
      subgrupos[`A${i}`] = inscricoes.filter(i => i.subgrupo === `A${i}`).length
      subgrupos[`B${i}`] = inscricoes.filter(i => i.subgrupo === `B${i}`).length
    }

    res.status(200).json({
      success: true,
      estatisticas: {
        total,
        grupoA,
        grupoB,
        subgrupos
      },
      inscricoes
    })

  } catch (error) {
    console.error('Erro interno:', error)
    res.status(500).json({ error: 'Erro interno do servidor' })
  }
} 