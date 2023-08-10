
        $('#terminal_div').terminal({
            
            help:function(){
                this.echo('\n -portfolio: To see some projects made by me\n -about:     To get a description about me\n -Skills:    to get know my skills\n');
            },
            portfolio:function(){
                this.echo('CarRentalXpert: Effortlessly rent vehicles, book, pay, and drive with our user-friendly car rental app With LARAVEL/PHP.\nCareConnect: Streamline operations, appointments, and patient data with our intuitive doctor\'s office management app. LARAVEL/PHP\nTaxiTarif (OpenSource in progress): Application where you can give it a distance in map and tell you how much it cost with a TAXI \n')
            },
            about:function(){
                this.echo('I am abdelhalim lakfifi. A young developer passionate about programming, algorithms and problem solving. I spend most of the time trying to improve my way of thinking by solving problems related to algorithms as much as learning from new things about programming languages, how as much as possible to make my code better, readable and cleaner. I also like participating in communities to help people, especially beginners\n')
            },
            skills:function(){
                this.echo(`
                HTML/CSS                               Tailwindcss/Bootstrap,
                JavaScript                             ReactJs,
                PHP                                    Laravel/Livewire,
                Mysql                                  Postgresql,
                `)
            }
        }, {
            greetings: 'Welcome to my terminal \nType help to get more commands',
            name: 'js_demo',
            height: 200,
            prompt: 'abdelhalimlakfifi@root ~ \n➨ '
        });