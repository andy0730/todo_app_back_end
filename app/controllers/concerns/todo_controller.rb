class TodoController < ApplicationController
    def index
    end 
    def show
        @todo_list_section="france won the world cup"
        @pomodoros= 3
        todo_id=params[:id]
        if todo_id =='1'
            @todo_list_section="practice violin"
            @pomodoros=2
        elsif todo_id =='2'
            @todo_list_section="go to korea"
            @pomodoros=2
        elsif todo_id =='3'
            @todo_list_section="read"
            @pomodoros=2
        elsif todo_id =='4'
            @todo_list_section="finish homework"
            @pomodoros=2     
        elsif todo_id =='5'
            @todo_list_section="buy sister her b-day present"
            @pomodoros=2    
        end
            #when user goes to todo/show/1 @todo_list_section will be practice violin and @pomodoros will be 2
            #when user goes to todo/show/2 @todo_list_section will be finish homework and @pomodoros will be 2
            #when user goes to todo/show/3 @todo_list_section will be read and @pomodoros will be 2
    end
end 