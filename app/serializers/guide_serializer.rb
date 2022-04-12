class GuideSerializer < ActiveModel::Serializer
  attributes :id, :details, :boss_id, :user_id, :title

  belongs_to :boss
end
