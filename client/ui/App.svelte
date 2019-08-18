<script>
    import Tracker from './Tracker';
    import { Build } from '../../lib/Build';
    import UnitOptions from './UnitOptions';
    let value = "";
    let builds = [];

    function computation() {
        Meteor.subscribe('builds', value).ready();
        builds = Build.search(value).fetch();
    }
</script>

<Tracker deps={[value]} fn={computation}>
    <label for="time">Time</label>
    <input id="time" bind:value >
</Tracker>

<UnitOptions race="Protoss"/>

