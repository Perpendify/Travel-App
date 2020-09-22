const app = require('../server/index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('Test /weatherbit endpoint', async done => {
    const response = await request.get('/weatherbit/:latlondays')
  
    expect(response.status).toBe(200)
    done()
  })

  it('Test /pixabay endpoint', async done => {
    const response = await request.get('/pixabay/:cleanLocation')
  
    expect(response.status).toBe(200)
    done()
  })
