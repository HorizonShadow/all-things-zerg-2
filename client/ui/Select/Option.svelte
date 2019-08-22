<script>
    import { createEventDispatcher } from 'svelte';
    import Box from '../Box';
    const dispatch = createEventDispatcher();
    export let selected = 0;
    export let multiple = false;

    function handleSingleSelect() {
        console.log("Clicked", multiple, selected);
        if(multiple) return;
        if(selected) {
            dispatch('decrement', null);
        } else {
            dispatch('increment', null);
        }
    }
</script>

<style>
    .box {
        max-width: 320px
    }

    .column.is-8 {
        align-items: center;
        display: flex;
    }

    .count {
        width: 100%;
        padding: 0;
    }

    .count-container {
        padding: 0;
    }
</style>


<Box badge={selected} selected={selected} on:click={handleSingleSelect}>
    <div class="columns">
        <div class="column" class:is-8={multiple}>
            <div>
                <p>
                    <slot></slot> 
                </p>
            </div>
        </div>
        {#if multiple}
            <div class="column is-4 count-container">
                <button class="button count" on:click={() => dispatch('increment', null)}>
                    +
                </button>
                <button class="button count" on:click={() => dispatch('decrement', null)}>
                    -
                </button>
            </div>
        {/if}
        
    </div>
</Box>


