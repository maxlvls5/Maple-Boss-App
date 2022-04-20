class BossesController < ApplicationController
    skip_before_action :authorized


    def index
        bosses = Boss.all
        render json: bosses, include: :guides, status: :ok
    end

    def show
        recipe = Boss.find_by(id: params[:id])
        render json: guide, status: :ok
    end
end
