# Don Felix Meat Market website

Static one-page website for Don Felix Meat Market in Los Angeles.

The site represents the whole store: the butcher counter, marinated meats, house-made salsa and guacamole, groceries, drinks, snacks, BBQ and catering. Customer tools include a text-order builder, a BBQ quantity estimator, reheating instructions and a raw-meat temperature guide.

## Updating the menu

The page has two clearly separated price areas: raw and marinated meat sold inside the market in the `#store` section, and cooked BBQ in the `#menu` section. The text-order builder has matching groups in the `<select id="order-item">` element. When an item changes, update the relevant price area and the matching order option.

Butcher-case prices read from the supplied store photos:

- Fresh beef ribs: $12.99/lb
- Fresh short ribs: $14.99/lb
- Marinated chuck roll: $10.99/lb
- Marinated chicken legs: $4.99/lb

Several other case labels were not clear enough to read, so those prices were intentionally left off the website. Because counter prices can change, the public page tells customers to text for confirmation.

Current BBQ schedule shown on the site:

- Tuesday
- Saturday
- Sunday
- Brisket on Sunday

The “How We Cook” section also lists the family’s approximate smoking times and the seasonings and marinades they identified: Santa Maria seasoning, Chef Merito Carne Asada Seasoning, Goya Mojo Criollo and Goya Naranja Agria. Keep the word “approximate” with the smoking times because meat size, weather and the smoker can change a cook. Do not claim that every product is used on every meat.

## Visual direction and reviews

The public page uses a blackboard-and-chalk design. The store and kitchen snapshots supplied while planning the site are references only and do not appear in the page. The only branded image used publicly is a polished chalkboard link preview for text messages and social sharing.

The reviews section uses short excerpts from real customer reviews supplied by the family. Keep the customer names attached to the correct excerpts, do not invent ratings or review totals, and link visitors to Google to read the complete reviews.

## Visitor analytics

The page includes Vercel Web Analytics for visitor and page-view reporting. In Vercel:

1. Open the Don Felix project.
2. Select **Analytics**.
3. Enable Web Analytics.
4. Redeploy the site.

Customer-action events are already attached to the call, text, directions, navigation, Instagram, reviews, catering and order-builder buttons. The site also records one privacy-safe view event the first time each main section enters the screen. Vercel custom events currently require a Pro or Enterprise plan; page views are available on all Vercel plans. If the project uses a free Vercel plan, add the optional Google Analytics ID below to see the action events there.

## Optional Google Analytics 4

To send the same customer-action events to Google Analytics, create a GA4 web data stream and place its measurement ID in this tag near the top of `index.html`:

```html
<meta name="google-analytics-id" content="G-XXXXXXXXXX">
```

Leave the value blank if Google Analytics should stay disabled. Never place customer names, phone numbers or order messages in analytics events.

## Events tracked

- `text_order_click`
- `call_shop_click`
- `directions_click`
- `navigation_click`
- `section_view`
- `order_builder_start`
- `order_builder_submit`
- `catering_text_click`
- `google_reviews_click`
- `instagram_click`
- `bbq_menu_click`
- `store_section_click`
- `butcher_case_text_click`
- `serving_estimator_use`

Website analytics can count a tap on a phone or text link. It cannot confirm that the person completed a call or sent a text.

## Content still worth confirming

- The wood used in the smokers, if the family wants that public
- A confirmed price for mac and cheese
- Any butcher-counter prices not legible in the supplied photos
- Current prices and container sizes for salsa and guacamole
- Holiday turkey sizes, pricing and order deadlines
