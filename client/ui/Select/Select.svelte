<script>
    import Option from './Option';
    export let options = [];
    export let selected;
    export let multiple = false;

    function handleSelect(option) {
        console.log(selected);
        if(multiple) {
            if(selected.includes(option.key)) {
                selected = selected.filter(s => s !== option.key);
            } else {
                selected = [ ...selected, option.key ];
            }
        } else {
            selected = option.key;
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
                selected={multiple ? selected.includes(option.key) : selected === option.key}
            >
                {option.value}
            </Option>
        </div>
        
    {/each}
</div>


