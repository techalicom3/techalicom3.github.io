# Tech Ali — Supabase Order Setup

The storefront is a static GitHub Pages site. Checkout writes each order into `public.orders` in Supabase.

## 1. Create the database table

In Supabase Dashboard, open **SQL Editor**, create a new query, paste the contents of `supabase-setup.sql`, and run it.

After running it, open **Table Editor → orders**. Keep this page for reviewing incoming orders.

## 2. Get the browser-safe key

Open **Project Settings → API**. Copy:

- **Project URL**
- **Publishable key** (or the legacy `anon` public key if your project still shows that name)

Do **not** copy or publish the `service_role` / secret key. The website must only use the publishable/anon key.

## 3. Put the values in the website

Open `supabase-config.js` and replace:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_PUBLISHABLE_KEY = 'YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY';
```

with your actual values. For example:

```js
const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'YOUR-PUBLISHABLE-OR-ANON-KEY';
```

Commit/push the updated files to GitHub Pages.

## 4. Test an order

Add a product to cart → Checkout → fill in the delivery details → click **PLACE ORDER**.

A successful submission opens `order-success.html`. In Supabase, a new row appears in **orders** with:

- customer name
- phone
- city
- email
- delivery address
- product/cart items as JSON
- total amount
- `pending` status
- creation date/time

The public website does not have permission to read, update, or delete customer orders; it only has permission to insert a new pending order. This is enforced with PostgreSQL RLS.
