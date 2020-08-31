class Question < ApplicationRecord
  require 'csv'
  require 'activerecord-import/base'
  require 'activerecord-import/active_record/adapters/postgresql_adapter'

  def self.my_import(file)
    questions = []
    mappings = []
    roles = []
    
    CSV.foreach(file.path, headers: true) do |row|
      questions << Question.new({ pri: row['Pri'], question: row['Question'], teaming_stage: row['Teaming Stages'],
      	                        appears_day: row['Appears (Day)'], frequency: row['Frequency'], question_type: row['Type'],
      	                        role: row['Role'], required: row['Required?'], conditions: row['Conditions'], mapping: row['Mapping'] })
      mappings << Mapping.new({ name: row['Mapping']})
      roles << Role.new(name: row['Role'])
    end
    Question.import questions, recursive: true
    Mapping.import mappings.uniq {|m| m.name}, recursive: true
    Role.import roles.uniq {|m| m.name}, recursive:true
   end
end
