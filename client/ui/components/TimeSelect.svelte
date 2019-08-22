<script>
    import Select from './select/Select';

    export let selected = [];
    const options = [
        { key: 60, value: "1:00" },
        { key: 210, value: "3:30" }
    ];
</script>

<Select 
    label="Select Time"
    options={options}
    bind:selected
/>
