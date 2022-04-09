class GuidesController < ApplicationController
    before_action :authorized

    def index
        guides = Guide.all
        render json: guides, include: :bosses, status: :ok
    end


    def show
        reviews = Guide.all.where("boss_id = ?", params[:recipe_id])
        render json: reviews, status: :ok
    end
end
