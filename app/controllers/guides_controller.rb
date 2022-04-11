class GuidesController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :create]

    def index
        guides = Guide.all
        render json: guides, include: :bosses, status: :ok
    end


    def show
        guides = Guide.all.where("boss_id = ?", params[:boss_id])
        render json: guides, status: :ok
    end

     def create 
        guide = Guide.create!(guide_params)
        render json: guide, status: :created

    end

    private

    def guide_params
        params.permit(:guide, :reward)
    end
end
