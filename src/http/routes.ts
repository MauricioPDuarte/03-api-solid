import { FastifyInstance } from 'fastify'
import { register } from './controllers/register.controller'

export async function appRouter(app: FastifyInstance) {
  app.post('/users', register)
}
