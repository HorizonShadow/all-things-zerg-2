<script>
    import { Build } from '/lib/Build';
    import { Tracker } from 'meteor/tracker';
    import { navigate } from 'svelte-routing';
    import { Meteor } from 'meteor/meteor';
    
    let name = "";
    let buildOrder = "";
    let build = new Build();
    let user;
    Tracker.autorun(() => {
      user = Meteor.user();
    });

    function handleSubmit(e) {
        e.preventDefault();
        build.import(name, buildOrder);
    }
</script>

{#if user}
  <div class="columns">
      <div class="column">
          <form on:submit={handleSubmit}>
              <div class="field">
                  <label class="label">Name</label>
                  <input class="input" bind:value={name} /> 
              </div>
              <div class="field">
                  <label class="label">Spawning Tool Build</label>
                  <textarea class="textarea" bind:value={buildOrder}></textarea>
              </div>
              <button class="button" type="submit">Submit</button>
          </form>
      </div>
  </div>
{/if}


