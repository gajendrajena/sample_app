class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :line1
      t.string :city
      t.string :pin

      t.timestamps
    end
  end
end
