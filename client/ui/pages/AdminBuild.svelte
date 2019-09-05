<script>
  import { Tracker } from 'meteor/tracker';
  import { Meteor } from 'meteor/meteor';
  import { Build } from '/lib/Build';
  import 'trix';
  import 'trix/dist/trix.css';

  export let id;

  let build;
  Tracker.autorun(() => {
    Meteor.subscribe('builds');
    build = Build.findOne({
      _id: new Mongo.ObjectID(id)
    });
  });

  function handleSubmit(e) {
    e.preventDefault();
    const reaction = e.target.elements[0].value;
    console.log(reaction);
  }
</script>

{#if Meteor.user() && build}
  <section class="section">
    <h1 class="title">{build.name}</h1>
    <div class="columns">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {#each build.buildOrder as step}
              <tr>
                <td>{Build.secondsToMinutes(step.time)}</td>
                <td>{step.unit}</td>
              </tr>
            {/each}
          </tbody>

        </table>
      </div>
      <div class="column">
        <form on:submit={handleSubmit}>
          <input type="hidden" id="reaction" name="reaction"/>
          <trix-editor input="reaction"/>
          <button class="button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </section>
{/if}