class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    before_action :authorized
  
    private
    def render_invalid(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
  
    def authorized
      
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
  
  
  end