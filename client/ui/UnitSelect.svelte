<script>
    import Tracker from './Tracker';
    import { Meteor } from 'meteor/meteor';
    import { Unit } from '../../lib/Unit';
    import Select from './Select/Select';

    export let race;
    export let selected = [];
    
    let units = [];
    let options = [];

    function computation() {
        Meteor.subscribe('units').ready();
        units = Unit.find({
            race
        }).fetch();
        options = units.map(unit => {
            return {
                key: unit.name,
                value: unit.name
            }
        });
    }
</script>

<Tracker deps={[race]} fn={computation}>
    <Select options={options} bind:selected multiple label="Select Units"/>
</Tracker>