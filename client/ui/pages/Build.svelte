<script>
    import { Build } from '/lib/Build';
    export let id;

    const subscription = Meteor.subscribe('build', id);
    let ready;
    let build;
    Tracker.autorun(() => {
        ready = subscription.ready();
        build = Build.findOne({ _id: id });
        console.log(build);
    })
</script>

{#if ready}
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <h1 class="title">{build.name}</h1>
                    <div class="columns">
                        <div class="column">
                            <h2 class="subtitle">Response</h2>
                            {#if build.response}

                            {:else}
                                We don't know how to beat this!
                                Click <a>here</a> to submit your own.
                            {/if}
                        </div>
                        <div class="column">
                            <h2 class="subtitle">Build Order</h2>
                            {#each build.buildOrder as step}
                                <li>{Math.floor(step.time / 60)}:{(step.time % 60).toString().padStart(2, '0')} - {step.unit}</li>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/if}
