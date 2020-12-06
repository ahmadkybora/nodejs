<template>
    <div class="card">
    	<div class="card-header">
			Add Book
		</div>
        <div class="card-body">
            <form action="/books/add" method="post">
                <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" name="name" value="<%= name %>" autocomplete="off">
                </div>
                <div class="form-group">
                    <label>Author:</label>
                    <input type="text" class="form-control" name="author" value="<%= author %>" autocomplete="off">
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-info" value="Add"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "add.vue"
    }
</script>

<style scoped>

</style>