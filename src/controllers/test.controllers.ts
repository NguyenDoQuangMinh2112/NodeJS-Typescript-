import { RequestHandler } from 'express'
interface Test {
  title?: string
  text?: string
}
const test: RequestHandler<unknown, unknown, Test, unknown> = async (req, res, next) => {
  try {
    res.send('hello')
  } catch (error) {
    next(error)
  }
}
