<script>
    import Tracker from '../components/Tracker';
    import {Build} from '../../../lib/Build';
    import UnitSelect from '../components/UnitSelect';
    import TimeSelect from '../components/TimeSelect';
    import {Link} from 'svelte-routing';
    import Select from "../components/select/Select.svelte";
    import RaceSelect from "../components/RaceSelect.svelte";

    let builds = [];
    let units = [];
    let race = "zerg";
    let time = 0;

    function computation() {
        Meteor.subscribe('builds').ready();
        builds = Build.search(time, units);
        console.log(builds);
    }

    $: console.log(time);

</script>

<style>
    .hover:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
</style>


<Tracker deps={[time, units]} fn={computation}>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <RaceSelect bind:selected={race}/>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="columns">
            <div class="column">
                <div class="box">
                    <TimeSelect bind:selected={time}/>
                    <UnitSelect race="{race}" bind:selected={units}/>
                </div>
            </div>
            <div class="column">
                <div class="box">
                    <h1 class="title">Possible Builds</h1>
                    {#each builds as build}
                        <div class="box hover">
                            <Link to={`/build/${build._id}`}>
                                <h5 class="title is-5">
                                    {build.name}
                                </h5>
                            </Link>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </section>
</Tracker>

