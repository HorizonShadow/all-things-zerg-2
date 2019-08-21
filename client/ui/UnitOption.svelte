<script>
    export let name;
    export let selected = false;
</script>

<style>
    .box {
        max-width: 320px
    }
    
    .selected {
        background-color: #f5f5f5
    }
</style>


<div class="box" on:click class:selected>
    <p>{name}</p>
</div>