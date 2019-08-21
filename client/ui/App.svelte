<script>
    import Tracker from './Tracker';
    import { Build } from '../../lib/Build';
    import UnitSelect from './UnitSelect';
    import TimeSelect from './TimeSelect';
    
    let builds = [];
    let units = [];
    let time = 60;

    function computation() {
        Meteor.subscribe('builds', time, units).ready();
        builds = Build.search(time, units).fetch();
        console.log(builds)
    }

    $: console.log(units);
</script>

<Tracker deps={[time, units]} fn={computation}>
    <div class="container">
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
                    </div>
                </section>
            </div>
        </div>
    </div>
</Tracker>



