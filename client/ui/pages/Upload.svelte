<script>
    function handleSubmit(e) {
        console.log("Submitted");
    }
</script>

<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" multiple name="replays"/>
    <button type="submit">Submit</button>
</form>
