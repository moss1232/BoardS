module Api
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      private
      
      def sign_up_params
        params.permit(:name, :email, :password, :password_confirmation)
      end
      
      def sign_in_params
        params.permit(:email, :password)
      end
    end
  end
end
