class GuideSerializer < ActiveModel::Serializer
  attributes :id, :boss, :guide, :reward, :boss_id, :user_id
end
