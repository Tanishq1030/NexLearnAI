import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  // return c.text('Hello Hono!')
  return c.html('<h1>SOO JA SNEHAL GANDU</h1>')
  
})

export default app
