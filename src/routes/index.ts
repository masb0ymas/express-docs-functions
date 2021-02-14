import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()
/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  return res.json({ message: 'Express TS, Support by masb0ymas' })
})

export default router
