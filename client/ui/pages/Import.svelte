<script>
    import { Build } from '/lib/Build';
    let name = "";
    let buildOrder = "";
    let build = new Build();

    function handleSubmit(e) {
        e.preventDefault();
        build.import(name, buildOrder);
    }
</script>

<div class="columns">
    <div class="column">
        <form on:submit={handleSubmit}>
            <div class="field">
                <label class="label">Name</label>
                <input class="input" bind:value={name} /> 
            </div>
            <div class="field">
                <label class="label">Spawning Tool Build</label>
                <textarea class="textarea" bind:value={buildOrder}></textarea>
            </div>
            <button class="button" type="submit">Submit</button>
        </form>
    </div>
</div>



