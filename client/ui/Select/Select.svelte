<script>
    import Option from './Option';
    export let options = [];
    export let selected = [];

    function handleSelect(option) {
        if(selected.includes(option.key)) {
            selected = selected.filter(s => s !== option.key);
        } else {
            selected = [ ...selected, option.key ];
        }
    }
</script>

<style>
    .columns {
        padding: 24px;
    }
</style>


<div class="columns is-multiline">
    {#each options as option} 
        <div class="column">
            <Option 
                on:click={() => handleSelect(option)} 
                selected={selected.includes(option.key)}
            >
                {option.value}
            </Option>
        </div>
        
    {/each}
</div>


