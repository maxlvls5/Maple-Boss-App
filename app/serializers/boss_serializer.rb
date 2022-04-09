class BossSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :hp, :drop, :level
end
