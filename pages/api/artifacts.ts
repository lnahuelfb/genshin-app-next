import genshindb from 'genshin-db'
import { createRouter } from 'next-connect'
import { handler } from '../../utils/handler'
import type { NextApiRequest, NextApiResponse } from 'next'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.get((req, res) => {
  const data = genshindb.artifacts('names', { "matchCategories": true, "resultLanguage": "Spanish", "queryLanguages": ["Spanish"] });

  return res.json(data)
})

export default router.handler(handler)