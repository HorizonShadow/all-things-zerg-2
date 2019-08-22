<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let selected = 0;
</script>

<style>
    .box {
        max-width: 320px
    }
    
    .selected {
        background-color: #f5f5f5
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


<div class="box" data-badge={selected}>
    <div class="columns">
        <div class="column is-8">
            <div>
                <p>
                    <slot></slot> 
                </p>
            </div>
        </div>
        <div class="column is-4 count-container">
            <button class="button count" on:click={() => dispatch('increment')}>
                +
            </button>
            <button class="button count" on:click={() => dispatch('decrement')}>
                -
            </button>
        </div>
    </div>
</div>


