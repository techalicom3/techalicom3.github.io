const CART_KEY='techAliCart';
let cart=[];
try{
  const stored=JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  cart=Array.isArray(stored)?stored.filter(x=>x&&typeof x.id==='string'&&products.some(p=>p.id===x.id)).map(x=>({id:x.id,qty:Math.max(1,Number(x.qty)||1)})):[];
}catch{
  cart=[];
}
const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const money=n=>n===null||n===undefined||n===''?'PRICE ON REQUEST':'PKR '+Number(n).toLocaleString('en-PK');
const getProduct=id=>products.find(p=>p.id===id);
const getId=()=>new URLSearchParams(location.search).get('id');
function firstImage(p){return p?(p.images&&p.images.length?p.images:[p.image]).filter(Boolean)[0]||'':''}
function imageMarkup(p, cls=''){if(!p)return '';const src=firstImage(p);return `<img class="${cls}" src="${src}" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="ph" style="display:none"><i class="fa-solid fa-box"></i></span>`}
function updateCart(){const n=cart.reduce((s,x)=>s+x.qty,0);$$('[data-cart-count]').forEach(e=>e.textContent=n);}
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCart()}
function addToCart(id){const p=getProduct(id);if(!p)return;const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({id,qty:1});saveCart();toast(`${p.name} added to cart`)}
function buyNow(id){addToCart(id);location.href='checkout.html'}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);saveCart();renderCartPage();renderCheckoutSummary()}
function changeQty(id,delta){const item=cart.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(x=>x.id!==id);saveCart();renderCartPage();renderCheckoutSummary()}
function cartTotal(){return cart.reduce((sum,x)=>{const p=getProduct(x.id);return sum+(p?p.price*x.qty:0)},0)}
function cardHTML(p){
  const hasPrice = Number.isFinite(Number(p.price)) && p.price > 0;
  const photoCount = Array.isArray(p.images) ? p.images.length : 1;
  return `<article class="card" tabindex="0" role="link" data-id="${p.id}" data-name="${p.name}" data-price="${hasPrice?p.price:0}" data-category="${p.category}" data-search="${p.name} ${p.category} ${p.id}" onclick="openProduct('${p.id}')" onkeydown="if(event.key==='Enter')openProduct('${p.id}')"><div class="media">${p.badge?`<span class="badge">${p.badge}</span>`:''}<img src="${firstImage(p)}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="ph" style="display:none"><i class="fa-solid fa-box"></i></span>${photoCount>1?`<span class="photo-count"><i class="fa-regular fa-images"></i> ${photoCount} photos</span>`:''}</div><div class="cardbody"><div class="rating">★★★★★ <span>${p.rating??'—'}${p.reviews?` (${p.reviews})`:''}</span></div><div class="name">${p.name}</div><div class="meta">${p.category} • ${p.id}</div><div class="prices"><span class="price">${money(p.price)}</span>${p.oldPrice?`<span class="old">${money(p.oldPrice)}</span>`:''}</div><div class="card-actions"><button class="smallbtn" onclick="event.stopPropagation();openProduct('${p.id}')">VIEW DETAILS</button><button class="smallbtn dark" onclick="event.stopPropagation();addToCart('${p.id}')">ADD TO CART</button></div></div></article>`
}

