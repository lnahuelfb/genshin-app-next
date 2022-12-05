import genshindb from 'genshin-db'
import { createRouter } from 'next-connect'
import { handler } from '../../utils/handler'
import type { NextApiRequest, NextApiResponse } from 'next'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.get((req, res) => {
  try {
    const data = genshindb.characters('names', { "matchCategories": true });
    return res.json(data)
  } catch (error) {
    return res.json(error)
  }
})

export default router.handler(handler)