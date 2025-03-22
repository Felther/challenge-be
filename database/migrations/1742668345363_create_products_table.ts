import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 150).notNullable()
      table.string('image_url').notNullable()
      table.string('type', 100).notNullable()
      table.float('price').notNullable().unsigned()
      table.string('seller', 150).notNullable()
      table.string('available_sizes').notNullable().defaultTo('')
      table.string('details').notNullable().defaultTo('')
      table.string('sport').notNullable

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
