class GuidesController < ApplicationController
    before_action :authorized
    skip_before_action :authorized, only: [:index, :create, :show, :update, :destroy]

    def index
        guides = Guide.all
        render json: guides, include: :bosses, status: :ok
    end


    def show
        guides = Guide.find_by(id: params[:id])
        render json: guides, status: :ok
    end

     def create 
        guide = Guide.create!(create_params)
        render json: guide, status: :created

    end

    def update 
        guide = Guide.find(params[:id])
        guide.update(update_params)
        render json: guide, status: :ok
    end

    def destroy
        review = Guide.find(params[:id]).destroy
        guide_id = params[:id]
        render json: guide_id, status: :ok
     
        
    end

    private

    def create_params
        params.permit(:details, :boss_id, :user_id, :title)
    end

    def update_params
        params.permit(:title, :details, :boss_id)
    end
end
