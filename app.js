let superHeroData = [
  { name: 'Batman', phone: '1-800-Batman', universe: 'DC', imgUrl: 'http://static.srcdn.com/wp-content/uploads/Greatest-Superhero-Films-The-Dark-Knight.jpg'},
  { name: 'Superman', phone: '1-800-Superman', universe: 'DC', imgUrl: 'http://static2.comicvine.com/uploads/original/14/146991/5220205-3062731241-manof.jpg'},
  { name: 'Captain America', phone: '1-800-America', universe: 'Marvel', imgUrl: 'http://cdn.bgr.com/2014/04/captain-america.jpg?quality=98&strip=all'},
  { name: 'Thor', phone: '1-800-Thor', universe: 'Marvel', imgUrl: 'http://static.srcdn.com/wp-content/uploads/thor-3-ragnarok-chris-hemsworth.jpg'},
  { name: 'Ironman', phone: '1-800-Ironman', universe: 'Marvel', imgUrl: 'http://worldversus.com/img/ironman.jpg'},
  { name: 'The Winter Soldier', phone: '1-800-Winter', universe: 'Marvel', imgUrl: "http://vignette2.wikia.nocookie.net/disney-infinity/images/9/98/Winter_Soldier's_Prosthetic_Arm.png/revision/latest?cb=20140505152830"},
]

angular
.module("superHero", [])
.controller("superHeroCtrl", [superHeroController])

function superHeroController() {
  this.superHeroes = superHeroData
  this.heroSearch= ''
  }
