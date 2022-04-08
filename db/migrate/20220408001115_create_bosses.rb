class CreateBosses < ActiveRecord::Migration[6.1]
  def change
    create_table :bosses do |t|
      t.string :name
      t.string :image
      t.string :hp
      t.string :drop
      t.integer :level

      t.timestamps
    end
  end
end
