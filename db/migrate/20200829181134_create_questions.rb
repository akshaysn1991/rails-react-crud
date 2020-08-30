class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :pri
      t.string :question
      t.string :teaming_stage
      t.integer :appears_day
      t.integer :frequency
      t.string :type
      t.string :role
      t.boolean :required
      t.string :conditions
      t.string :mapping

      t.timestamps
    end
  end
end
