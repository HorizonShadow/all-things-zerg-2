<script>
    import Tracker from './Tracker';
    import { Build } from '../../lib/Build';
    import UnitOptions from './UnitOptions';
    let value = "";
    let builds = [];
    let selected = [];

    function computation() {
        Meteor.subscribe('builds', value, selected).ready();
        builds = Build.search(value, selected).fetch();
        console.log(builds)
    }

    $: console.log(selected);
</script>

<Tracker deps={[value, selected]} fn={computation}>
    <label for="time">Time</label>
    <input id="time" bind:value >
</Tracker>

<UnitOptions race="Protoss" bind:selected={selected} />

