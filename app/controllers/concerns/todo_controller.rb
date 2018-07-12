class TodoController < ApplicationController
    def index
    end 
    def show
        @todo_list_section="france won the world cup"
        @pomodoros= 3
        @todo= Todo.find_by_id(params[:id]) 
            #when user goes to todo/show/1 @todo_list_section will be practice violin and @pomodoros will be 2
            #when user goes to todo/show/2 @todo_list_section will be finish homework and @pomodoros will be 2
            #when user goes to todo/show/3 @todo_list_section will be read and @pomodoros will be 2
    end
    def edit
        
    end
    def new
    end
    def create
        t=Todo.new 
        t.description= params['description']
        t.pomodoro_estimate= params['pomodoro_estimate']
        t.save
        redirect_to "/todo/index"
    end
end