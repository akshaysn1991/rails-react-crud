class Api::V1::QuestionsController < ApplicationController
	def index
	  render json: Question.all
	end
	
	def create
	  question = Question.create(question_params)
	  render json: question
	end
	
	def destroy
	  Question.destroy(params[:id])
	end
	
	def update
	  question = Question.find(params[:id])
	  question.update_attributes(question_params)
	  render json: question
	end
	
	private
	
	def question_params
	  params.require(:question).permit(:id, :pri, :question, :role, :mapping)
	end
end

