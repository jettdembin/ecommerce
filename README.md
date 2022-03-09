# Ecommerce Website Landing Page

This landing page was built with React.js

# LIQUID CHALLENGE QUESTIONS AND ANSWERS


{% comment %} Password for website is “password”
1.	‘Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.’

Once logged in through Shopify Partners and into the selected website, you must navigate to Sales Channels and into Themes. Then you must click Actions on the desired theme that needs to be edited. It will give you a dropdown from which you will want to choose edit code. 

Once chosen, you will go to the section that needs to be edited. Please see a slider “Section” I added to a Shopify Homepage that I created. https://hillside-coffee2.myshopify.com/ {% endcomment %}

<div class="testimonial-slider">

    {% for block in section.blocks %}

    <div class="testimonial-card">
        <div class="testimonial-icon">
            {% render 'icon-quotes' %}
        </div>
        <div class="testimonial-text">
            {{block.settings.text}}
        </div>
        <div class="testimonial-image">
            <img src="{{block.settings.image | img_url: '300x'}}" />
        </div>
        <div class="testimonial-name">
            {{block.settings.name}}
        </div>
    </div>

    {% endfor %}

</div>


{% schema %}
    {
        "name": "Testimonial Slider",
        "settings": [],
        "presets": [
            {
                "name": "Testimonial Slider"
            }
        ],
        "blocks": [
            {
                "type": "testimonial",
                "name": "Testimonial Card",
                "settings": [
                    {
                        "id": "text",
                        "label": "Text",
                        "type": "richtext"
                    },
                    {
                        "id": "name",
                        "label": "Name",
                        "type": "text"
                    },
                    {
                        "id": "image",
                        "label": "image",
                        "type": "image_picker"
                    }
                ]
            }
        ]
    }
{% endschema %}


{% comment %} 2.	“How would you add the collection featured image as a banner on the collection liquid template?” 
{% endcomment %}

First you must open the /sections/collection-template.liquid file and look for code that has the collection.title and collection.description. For example:
<header class="section-header">
  <h1 class="section-header--title h1">{{ collection.title }}</h1>
  <div class="rte rte--header">
    {{ collection.description }}
  </div>
</header>

Then you must add a conditional to show the image if there is one. For example:
<header class="section-header">
  <h1 class="section-header--title h1">{{ collection.title }}</h1>
  <div class="rte rte--header">
    {{ collection.description }}
  </div>
  {% if collection.image %}<div><img src="{{ collection.image | img_url: 'medium' }}" /></div>{% endif %}
</header>

{% comment %} 
3.	 a simple pagination container, "< 1 2 ... 5 >". 
{% endcomment %}


{%- paginate blog.articles by 5 -%}
  {%- for product in collection.products -%}
    <!-- show product details here -->
  {%- endfor -%}

  {{ paginate | default_pagination: next: 'Older', previous: 'Newer' }}
{%- endpaginate -%}


{% comment %} 
4. “Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.” 
{% endcomment %}


{%- assign featured_image = product.featured_image -%}
{%- assign product_id = product.id -%}

{%- assign product_title = product.title -%}

{%- assign product_handle = product.handle -%}

{%- assign product_price = product.url -%}


{% comment %} 5.	Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later: {% endcomment %}


{% assign products = 'fruit:apple,vegetable:carrot,cloth:t-shirt,denim:jeans' %}

{% assign objArr = products | split: ',' %}

{% assign keyArr = ''%}
{% assign valArr = ''%}


{% for obj in objArr %}
    {% assign key = obj | split: ':' | first %}
    {% assign value = obj | split: ':' | last %}
    {% assign keyArr = keyArr| append: ',' | append: key  %}
    {% assign valArr = valArr| append: ',' | append: value  %}
{% endfor %}

{% assign keyArr = keyArr | remove_first: ',' | split: ',' %}
{% assign valArr = valArr | remove_first: ',' | split: ',' %}


{% for obj in objArr %}
    {{keyArr[forloop.index0]}} :  {{valArr[forloop.index0]}}
    <br/>
{% endfor %}

