class Api::UsersController < ApplicationController
    before_action :authenticate_user!

    def index
        render json: current_user, methods: [:profile_avatar]
    end

    # private
    # def user_params
    #     .permit(:name, :email, :password)
    # end
end
