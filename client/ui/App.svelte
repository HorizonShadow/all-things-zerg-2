<script>
    import Navbar from './components/Navbar';  
    import Scouting from './pages/Scouting';
    import { Router, Route } from 'svelte-routing';

</script>

<Router url="">
    <Navbar />
    <div class="container">
        <Route path="/scouting" component={Scouting} />
    </div>
</Router>