<script>
    import Select from './select/Select';

    export let selected = [];
    const options = [
        { key: "Zerg", value: "Zerg" },
        { key: "Protoss", value: "Protoss" },
        { key: "Terran", value: "Terran"}
    ];
</script>

<Select
        label="Select Race"
        options={options}
        bind:selected
/>
