<script>
    import Option from './Option';
    export let options = [];
    export let selected = [];
    export let multiple = false;
    export let label = "";

    let counts = {};

    function handleIncrement(option) {        
        if(multiple) {
            counts[option.key] = counts[option.key] ? counts[option.key] : 0;
            counts[option.key] += 1;
            console.log(selected);
            selected = [ ...selected, option.key ];
        } else {
            selected = option.key;
            counts = {
                [option.key]: 1
            };
        }

    }

    function handleDecrement(option) {
        counts[option.key] = counts[option.key] ? counts[option.key] : 1;
        counts[option.key] -= 1;
        selected = [];
        Object.keys(counts).forEach(count => {
            for(let i = 0; i < counts[count]; i++) {
                selected.push(count);
            }
        });
    }
</script>

<h1 class="title">{label}</h1>
<div class="columns is-multiline">
    {#each options as option} 
        <div class="column">
            <Option 
                on:increment={() => handleIncrement(option)} 
                on:decrement={() => handleDecrement(option)}
                multiple={multiple}
                selected={counts[option.key]}
            >
                {option.value}
            </Option>
        </div>
    {/each}
</div>


