# Don Felix Meat Market website

Static one-page website for Don Felix Meat Market in Los Angeles.

## Updating the menu

Menu prices and item names are in the `#menu` section of `index.html`. The text-order builder has a matching list of items in the `<select id="order-item">` element. When an item changes, update both places.

Current BBQ schedule shown on the site:

- Tuesday
- Saturday
- Sunday
- Brisket on Sunday

## Visitor analytics

The page includes Vercel Web Analytics for visitor and page-view reporting. In Vercel:

1. Open the Don Felix project.
2. Select **Analytics**.
3. Enable Web Analytics.
4. Redeploy the site.

Customer-action events are already attached to the call, text, directions, Instagram, reviews, catering and order-builder buttons. Vercel custom events require a plan that supports them.

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
- `order_builder_submit`
- `catering_text_click`
- `google_reviews_click`
- `instagram_click`

Website analytics can count a tap on a phone or text link. It cannot confirm that the person completed a call or sent a text.

## Content still worth adding

- Real photos of the family, butcher counter, smokers and finished food
- The family’s exact smoking wood, seasoning and preparation details, if they want those public
- A confirmed price for mac and cheese
- Current prices for the marinated butcher-counter meats
- Holiday turkey sizes, pricing and order deadlines
