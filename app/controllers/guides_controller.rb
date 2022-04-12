class GuidesController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :create, :show]

    def index
        guides = Guide.all
        render json: guides, include: :bosses, status: :ok
    end


    def show
        guides = Guide.find_by(id: params[:id])
        render json: guides, status: :ok
    end

     def create 
        guide = Guide.create!(guide_params)
        render json: guide, status: :created

    end

    def update 
        guide = Guide.find(params[:id])
        guide.update(details: params[:details])
        render json: guide, status: :updated
    end

    private

    def guide_params
        params.permit(:details, :boss_id, :user_id, :title)
    end
end
