module.exports = {
  name: 'crud',
  description:
    'Create crud for adonisjs, Controller, Models, Migrations, DocsSwagger, TestUnit',
  run: async toolbox => {
    const { print, parameters, template, strings, filesystem, system } = toolbox
    const version = parameters.options.v ? parameters.options.v : '1'

    const name = {
      first: strings.upperFirst(parameters.first),
      lower: strings.lowerCase(parameters.first),
      plural: strings.lowerCase(strings.plural(parameters.first))
    }
    print.info(`Realizando o CRUD ${name.first}...`)

    if (parameters.options.all) {
      //Verificar se o arquivo cake.json está na raiz
      const path = filesystem.path('cake.json')
      const json = await filesystem.read(path, 'json')
      for (var [model, modelv] of Object.entries(json)) {
        print.warning('Model = ' + model)
        for (var [camps, campsv] of Object.entries(modelv)) {
          if (camps === 'routes') {
            for (var [routes, routesv] of Object.entries(campsv)) {
              print.success('Rotas = ' + routes)
            }
          }
          if (camps === 'fields') {
            for (var [fields, fieldsv] of Object.entries(campsv)) {
              print.success('Campos = ' + fields)
              print.error(fieldsv)
            }
          }
        }
      }
      return print.success(`CRUD ${name.first} concluído com sucesso!`)
    }

    await template.generate({
      template: 'Controller.js',
      target: `app/Controllers/Http/Api/v${version}/${name.first}Controller.js`,
      props: { name }
    })

    await template.generate({
      template: 'Model.js',
      target: `app/Models/${name.first}.js`,
      props: { name }
    })

    await template.generate({
      template: 'Migration.js',
      target: `database/migrations/${new Date().getTime()}_${
        name.lower
      }_schema.js`,
      props: { name }
    })

    await toolbox.patching.append(
      'start/routes.js',
      `\rRoute.resource('api/v${version}/${name.plural}', 'Api/v${version}/${
        name.first
      }Controller').apiOnly();\r`
    )

    await template.generate({
      template: 'Swagger.js',
      target: `docs/controllers/api/v${version}/${name.first}Controller.yml`,
      props: { name }
    })

    await template.generate({
      template: 'Test.js',
      target: `test/unit/${name.plural}.spec.js`,
      props: { name }
    })

    await template.generate({
      template: 'UuidHook.js',
      target: `app/Models/Hooks/UuidHook.js`
    })

    print.success(`CRUD ${name.first} concluído com sucesso!`)
  }
}
