class GuideSerializer < ActiveModel::Serializer
  attributes :id, :guide, :reward, :boss_id, :user_id
end