function addToCart(id){
  const p=getProduct(id);
  if(!p)return;
  const item=cart.find(x=>x.id===id);
  if(item)item.qty++;else cart.push({id,qty:1});
  saveCart();
  toast(`${p.name} added to cart`);
}
function renderCategories(active){const holder=$('#categories');if(!holder)return;const preferred=['All','Chargers','Cables','TWS Earbuds','Headphones','Wired Earphones','Neckbands','Smartwatches','Phone Cases'];const used=new Set(products.map(p=>p.category));const cats=preferred.filter(c=>c==='All'||used.has(c));holder.innerHTML=cats.map(c=>`<button class="cat ${active===c?'active':''}" onclick="setCategory('${c.replaceAll("'","\\'")}')">${c}</button>`).join('')}
function setCategory(cat){const url=new URL('products.html',location.href);if(cat!=='All')url.searchParams.set('category',cat);location.href=url.href}
function getListingState(){const url=new URL(location.href);return {cat:url.searchParams.get('category')||'All',q:url.searchParams.get('q')||''}}
function searchFromHeader(){const input=$('#searchInput');if(!input)return;input.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const q=input.value.trim();const url=new URL('products.html',location.href);if(q)url.searchParams.set('q',q);location.href=url.href})}
let heroIndex=0, heroTimer=null, heroSlides=[];

function getHeroSlides(){
  return [
    {
      type:'promo',
      id:'promo-1',
      image:'bn1.png',
      title:'TECH ALI',
      heading:'Accessories that keep you connected.',
      desc:'Discover chargers, power banks, cables and everyday tech essentials.'
    },
    {
      type:'promo',
      id:'promo-2',
      image:'bn2.png',
      title:'TECH ALI',
       heading:'Accessories that keep you connected.',
      desc:'Find practical accessories for your everyday routine.'
    },
    {
      type:'promo',
      id:'promo-3',
      image:'bn3.png',
      title:'TECH ALI',
      heading:'Accessories that keep you connected.',
      desc:'Explore useful tech for home, work and travel.'
    },
    {
      type:'promo',
      id:'promo-4',
      image:'bn4.png',
      title:'TECH ALI',
    heading:'Accessories that keep you connected.',
      desc:'Browse the Tech Ali collection and find your next essential.'
    }
  ];
}
function renderHeroCategories(){
  const track=$('#heroTrack'),dots=$('#heroDots');
  if(!track||!dots)return;
  heroSlides=getHeroSlides();
  track.innerHTML=heroSlides.map((s,i)=>`
    <article class="hero-slide" onclick="${s.type==='product'?`openProduct('${s.id}')`:'location.href=\'products.html\''}" role="link" tabindex="0" onkeydown="if(event.key==='Enter')this.click()">
      <img src="${s.image}" alt="${s.heading}" onerror="this.onerror=null;this.src='assets/categories/category-${Math.min(i||1,8)}.svg'">
      <div class="slide-copy">
        <span class="hero-tag">${s.title}</span>
        <h1>${s.heading}</h1>
        <p>${s.desc}</p>
        <button class="btn dark" onclick="event.stopPropagation();${s.type==='product'?`openProduct('${s.id}')`:'location.href=\'products.html\''}">${s.type==='product'?'View Product':'Shop products'}</button>
      </div>
      
    </article>`).join('');
  dots.innerHTML=heroSlides.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" onclick="heroGo(${i})" aria-label="Go to slide ${i+1}"></button>`).join('');
  heroGo(0,false); startHeroAutoplay();
  const slider=$('#heroSlider');
  if(slider && !slider.dataset.bound){
    slider.dataset.bound='1';
    let startX=0,delta=0;
    slider.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;delta=0;stopHeroAutoplay()},{passive:true});
    slider.addEventListener('touchmove',e=>{delta=e.touches[0].clientX-startX},{passive:true});
    slider.addEventListener('touchend',()=>{if(Math.abs(delta)>45){delta<0?heroNext():heroPrev()}startHeroAutoplay()});
    slider.addEventListener('mouseenter',stopHeroAutoplay);slider.addEventListener('mouseleave',startHeroAutoplay);
  }
}
function heroGo(i, restart=true){
  if(!heroSlides.length)return;
  heroIndex=(i+heroSlides.length)%heroSlides.length;
  const track=$('#heroTrack');if(track)track.style.transform=`translateX(-${heroIndex*100}%)`;
  $$('.hero-dot').forEach((d,n)=>d.classList.toggle('active',n===heroIndex));
  if(restart){startHeroAutoplay()}
}
function heroNext(){heroGo(heroIndex+1)}
function heroPrev(){heroGo(heroIndex-1)}
function startHeroAutoplay(){clearInterval(heroTimer);heroTimer=setInterval(()=>heroGo(heroIndex+1,false),4800)}
function stopHeroAutoplay(){clearInterval(heroTimer);heroTimer=null}

