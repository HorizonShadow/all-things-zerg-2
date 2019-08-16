<script>
    import Tracker from './Tracker';
    import { Build } from '../../lib/Build';
    let value = "";
    let builds = [];

    function computation() {
        console.log("Running computation", value);
        Meteor.subscribe('builds', value).ready();
        builds = Build.search(value).fetch();
        console.log(builds);
    }
</script>

<Tracker deps={[value]} fn={computation}>
    <label for="time">Time</label>
    <input id="time" bind:value >
</Tracker>

