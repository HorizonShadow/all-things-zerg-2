<script>
  import { Meteor } from 'meteor/meteor';
  import { navigate } from 'svelte-routing';
  import { Tracker } from 'meteor/tracker';

  let email = "";
  let password = "";

  Tracker.autorun(() => {
    if(Meteor.user()) {
      navigate('/admin/import');
    }
  });

  function login(e) {
    e.preventDefault();
    Meteor.loginWithPassword(email, password, err => {
      if(err) {
        console.log(err);
      } else {
        navigate("/admin/import")
      }
    });
  }
</script>

<section class="section">
  <div class="box">
    <form on:submit={login}>
      <div class="field">
        <label class="label">Email</label>
        <input class="input" bind:value={email} />
      </div>
      <div class="field">
        <label class="label">Password</label>
        <input class="input" type="password" bind:value={password}/> 
      </div>
      <button class="button is-primary" type="submit">Submit</button>
    </form>
  </div>
</section>
