<script>
  import { Tracker } from 'meteor/tracker';
  import { Meteor } from 'meteor/meteor';
  import { Link, navigate } from 'svelte-routing';
  import { Build } from '/imports/Build';

  let builds = [];
  Tracker.autorun(() => {
    if(!Meteor.user()) {
      navigate("/admin/login");
    }
    Meteor.subscribe('builds').ready();
    builds = Build.find({}).fetch();
  });
</script>

{#if Meteor.user()}
  <section class="section">
    <div class="box">
      {#each builds as build}
        <div class="box">
          <Link to={`/admin/build/${build._id}`}>
            <h1 class="title">{build.name}</h1>
          </Link>
        </div>
      {/each}
    </div>
  </section>
{/if}