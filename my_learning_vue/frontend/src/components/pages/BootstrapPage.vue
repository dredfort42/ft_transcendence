<template>
	<div>
		<h1>Это страница поста BOOTSTRAP</h1>
		<button type="button" class="btn btn-primary">Primary</button>
		<button type="button" class="btn btn-secondary">Secondary</button>
		<button type="button" class="btn btn-success">Success</button>
		<button type="button" class="btn btn-danger">Danger</button>
		<button type="button" class="btn btn-warning">Warning</button>
		<button type="button" class="btn btn-info">Info</button>
		<button type="button" class="btn btn-light">Light</button>
		<button type="button" class="btn btn-dark">Dark</button>
		<button type="button" class="btn btn-link">Link</button>
		<div class="spinner-border text-primary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-secondary" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-success" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-danger" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-warning" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-info" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-light" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<div class="spinner-border text-dark" role="status">
			<span class="visually-hidden">Loading...</span>
		</div><br><br>
		<button class="btn btn-primary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
			<span class="visually-hidden">Loading...</span>
		</button>
		<button class="btn btn-primary" type="button" disabled>
			<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...
		</button>
		<div>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
					</li>
					<li class="nav-item">
					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
					</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
				</div>
			</div>
			</nav>
		</div>
		<i class="bi-alarm" style="font-size: 50px;"></i>&nbsp;
		<i class="bi bi-alarm-fill" style="font-size: 50px;"></i>
		<i class="bi bi-alarm-fill" style="font-size: 50px;color:green;"></i>
	</div>
</template>

<script lang="ts">

</script>

<style scoped>

</style>