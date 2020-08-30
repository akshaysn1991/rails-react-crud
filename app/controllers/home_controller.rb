class HomeController < ApplicationController
    def index

    end

    def import
	    Question.my_import(params[:file])
	    redirect_to root_url, notice: "Successfully Imported Data!!!"
	end

	def view_data
	end

  end