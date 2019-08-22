<script>
    import { Link } from 'svelte-routing';
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <div class="navbar-item">
      <Link to="/">
        <p>AllThingsZerg</p>
      </Link>
    </div>
    

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <Link to="/">Home</Link>
      </div>

      <div class="navbar-item">
        <Link to="/scouting">Scouting</Link>
      </div>
    </div>
  </div>
</nav>