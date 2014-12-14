class CreateGoals < ActiveRecord::Migration
  def change
    create_table :goals do |t|
      t.string :body, null: false
      t.boolean :publicalityness, null: false, :default  => true
      t.boolean :completionocity, null: false, :default  => false
      t.integer :user_id

      t.timestamps
    end
    
    add_index :goals, :user_id
  end
end
