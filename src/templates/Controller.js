'use strict';

/**
 * Resourceful controller for interacting with <%= props.name.first %>
 */
const <%= props.name.first %> = use('App/Models/<%= props.name.first %>');
class <%= props.name.first %>Controller {
  async index({ response }) {
    const <%= props.name.plural %> = await <%= props.name.first %>.all();
    response.send(<%= props.name.plural %>);
  }

  async store({ request, response }) {
    const data = request.all();
    const <%= props.name.lower %> = await <%= props.name.first %>.create(data);
    response.send(<%= props.name.lower %>);
  }

  async show({ params, response }) {
    const <%= props.name.lower %> = await <%= props.name.first %>.findByOrFail('uuid', params.id);
    response.send(<%= props.name.lower %>);
  }

  async update({ params, request, response }) {
    const data = request.all();
    const <%= props.name.lower %> = await <%= props.name.first %>.findByOrFail('uuid', params.id);
    <%= props.name.lower %>.merge(data);
    await <%= props.name.lower %>.save();
    return response.send(<%= props.name.lower %>);
  }

  async destroy({ params, response }) {
    const <%= props.name.lower %> = await <%= props.name.first %>.findByOrFail('uuid', params.id);
    await <%= props.name.lower %>.delete();
    response.send({
      success: true,
      message: 'Deletado com sucesso!'
    });
  }
}

module.exports = <%= props.name.first %>Controller;
