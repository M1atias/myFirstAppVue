<template>
<div>
<div v-text="title"></div>
<div v-if="!showName">
<p>No puedo mostrar nombre</p>
</div>
<div v-else>
    <p>{{user.firstName}}</p>
</div>
<br>
<ul>
    <li v-for= "task in tasks">
        {{task.title}}
    </li>
</ul>
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
    }
}
</script>

<style media="screen">

</style>