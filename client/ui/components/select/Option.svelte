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

    .option-text {
        text-align: center;
    }

    .columns {
        margin: 0;
    }
</style>


<Box badge={selected} selected={selected} on:click={handleSingleSelect}>
    <div class="columns">
        <div class="column is-12">
            <div>
                <p class="option-text">
                    <slot></slot> 
                </p>
            </div>
        </div>
    </div>
    {#if multiple}
        <div class="columns is-variable is-1">
            <div class="column is-6">
                <button class="button count" on:click={() => dispatch('increment', null)}>
                    +
                </button>
            </div>
            <div class="column is-6">
                <button class="button count" on:click={() => dispatch('decrement', null)}>
                    -
                </button>
            </div>
        </div>
    {/if}
</Box>


