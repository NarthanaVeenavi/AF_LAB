const koa = require('koa')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const request = require('koa/lib/request');

const app = new koa();

var ItemDB = [];
var PurchaceDB = [];
var ProfileDB = [];
var CartDB = [];
var WishlistDB = [];
var PromotionDB = [];

//midlewear settings
app.use(bodyParser());
app.use(cors({
    origin: false
}));
const itemrouter = new Router();
const profilerouter = new Router();
const purchaserouter = new Router();
const cartrouter = new Router();
const wishlistrouter = new Router();
const promotionrouter = new Router();

app.use(itemrouter.routes(), itemrouter.allowedMethods());
app.use(profilerouter.routes(), profilerouter.allowedMethods());
app.use(purchaserouter.routes(), purchaserouter.allowedMethods());
app.use(cartrouter.routes(), cartrouter.allowedMethods());
app.use(wishlistrouter.routes(), wishlistrouter.allowedMethods());
app.use(promotionrouter.routes(), promotionrouter.allowedMethods());

//Items

//add item
itemrouter.post('/item/add', async (ctx, next) => {
    ItemDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body

});

//edit item
itemrouter.put('/item/', async (ctx, next) => {
    var index = ItemDB.findIndex(e => e.id === ctx.request.body.id)
    ItemDB[index] = ctx.request.body
    ctx.body = ItemDB[index]
})

//view all inventory items
itemrouter.get('/item', (ctx, next) => {
    ctx.body = ItemDB
})

//get specific item
itemrouter.get('/item/:id', (ctx, next) => ctx.body = ItemDB.find(e => e.id === Number(ctx.params.id)))

//delete item
itemrouter.delete('/item', async (ctx, next) => {
    var index = ItemDB.findIndex(e => e.id === ctx.request.body.id)
    ItemDB.splice(index)
})

//profile

//add profile
profilerouter.post('/profile/add', async (ctx, next) => {
    ProfileDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body

});

//view profile
profilerouter.get('/profile', (ctx, next) => {
    ctx.body = ProfileDB
})

//cart
//add to cart
cartrouter.post('/cart/add', async (ctx, next) => {
    CartDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body

});

//view all cart items
cartrouter.get('/cart', (ctx, next) => {
    ctx.body = CartDB
})

//wishlist

//add to wishlist
wishlistrouter.post('/wishlist/add', async (ctx, next) => {
    WishlistDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body
});

//view all wishlist items
wishlistrouter.get('/wishlist', (ctx, next) => {
    ctx.body = WishlistDB
})

//purchase

//add purchase
purchaserouter.post('/purchase/add', async (ctx, next) => {
    PurchaceDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body
});

//view all purchase items
purchaserouter.get('/purchase', (ctx, next) => {
    ctx.body = PurchaceDB
})

//promtions

//add purchase
promotionrouter.post('/promotion/add', async (ctx, next) => {
    PromotionDB.push(ctx.request.body);
    console.log(JSON.stringify(ctx.request.body))
    ctx.body = ctx.request.body
});

//view all purchase items
promotionrouter.get('/promotion', (ctx, next) => {
    ctx.body = PromotionDB
})

app.listen(5000, () => {
})






