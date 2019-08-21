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
    <TimeSelect bind:selected={time} />
    <UnitSelect race="Protoss" bind:selected={units} />
</Tracker>



