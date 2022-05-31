// alert('card task 2')


var cards = document.getElementById("card");

let cardsData = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://images.unsplash.com/photo-1652410817816-c8eea72175d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://images.unsplash.com/photo-1652280575087-c228d29b0dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  },
  {
    "albumId": 1,
    "id": 5,
    "title": "natus nisi omnis corporis facere molestiae rerum in",
    "url": "https://images.unsplash.com/photo-1588846367653-2ed808ca9c38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRlc3Rpbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  },
]
var result = "";
cardsData.forEach(obj =>{
	
	result += `			<div class="col-sm-3 offset-2 mb-2">
							<div class="card">
								<div class="card-body">
									<figure class="mycard">
										<img src="${obj.url}" class="img-fluid">
										<figcaption>
											<p class="title"> <span> ${obj.title} </span> </p>
											<span class="id"> id:${obj.id} </span>
											<span class="albumid"> albumid:${obj.albumId} </span>
										</figcaption>
										
									</figure>
								</div>
							</div>
						</div>`
	
});

cards.innerHTML = result;



