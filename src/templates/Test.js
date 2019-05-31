const { test, trait } = use('Test/Suite')('<%= props.name.first %>')

trait('Test/ApiClient');
trait('Auth/Client');

test('we can register a new <%= props.name.first %>', async ({ client }) => {
  const response = await client
    .post('/api/v1/<%= props.name.plural %>')
    .send({})
    .end();
  response.assertStatus(200);
  response.assertJSONSubset({});
})

test('validation: we can register a new user', async ({ client }) => {
  const response = await client
    .post('/api/v1/<%= props.name.plural %>')
    .send({})
    .type('json')
    .end();
  response.assertStatus(400);
})

test('we can get a specific <%= props.name.first %>', async ({ client }) => {
  const <%= props.name.lower %> = await Factory.model('App/Models/<%= props.name.first %>').create();

  const response = await client
    .get(`/api/v1/<%= props.name.plural %>/${<%= props.name.lower %>.uuid}`)
    // .loginVia(user)
    .end();
  response.assertStatus(200);
  response.assertJSON({});
})

test('we can change a specific <%= props.name.first %>', async ({ client }) => {
  const <%= props.name.lower %> = await Factory.model('App/Models/<%= props.name.first %>').create();

  const response = await client
    .put(`/api/v1/<%= props.name.plural %>/${<%= props.name.lower %>.uuid}`)
    // .loginVia(user)
    .send({})
    .end();
  response.assertStatus(200);
  response.assertJSON({});
})
