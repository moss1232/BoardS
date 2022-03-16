class Api::UsersController < ApplicationController
      before_action :authenticate_user!

    def index
        render json: current_user, methods: [:profile_avatar]
    end

    def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors, status: 422
    end
  end

    private
    def user_params
        params.permit(:name, :avatar)
    end
end
