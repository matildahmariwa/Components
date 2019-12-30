<template>
    <div>
        <input type="name" placeholder="Username" name="name"  class="inputs"> <br>
        <input type="password" placeholder="Password" name="password" id="password" class="inputs" autocomplete="new-password">
        <br>
        <button id="submit">Submit</button>
    </div>
</template>

<script>
export default{
    name:'signUp'
}
</script>

<style>
    .inputs {
        border: none;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
        height: 36px;
        width: 208px;
        margin-bottom: 3px;
        margin-top: 20px;
    }
    #submit{
        width: 125px;
        height: 45px;
        margin-top: 7px;
        background-color: turquoise;
        border-radius: 5px;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    }
</style>
