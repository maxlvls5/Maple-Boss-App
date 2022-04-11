class GuideSerializer < ActiveModel::Serializer
  attributes :id, :details, :reward, :boss_id, :user_id
end
