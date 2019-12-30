<template>
    <div>
        <form  id="login-form">

            <div class="textbox">
                <i class="icon-envelope"></i>
                <input type="email"  placeholder="Email" name="email" class="inputs">
            </div>
            <input type="hidden" name="_token">
            <div class="textbox">
                <i class="icon-lock" ></i>
                <input type="password"  placeholder="Password" name="password" value="" class="inputs" autocomplete="new-password" >

            </div>

            <button id="login">Login</button>

        </form>
    </div>
</template>

<script>
export default{
    name:'login'
}
</script>

<style>
    #login{
        width: 125px;
        height: 45px;
        margin-top: 7px;
        background-color: turquoise;
        border-radius: 5px;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
    }
</style>
