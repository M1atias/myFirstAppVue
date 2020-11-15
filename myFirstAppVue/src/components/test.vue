<template>
<div class="test">
    {{msg}}
</div>
</template>


<script>
export default{
    data() {
        return {
            title: 'Hello Vuejs',
            user:{
                firstName:'test',
                lastName: 'test21'
            },
            myHtml: '<h4>hola vue</h4>',
            showName: true,
            tasks: [
                {title: 'eat'},
                {title: 'dinner'},
                {title: 'play'}
            ]
        }
    },
    methods:{
        saludar(name){
            alert("hello " + name)
        },
        typingEnter(e){
            console.log('Dio un enter');
        }
    },
    computed:{
        fullName(){
            return this.user.firstName + ' ' + this.user.lastName;
        }
    },
    props: {
        msg:{
            type:String,
            default: "Mensaje por defecto"
        }
    }
}
</script>

<style media="screen">
.test{
    background-color: chocolate;
}
</style>