import genshindb from 'genshin-db'
import { createRouter } from 'next-connect'
import { handler } from '../../../utils/handler'
import type { NextApiRequest, NextApiResponse } from 'next'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.get((req, res) => {
  const { artifact } = req.query
  if (typeof artifact !== 'string') return res.status(404).json({ message: 'Error en la query' })

  console.log(artifact)
  const data = genshindb.artifacts(artifact, {
    "resultLanguage": "Spanish",
    "queryLanguages": ["Spanish"]
  })
  return res.status(200).json(data)
})

export default router.handler(handler);