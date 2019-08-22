<script>
    export let badge;
    export let selected = false;
</script>

<style>
    .selected {
        background-color: #f5f5f5
    }
</style>


{#if badge}  
    <div class="box" data-badge={badge} class:selected on:click>
        <slot></slot>
    </div>
{:else}
    <div class="box" class:selected on:click>
        <slot></slot>
    </div>
{/if}

