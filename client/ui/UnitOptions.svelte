<script>
    import Tracker from './Tracker';
    import { Meteor } from 'meteor/meteor';
    import UnitOption from './UnitOption';
    import { Unit } from '../../lib/Unit';

    export let race;
    export let selected = [];
    
    let units = [];

    function computation() {
        Meteor.subscribe('units').ready();
        units = Unit.find({
            race
        }).fetch();
    }

    function handleSelect(unit) {
        if(selected.includes(unit.name)) {
            selected = selected.filter(s => s !== unit.name);
        } else {
            selected = [ ...selected, unit.name ];
        }
    }
</script>

<Tracker deps={[race]} fn={computation}>
    {#each units as unit}
        <UnitOption 
            name={unit.name} 
            selected={selected.includes(unit.name)} 
            on:click={() => handleSelect(unit)}
        />
    {/each}
</Tracker>