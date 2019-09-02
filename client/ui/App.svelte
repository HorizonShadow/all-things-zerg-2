<script>
    import Navbar from './components/Navbar';  
    import Scouting from './pages/Scouting';
    import Import from './pages/Import';
    import AdminLogin from './pages/AdminLogin';
    import AdminBuilds from './pages/AdminBuilds';
    import AdminBuild from './pages/AdminBuild';
    import { Router, Route } from 'svelte-routing';
</script>

<Router url="">
    <Navbar />
    <div class="container">
        <Route path="/scouting" component={Scouting} />
        <Route path="/admin/import" component={Import} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/builds" component={AdminBuilds} />
        <Route path="/admin/build/:id" component={AdminBuild} />
    </div>
</Router>