console.log('script.js is connected');

window.onload = ()=>{
	axios.get('http://localhost:3000/api/products').then((res) => {
		let products = res.data
		let products_ul = document.getElementById('products')
		products.forEach((p) => {
			products_ul.insertAdjacentHTML('beforeEnd', `
			<div class="product">
				<div class="title">
					<h4>${p.name}</h4>
				</div>
				<div class="small">
					<small>${p.features}</small>
				</div>
				<div class="price">
					<h3>$ ${p.cost}</h3>
				</div>
				<div class="rating">
					<span> <a href="#">buy</a> </span>
				</div>
			</div>
			`)
		})
	}).catch((err) => {
		console.log('err', err)
	})

	axios.get('http://localhost:3000/api/categories').then((res)=>{
		let categories = res.data
		let categories_ul = document.getElementById('categories')
		categories.forEach((c) => {
			categories_ul.insertAdjacentHTML('beforeEnd', `
			<li> <a href="#" class="cat" id="${c.id}"> ${c.name}</a> </li>
		`)
		})
	})

	document.addEventListener('click', (e)=> {
		if (e.target.classList.contains('cat')) {
			axios.get(`http://localhost:3000/api/click/${e.target.id}`).then((res)=>{
				let products = res.data
				let products_ul = document.getElementById('products')
				products_ul.innerHTML = ''
				products.forEach((p) =>{
					products_ul.insertAdjacentHTML('beforeEnd', `
					<div class="product">
						<div class="title">
							<h4>${p.name}</h4>
						</div>
						<div class="small">
							<small>${p.features}</small>
						</div>
						<div class="price">
							<h3>$ ${p.cost}</h3>
						</div>
						<div class="rating">
							<span> <a href="#">buy</a> </span>
						</div>
					</div>
					`)
				})
			})
		}
	})


}