function renderproducts(){
  const grid=$('#productGrid');
  if(!grid)return;
  const st=getListingState();
  if($('#searchInput'))$('#searchInput').value=st.q;
  const sort=$('#sortSelect')?.value||'featured';
  let list=products.filter(p=>{
    const text=`${p.name} ${p.category} ${p.id}`.toLowerCase();
    return (st.cat==='All'||p.category===st.cat)&&text.includes(st.q.toLowerCase());
  });
  if(sort==='price-low')list.sort((a,b)=>(a.price??Infinity)-(b.price??Infinity));
  if(sort==='price-high')list.sort((a,b)=>(b.price??-Infinity)-(a.price??-Infinity));
  if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
  const limit=Number(grid.dataset.homeFeaturedLimit||0);
  const displayList=limit&&!st.q&&st.cat==='All'?list.slice(0,limit):list;
  grid.innerHTML=displayList.map(cardHTML).join('');
  if($('#results'))$('#results').textContent=`${list.length} product${list.length===1?'':'s'} shown`;
  if($('[data-empty]'))$('[data-empty]').style.display=list.length?'none':'block';
  renderCategories(st.cat);
  if($('#sortSelect') && !$('#sortSelect').dataset.bound){
    $('#sortSelect').dataset.bound='1';
    $('#sortSelect').addEventListener('change',renderproducts);
  }
}
function openProduct(id){location.href=`product-details.html?id=${encodeURIComponent(id)}`}
function renderProductDetail(){
  const host=$('#productDetail');
  if(!host)return;
  const p=getProduct(getId());
  if(!p){host.innerHTML='<div class="empty">Product not found. <a href="products.html">Go to products</a></div>';return;}
  const imgs=(p.images&&p.images.length?p.images:[p.image]);
  const hasPrice=Number.isFinite(Number(p.price))&&p.price>0;
  host.innerHTML=`<div><div class="detail-gallery"><div class="detail-img"><img id="mainProductImage" src="${imgs[0]}" alt="${p.name}" onerror="this.style.opacity='.25'"></div><div class="thumbs">${imgs.map((src,i)=>`<button class="thumb ${i===0?'active':''}" onclick="setMainImage('${src.replaceAll("'","\\'")}',this)"><img src="${src}" alt="${p.name} ${i+1}" loading="lazy" onerror="this.style.opacity='.2'"></button>`).join('')}</div></div></div><div class="detail-info"><div class="kicker">${p.category} • ${p.id}</div><h1>${p.name}</h1><div class="rating">★★★★★ <span>${p.rating??'—'}${p.reviews?` based on ${p.reviews} reviews`:''}</span></div><div class="prices"><span class="price">${money(p.price)}</span>${p.oldPrice?`<span class="old">${money(p.oldPrice)}</span>`:''}</div><p class="description">${p.description}</p><div class="specgrid">${Object.entries(p.specs||{}).map(([k,v])=>`<div class="spec"><span>${k}</span><b>${v}</b></div>`).join('')}</div><div class="stock">${p.stock>0?'Available':'Out of Stock'}${p.stock?` • ${p.stock} units`:''}</div><div class="detail-actions"><button class="btn" onclick="addToCart('${p.id}')">ADD TO CART</button><button class="btn dark" onclick="buyNow('${p.id}')">BUY NOW</button></div></div>`;
  document.title=`${p.name} | Tech Ali`;
}
function setMainImage(src,btn){const main=$('#mainProductImage');if(main)main.src=src;$$('.thumb').forEach(x=>x.classList.remove('active'));btn.classList.add('active')}
function renderCartPage(){const box=$('#cartItems');if(!box)return;if(!cart.length){box.innerHTML=`<div class="empty">Your cart is empty.<br><a class="btn dark" href="products.html" style="display:inline-flex;align-items:center;margin-top:12px">Continue Shopping</a></div>`;if($('#cartGrandTotal'))$('#cartGrandTotal').textContent=money(0);return}box.innerHTML=cart.map(x=>{const p=getProduct(x.id);if(!p)return '';return `<div class="cartrow"><div class="cartimg">${imageMarkup(p)}</div><div><h4>${p.name}</h4><p>${p.id} • ${money(p.price)} each</p><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><span>${x.qty}</span><button onclick="changeQty('${p.id}',1)">+</button></div></div><div style="text-align:right"><b>${money(p.price*x.qty)}</b><button class="smallbtn" style="margin-top:10px" onclick="removeFromCart('${p.id}')">REMOVE</button></div></div>`}).join('');if($('#cartGrandTotal'))$('#cartGrandTotal').textContent=money(cartTotal())}
function renderCheckoutSummary(){const box=$('#checkoutSummary');if(!box)return;if(!cart.length){box.innerHTML='<div class="empty" style="padding:20px">Your cart is empty.</div>';if($('#checkoutTotal'))$('#checkoutTotal').textContent=money(0);return}box.innerHTML=cart.map(x=>{const p=getProduct(x.id);if(!p)return '';return `<div class="totalrow"><span>${p.name} × ${x.qty}</span><span>${money(p.price*x.qty)}</span></div>`}).join('');if($('#checkoutTotal'))$('#checkoutTotal').textContent=money(cartTotal())}
async function setupCheckout(){
  const form=$('#checkoutForm');
  if(!form)return;
  renderCheckoutSummary();

  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(!cart.length){toast('Your cart is empty');return}
    const missingPrice=cart.find(x=>{const p=getProduct(x.id);return !p||!(Number.isFinite(Number(p.price))&&Number(p.price)>0)});
    if(missingPrice){toast('Some products have no price yet. Please set their prices before checkout.');return;}

    if(!techAliSupabase){
      toast('Supabase is not configured yet');
      console.error('Configure supabase-config.js with your project URL and publishable/anon key.');
      return;
    }

    const submitButton=form.querySelector('button[type="submit"]');
    const originalText=submitButton?.textContent||'PLACE ORDER';
    if(submitButton){submitButton.disabled=true;submitButton.textContent='SAVING ORDER...';}

    try{
      const fd=new FormData(form);
      const items=cart.map(x=>{
        const p=getProduct(x.id);
        return {
          product_id:p.id,
          product_name:p.name,
          quantity:Number(x.qty),
          unit_price:Number(p.price),
          line_total:Number(p.price*x.qty)
        };
      });

      const {error}=await techAliSupabase
        .from('orders')
        .insert({
          customer_name:String(fd.get('name')||'').trim(),
          phone:String(fd.get('phone')||'').trim(),
          city:String(fd.get('city')||'').trim(),
          email:String(fd.get('email')||'').trim()||null,
          address:String(fd.get('address')||'').trim(),
          items,
          total:Number(cartTotal()),
          status:'pending'
        });

      if(error)throw error;

      cart=[];
      localStorage.removeItem(CART_KEY);
      updateCart();
      renderCartPage();
      renderCheckoutSummary();
      form.reset();
      sessionStorage.setItem('techAliOrderSuccess','1');
      location.href='order-success.html';
    }catch(error){
      console.error('Order save failed:',error);
      toast(`Order could not be saved: ${error.message||'Please try again.'}`);
      if(submitButton){submitButton.disabled=false;submitButton.textContent=originalText;}
    }
  });
}
function toast(msg){const t=$('#toast');if(!t)return;t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2200)}
function init(){searchFromHeader();updateCart();renderHeroCategories();renderproducts();renderProductDetail();renderCartPage();setupCheckout();}
init();
