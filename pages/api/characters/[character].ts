import genshindb from 'genshin-db'
import { createRouter } from 'next-connect'
import { handler } from '../../../utils/handler'
import type { NextApiRequest, NextApiResponse } from 'next'

const router = createRouter<NextApiRequest, NextApiResponse>()

router.get((req, res) => {
  const { character } = req.query
  console.log(character)

  if (typeof character !== 'string') return res.send('Query invalida.')

  const data = genshindb.characters(character, {'resultLanguage': 'Spanish'})
  return res.json(data)
})

export default router.handler(handler);