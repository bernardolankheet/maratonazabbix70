// Função para gerar vendas crescentes aleatórias para cada produto
function gerarVendasCrescentes(vendas, itens) {
    itens.forEach(function(item) {
        var incremento = Math.floor(Math.random() * 41); // Incremento aleatório entre 0 e 40
        vendas[item.name] += incremento; // Incrementa a venda de cada produto
    });
    return vendas;
}

// Função para resetar as vendas no final do dia (simulado como meia-noite)
function resetarVendasNoFinalDoDia(vendas, itens) {
    var agora = new Date();
    // Verifica se são 00:00h
    if (agora.getHours() === 0 && agora.getMinutes() === 0) {
        itens.forEach(function(item) {
            vendas[item.name] = 0; // Reseta as vendas para 0
        });
    }
    return vendas;
}

// Exemplo de entrada para as stores e itens
var stores = [
    { "name": "Graph-ic Pizza" },
    { "name": "LLD Pies" }
];

var itens = [

    {"id": 1,"name": "Classic Margherita Pizza","ingredients": ["Pizza dough","Tomato sauce","Fresh mozzarella cheese","Fresh basil leaves","Olive oil","Salt and pepper to taste"],"instructions": ["Preheat the oven to 475°F (245°C).","Roll out the pizza dough and spread tomato sauce evenly.","Top with slices of fresh mozzarella and fresh basil leaves.","Drizzle with olive oil and season with salt and pepper.","Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.","Slice and serve hot."], "prepTimeMinutes": 20,"cookTimeMinutes": 15,"servings": 4,"difficulty": "Easy","cuisine": "Italian","caloriesPerServing": 300, "tags": ["Pizza","Italian"],"image": "https://cdn.dummyjson.com/recipe-images/1.webp","rating": 4.6,"mealType": ["Dinner"]},
    {"id": 2,"name": "Vegetarian Stir-Fry","ingredients": ["Tofu, cubed","Broccoli florets","Carrots, sliced","Bell peppers, sliced","Soy sauce","Ginger, minced","Garlic, minced","Sesame oil","Cooked rice for serving"],"instructions": ["In a wok, heat sesame oil over medium-high heat.","Add minced ginger and garlic, sauté until fragrant.","Add cubed tofu and stir-fry until golden brown.","Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.","Pour soy sauce over the stir-fry and toss to combine.","Serve over cooked rice."],"prepTimeMinutes": 15,"cookTimeMinutes": 20,"servings": 3,"difficulty": "Medium","cuisine": "Asian","caloriesPerServing": 250,"tags": ["Vegetarian","Stir-fry","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/2.webp","rating": 4.7,"mealType": ["Lunch"]},
    {"id": 3,"name": "Chocolate Chip Cookies","ingredients": ["All-purpose flour","Butter, softened","Brown sugar","White sugar","Eggs","Vanilla extract","Baking soda","Salt","Chocolate chips"],"instructions": ["Preheat the oven to 350°F (175°C).","In a bowl, cream together softened butter, brown sugar, and white sugar.","Beat in eggs one at a time, then stir in vanilla extract.","Combine flour, baking soda, and salt. Gradually add to the wet ingredients.","Fold in chocolate chips.","Drop rounded tablespoons of dough onto ungreased baking sheets.","Bake for 10-12 minutes or until edges are golden brown.","Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."],"prepTimeMinutes": 15,"cookTimeMinutes": 10,"servings": 24,"difficulty": "Easy","cuisine": "American","caloriesPerServing": 150,"tags": ["Cookies","Dessert","Baking"],"image": "https://cdn.dummyjson.com/recipe-images/3.webp","rating": 4.9,"mealType": ["Snack","Dessert"]},
    {"id": 4,"name": "Chicken Alfredo Pasta","ingredients": ["Fettuccine pasta","Chicken breast, sliced","Heavy cream","Parmesan cheese, grated","Garlic, minced","Butter","Salt and pepper to taste","Fresh parsley for garnish"],"instructions": ["Cook fettuccine pasta according to package instructions.","In a pan, sauté sliced chicken in butter until fully cooked.","Add minced garlic and cook until fragrant.","Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.","Season with salt and pepper to taste.","Combine the Alfredo sauce with cooked pasta.","Garnish with fresh parsley before serving."],"prepTimeMinutes": 15,"cookTimeMinutes": 20,"servings": 4,"difficulty": "Medium","cuisine": "Italian","caloriesPerServing": 500,"tags": ["Pasta","Chicken"],"image": "https://cdn.dummyjson.com/recipe-images/4.webp","rating": 4.9,"mealType": ["Lunch","Dinner"]},
    {"id": 5,"name": "Mango Salsa Chicken","ingredients": ["Chicken thighs","Mango, diced","Red onion, finely chopped","Cilantro, chopped","Lime juice","Jalapeño, minced","Salt and pepper to taste","Cooked rice for serving"],"instructions": ["Season chicken thighs with salt and pepper.","Grill or bake chicken until fully cooked.","In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.","Dice the cooked chicken and mix it with the mango salsa.","Serve over cooked rice."],"prepTimeMinutes": 15,"cookTimeMinutes": 25,"servings": 3,"difficulty": "Easy","cuisine": "Mexican","caloriesPerServing": 380,"tags": ["Chicken","Salsa"],"image": "https://cdn.dummyjson.com/recipe-images/5.webp","rating": 4.9,"mealType": ["Dinner"]},
    {"id": 6,"name": "Quinoa Salad with Avocado","ingredients": ["Quinoa, cooked","Avocado, diced","Cherry tomatoes, halved","Cucumber, diced","Red bell pepper, diced","Feta cheese, crumbled","Lemon vinaigrette dressing","Salt and pepper to taste"],"instructions": ["In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.","Drizzle with lemon vinaigrette dressing and toss to combine.","Season with salt and pepper to taste.","Chill in the refrigerator before serving."],"prepTimeMinutes": 20,"cookTimeMinutes": 15,"servings": 4,"difficulty": "Easy","cuisine": "Mediterranean","caloriesPerServing": 280,"tags": ["Salad","Quinoa"],"image": "https://cdn.dummyjson.com/recipe-images/6.webp","rating": 4.4,"mealType": ["Lunch","Side Dish"]},
    {"id": 7,"name": "Tomato Basil Bruschetta","ingredients": ["Baguette, sliced","Tomatoes, diced","Fresh basil, chopped","Garlic cloves, minced","Balsamic glaze","Olive oil","Salt and pepper to taste"],"instructions": ["Preheat the oven to 375°F (190°C).","Place baguette slices on a baking sheet and toast in the oven until golden brown.","In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.","Season with salt and pepper to taste.","Top each toasted baguette slice with the tomato-basil mixture.","Drizzle with balsamic glaze before serving."],"prepTimeMinutes": 15,"cookTimeMinutes": 10,"servings": 6,"difficulty": "Easy","cuisine": "Italian","caloriesPerServing": 120,"tags": ["Bruschetta","Italian"],"image": "https://cdn.dummyjson.com/recipe-images/7.webp","rating": 4.7,"mealType": ["Appetizer"]},
    {"id": 8,"name": "Beef and Broccoli Stir-Fry","ingredients": ["Beef sirloin, thinly sliced","Broccoli florets","Soy sauce","Oyster sauce","Sesame oil","Garlic, minced","Ginger, minced","Cornstarch","Cooked white rice for serving"],"instructions": ["In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce.","In a wok, stir-fry thinly sliced beef until browned. Remove from the wok.","Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.","Add the cooked beef back to the wok and pour the sauce over the mixture.","Stir until everything is coated and heated through.","Serve over cooked white rice."],"prepTimeMinutes": 20,"cookTimeMinutes": 15,"servings": 4,"difficulty": "Medium","cuisine": "Asian","caloriesPerServing": 380,"tags": ["Beef","Stir-fry","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/8.webp","rating": 4.7,"mealType": ["Dinner"]},
    {"id": 9,"name": "Caprese Salad","ingredients": ["Tomatoes, sliced","Fresh mozzarella cheese, sliced","Fresh basil leaves","Balsamic glaze","Extra virgin olive oil","Salt and pepper to taste"],"instructions": ["Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.","Tuck fresh basil leaves between the slices.","Drizzle with balsamic glaze and extra virgin olive oil.","Season with salt and pepper to taste.","Serve immediately as a refreshing salad."],"prepTimeMinutes": 10,"cookTimeMinutes": 0,"servings": 2,"difficulty": "Easy","cuisine": "Italian","caloriesPerServing": 200,"tags": ["Salad","Caprese"],"image": "https://cdn.dummyjson.com/recipe-images/9.webp","rating": 4.6,"mealType": ["Lunch"]},
    {"id": 10,"name": "Shrimp Scampi Pasta","ingredients": ["Linguine pasta","Shrimp, peeled and deveined","Garlic, minced","White wine","Lemon juice","Red pepper flakes","Fresh parsley, chopped","Salt and pepper to taste"],"instructions": ["Cook linguine pasta according to package instructions.","In a skillet, sauté minced garlic in olive oil until fragrant.","Add shrimp and cook until pink and opaque.","Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.","Season with red pepper flakes, salt, and pepper.","Toss cooked linguine in the shrimp scampi sauce.","Garnish with chopped fresh parsley before serving."],"prepTimeMinutes": 15,"cookTimeMinutes": 20,"servings": 3,"difficulty": "Medium","cuisine": "Italian","caloriesPerServing": 400,"tags": ["Pasta","Shrimp"],"image": "https://cdn.dummyjson.com/recipe-images/10.webp","rating": 4.3,"mealType": ["Dinner"]},
    {"id": 11,"name": "Chicken Biryani","ingredients": ["Basmati rice","Chicken, cut into pieces","Onions, thinly sliced","Tomatoes, chopped","Yogurt","Ginger-garlic paste","Biryani masala","Green chilies, sliced","Fresh coriander leaves","Mint leaves","Ghee","Salt to taste"],"instructions": ["Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.","In a pot, sauté sliced onions until golden brown. Remove half for later use.","Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.","Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.","Cover and cook on low heat until the rice is fully cooked and aromatic.","Serve hot, garnished with additional coriander and mint leaves."],"prepTimeMinutes": 30,"cookTimeMinutes": 45,"servings": 6,"difficulty": "Medium","cuisine": "Pakistani","caloriesPerServing": 550,"tags": ["Biryani","Chicken","Main course","Indian","Pakistani","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/11.webp","rating": 5.0,"mealType": ["Lunch","Dinner"]},
    {"id": 12,"name": "Chicken Karahi","ingredients": ["Chicken, cut into pieces","Tomatoes, chopped","Green chilies, sliced","Ginger, julienned","Garlic, minced","Coriander powder","Cumin powder","Red chili powder","Garam masala","Cooking oil","Fresh coriander leaves","Salt to taste"],"instructions": ["In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.","Add chicken pieces and cook until browned on all sides.","Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.","Cover and simmer until the chicken is tender and the oil separates from the masala.","Garnish with fresh coriander leaves and serve hot with naan or rice."],"prepTimeMinutes": 20,"cookTimeMinutes": 30,"servings": 4,"difficulty": "Easy","cuisine": "Pakistani","caloriesPerServing": 420,"tags": ["Chicken","Karahi","Main course","Indian","Pakistani","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/12.webp","rating": 4.8,"mealType": ["Lunch","Dinner"]},
    {"id": 13,"name": "Aloo Keema","ingredients": ["Ground beef","Potatoes, peeled and diced","Onions, finely chopped","Tomatoes, chopped","Ginger-garlic paste","Cumin powder","Coriander powder","Turmeric powder","Red chili powder","Cooking oil","Fresh coriander leaves","Salt to taste"],"instructions": ["In a pan, heat cooking oil and sauté chopped onions until golden brown.","Add ginger-garlic paste and sauté until fragrant.","Add ground beef and cook until browned. Drain excess oil if needed.","Add diced potatoes, chopped tomatoes, and spices. Mix well.","Cover and simmer until the potatoes are tender and the masala is well-cooked.","Garnish with fresh coriander leaves and serve hot with naan or rice."],"prepTimeMinutes": 25,"cookTimeMinutes": 35,"servings": 5,"difficulty": "Medium","cuisine": "Pakistani","caloriesPerServing": 380,"tags": ["Keema","Potatoes","Main course","Pakistani","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/13.webp","rating": 4.6,"mealType": ["Lunch","Dinner"]},
    {"id": 14, "name": "Chapli Kebabs","ingredients": ["Ground beef","Onions, finely chopped","Tomatoes, finely chopped","Green chilies, chopped","Coriander leaves, chopped","Pomegranate seeds","Ginger-garlic paste","Cumin powder","Coriander powder","Red chili powder","Egg","Cooking oil","Salt to taste"],"instructions": ["In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.","Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.","Add an egg to bind the mixture and form into round flat kebabs.","Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.","Serve hot with naan or mint chutney."],"prepTimeMinutes": 30,"cookTimeMinutes": 20,"servings": 4,"difficulty": "Medium","cuisine": "Pakistani","caloriesPerServing": 320,"tags": ["Kebabs","Beef","Indian","Pakistani","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/14.webp","rating": 4.7,"mealType": ["Lunch","Dinner","Snacks"]},
    {"id": 15,"name": "Saag Spinach with Makki di Roti","ingredients": ["Mustard greens, washed and chopped","Spinach, washed and chopped","Cornmeal (makki ka atta)","Onions, finely chopped","Green chilies, chopped","Ginger, grated","Ghee","Salt to taste"],"instructions": ["Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.","In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.","Add the greens paste and cook until it thickens.","Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).","Cook the rotis on a griddle until golden brown.","Serve hot saag with makki di roti and a dollop of ghee."],"prepTimeMinutes": 40,"cookTimeMinutes": 30,"servings": 3,"difficulty": "Medium","cuisine": "Pakistani","caloriesPerServing": 280,"tags": ["Saag","Roti","Main course","Indian","Pakistani","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/15.webp","rating": 4.3,"mealType": ["Breakfast","Lunch","Dinner"]},
    {"id": 16,"name": "Japanese Ramen Soup","ingredients": ["Ramen noodles","Chicken broth","Soy sauce","Mirin","Sesame oil","Shiitake mushrooms, sliced","Bok choy, chopped","Green onions, sliced","Soft-boiled eggs","Grilled chicken slices","Norwegian seaweed (nori)"],"instructions": ["Cook ramen noodles according to package instructions and set aside.","In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.","Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.","Divide the cooked noodles into serving bowls and ladle the hot broth over them.","Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.","Serve hot and enjoy the authentic Japanese ramen!"],"prepTimeMinutes": 20,"cookTimeMinutes": 25,"servings": 2,"difficulty": "Medium","cuisine": "Japanese","caloriesPerServing": 480,"tags": ["Ramen","Japanese","Soup","Asian"],"image": "https://cdn.dummyjson.com/recipe-images/16.webp","rating": 4.9,"mealType": ["Dinner"]},
    {"id": 17,"name": "Moroccan Chickpea Tagine","ingredients": ["Chickpeas, cooked","Tomatoes, chopped","Carrots, diced","Onions, finely chopped","Garlic, minced","Cumin","Coriander","Cinnamon","Paprika","Vegetable broth","Olives","Fresh cilantro, chopped"],"instructions": ["In a tagine or large pot, sauté chopped onions and minced garlic until softened.","Add diced carrots, chopped tomatoes, and cooked chickpeas.","Season with cumin, coriander, cinnamon, and paprika. Stir to coat.","Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.","Stir in olives and garnish with fresh cilantro before serving.","Serve this flavorful Moroccan dish with couscous or crusty bread."],"prepTimeMinutes": 15,"cookTimeMinutes": 30,"servings": 4,"difficulty": "Easy","cuisine": "Moroccan","caloriesPerServing": 320,"tags": ["Tagine","Chickpea","Moroccan"],"image": "https://cdn.dummyjson.com/recipe-images/17.webp","rating": 4.5,"mealType": ["Dinner"]},
    {"id": 18,"name": "Korean Bibimbap","ingredients": ["Cooked white rice","Beef bulgogi (marinated and grilled beef slices)","Carrots, julienned and sautéed","Spinach, blanched and seasoned","Zucchini, sliced and grilled","Bean sprouts, blanched","Fried egg","Gochujang (Korean red pepper paste)","Sesame oil","Toasted sesame seeds"],"instructions": ["Arrange cooked white rice in a bowl.","Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.","Place a fried egg on top and drizzle with gochujang and sesame oil.","Sprinkle with toasted sesame seeds before serving.","Mix everything together before enjoying this delicious Korean bibimbap!","Feel free to customize with additional vegetables or protein."],"prepTimeMinutes": 30,"cookTimeMinutes": 20,"servings": 2,"difficulty": "Medium","cuisine": "Korean","caloriesPerServing": 550,"tags": ["Bibimbap","Korean","Rice"],"image": "https://cdn.dummyjson.com/recipe-images/18.webp","rating": 4.9, "mealType": ["Dinner"]},
    {"id": 19,"name": "Greek Moussaka","ingredients": ["Eggplants, sliced","Ground lamb or beef","Onions, finely chopped","Garlic, minced","Tomatoes, crushed","Red wine","Cinnamon","Allspice","Nutmeg","Olive oil","Milk","Flour","Parmesan cheese","Egg yolks"],"instructions": ["Preheat oven to 375°F (190°C).","Sauté sliced eggplants in olive oil until browned. Set aside.","In the same pan, cook chopped onions and minced garlic until softened.","Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.","In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.","Remove from heat and stir in Parmesan cheese and egg yolks.","In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.","Bake for 40-45 minutes until golden brown. Let it cool before slicing.","Serve slices of moussaka warm and enjoy this Greek classic!"],"prepTimeMinutes": 45,"cookTimeMinutes": 45,"servings": 6,"difficulty": "Medium","cuisine": "Greek","caloriesPerServing": 420,"tags": ["Moussaka","Greek"],"image": "https://cdn.dummyjson.com/recipe-images/19.webp","rating": 4.3,"mealType": ["Dinner"]},
    {"id": 20,"name": "Butter Chicken Murgh Makhani","ingredients": ["Chicken thighs, boneless and skinless","Yogurt","Ginger-garlic paste","Garam masala","Kashmiri red chili powder","Tomato puree","Butter","Heavy cream","Kasuri methi (dried fenugreek leaves)","Sugar","Salt to taste"],"instructions": ["Marinate chicken thighs in a mixture of yogurt, ginger-garlic paste, garam masala, and Kashmiri red chili powder.","In a pan, melt butter and sauté the marinated chicken until browned.","Add tomato puree and cook until the oil separates. Stir in heavy cream.","Sprinkle kasuri methi, sugar, and salt. Simmer until the chicken is fully cooked.","Serve this creamy butter chicken over rice or with naan for an authentic Pakistani/Indian experience."],"prepTimeMinutes": 30,"cookTimeMinutes": 25,"servings": 4,"difficulty": "Medium","cuisine": "Pakistani","caloriesPerServing": 480,"tags": ["Butter chicken","Curry","Indian","Pakistani","Asian"],"userId": 138,"image": "https://cdn.dummyjson.com/recipe-images/20.webp","rating": 4.5,"reviewCount": 44,"mealType": ["Dinner"]}

];

// Inicializando as vendas com 0
var vendasAtuais = {};
itens.forEach(function(item) {
    vendasAtuais[item.name] = 0;
});

// Atualiza as vendas com incrementos aleatórios
vendasAtuais = gerarVendasCrescentes(vendasAtuais, itens);

// Reset diário das vendas
vendasAtuais = resetarVendasNoFinalDoDia(vendasAtuais, itens);

// Determina o produto mais vendido
var topSellingProduct = itens.reduce(function(prev, curr) {
    return vendasAtuais[prev.name] > vendasAtuais[curr.name] ? prev : curr;
});

// Estrutura os dados das stores
var storesData = stores.map(function(store, index) {
    return {
        "name": store.name,
        "sales": vendasAtuais[itens[index].name],
        "bestSellingProductStore": itens[index].name
    };
});

// Estruturar dados no formato solicitado
var data = [
    {
        "totalSales": vendasAtuais["Classic Margherita Pizza"] + vendasAtuais["Vegetarian Stir-Fry"],
        "topSellingProduct": {
            "name": topSellingProduct.name,
            "sales": vendasAtuais[topSellingProduct.name]
        },
        "store": storesData
    },
    {
        "items": itens.map(function(item) {
            return {
                "id": item.id,
                "name": item.name,
                "ingredients": item.ingredients,
                "instructions": item.instructions,
                "prepTimeMinutes": item.prepTimeMinutes,
                "cookTimeMinutes": item.cookTimeMinutes,
                "servings": item.servings,
                "difficulty": item.difficulty,
                "cuisine": item.cuisine,
                "caloriesPerServing": item.caloriesPerServing,
                "rating": item.rating,                                                                
                "cuisine": item.cuisine,
                "tags": item.tags,
                "mealType": item.mealType,                
                "sales": vendasAtuais[item.name]
            };
        })
    }
];

// Retornar a estrutura em formato JSON
return JSON.stringify(data, null, 2);