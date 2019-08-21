<script>
    import Select from './Select/Select';

    export let selected = [];
    options = [
        { key: 60, value: "1:00" },
        { key: 210, value: "3:30" }
    ];
</script>

<Select 
    label="Select Time"
    options={options}
    bind:selected
/>
