<script>
  import { Tracker } from 'meteor/tracker';
  import { Meteor } from 'meteor/meteor';
  import { Build } from '/lib/Build';

  export let id;

  let build;
  Tracker.autorun(() => {
    console.log(id);
    Meteor.subscribe('builds');
    build = Build.findOne({
      _id: new Mongo.ObjectID(id)
    });
    console.log(Build.find({}).fetch());
    console.log(build, new Mongo.ObjectID(id));
  });

  $: console.log(build);
</script>

{#if Meteor.user() && build}
  <section class="section">
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
      <div class="column"></div>
    </div>
  </section>
{/if}