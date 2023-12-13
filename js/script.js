const {createApp} = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: 'Wake up at the same time every morning',
                    done: false
                },
                {
                    text: 'Journal for 15 minutes about personal or professional goals',
                    done: false
                },
                {
                    text: 'Eat breackfast and get ready for work',
                    done: false
                },
                {
                    text: 'Commute to work, if applicable',
                    done: false
                },
                {
                    text: 'Read and respond to emails',
                    done: false
                },
                {
                    text: 'Create a list of tasks for the day',
                    done: false
                },
                {
                    text: 'Work on tasks',
                    done: false
                },
                {
                    text: 'Take lunch',
                    done: false
                },
                {
                    text: 'Go for a short walk aftrer eating',
                    done: false
                },
                {
                    text: 'Return to your desk and keep working on tasks',
                    done: false
                },
                {
                    text: 'Check in with your manager about daily progress',
                    done: false
                },
                {
                    text: 'Leave work and go home, if applicable',
                    done: false
                },
                {
                    text: 'Work on hobbies for an hour',
                    done: false
                },
                {
                    text: 'Eat dinner',
                    done: false
                },
                {
                    text: 'Take a walk for 15 minutes',
                    done: false
                },
                {
                    text: 'Read for 30 minutes',
                    done: false
                },
                {
                    text: 'Go to sleep',
                    done: false
                }
            ]
        }
    },
    methods:{
        checkTask(index){
            this.toDoList[index].done = !this.toDoList[index].done;
        }
    }
}).mount('#app')