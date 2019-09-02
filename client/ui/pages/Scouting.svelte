<script>
    import Tracker from '../components/Tracker';
    import { Build } from '../../../lib/Build';
    import UnitSelect from '../components/UnitSelect';
    import TimeSelect from '../components/TimeSelect';
    
    let builds = [];
    let units = [];
    let time = 0;

    function computation() {
        Meteor.subscribe('builds').ready();
        builds = Build.search(time, units);
        console.log(builds);
    }

    $: console.log(time);

</script>

<Tracker deps={[time, units]} fn={computation}>
    <div class="columns">
        <div class="column">
            <section class="section">
                <div class="box">
                    <TimeSelect bind:selected={time} />
                    <UnitSelect race="Protoss" bind:selected={units} />
                </div>
            </section>
        </div>
        <div class="column">
            <section class="section">
                <div class="box">
                    <h1 class="title">Possible Builds</h1>
                    {#each builds as build}
                        <div class="box">
                            <h5 class="title is-5">{build.name}</h5>
                        </div>
                    {/each}
                </div>
            </section>
        </div>
    </div>
</Tracker>

