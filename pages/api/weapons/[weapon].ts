import genshindb from 'genshin-db'
import { createRouter } from 'next-connect'
import { handler } from '../../../utils/handler'
import type { NextApiRequest, NextApiResponse } from 'next'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.get((req, res) => {
  const { weapon } = req.query
  console.log(weapon)

  if (typeof weapon !== 'string') return res.send('Query invalida.')

  const data = genshindb.weapons(weapon)
  return res.json(data)
})

export default router.handler(handler);