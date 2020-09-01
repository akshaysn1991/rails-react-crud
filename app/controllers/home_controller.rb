class HomeController < ApplicationController
    def index
    end

    def import
    	if params[:file].blank?
    		redirect_to root_path, notice: "Select CSV file first and Import"
    	else
		    Question.my_import(params[:file])
		    redirect_to home_view_data_path, notice: "Successfully Imported Data!!!"
		end
	end

	def view_data
	end

  end