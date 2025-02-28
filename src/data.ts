export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  instructions: string[];
}

export const mockedPhotos: Photo[] = [
  {
    id: "1",
    url: "https://www.livingonadime.com/wp-content/uploads/easy-scrambled-eggs-recipe-tr.jpg",
    title: "Scrambled Eggs",
    description:
      "Scrambled eggs are a classic breakfast dish that is quick and easy to prepare. The key to perfect scrambled eggs is cooking them slowly over low heat to achieve a soft, creamy texture. You can customize them by adding cheese, herbs, or even a splash of cream for extra richness.",
    instructions: [
      "1. Crack the eggs into a bowl and whisk them lightly with a fork or whisk. Add milk or cream if you prefer a creamier texture.",
      "2. Melt the butter in a pan over low heat. Pour in the egg mixture.",
      "3. Gently stir with a wooden spoon or spatula as the eggs slowly set. Lift and fold rather than stirring too much.",
      "4. Remove from heat when the eggs are still slightly creamy, as they will continue to cook from residual heat. Season with salt and pepper.",
      "5. Serve immediately, preferably with toast, vegetables, or your favorite breakfast sides. ",
    ],
  },
  {
    id: "2",
    url: "https://thefrizzledleek.com/wp-content/uploads/2024/03/air-fryer-poached-eggs-featured-image.jpg",
    title: "Poached Eggs",
    description:
      "Poached eggs are a simple yet elegant way to enjoy eggs. Cooking them in gently simmering water results in a soft, delicate texture with a runny yolk inside. They are perfect on toast, salads, or classic dishes like Eggs Benedict.",
    instructions: [
      "1. Fill a saucepan with water (about 3 inches deep) and bring it to a gentle simmer. Add vinegar if using.",
      "2. Crack the egg into a small bowl or cup.",
      "3. Stir the water to create a gentle whirlpool, then carefully slide the egg into the center.",
      "4. Let the egg cook undisturbed for about 3–4 minutes until the whites are set but the yolk is still soft.",
      "5. Use a slotted spoon to remove the egg and place it on a paper towel to drain excess water.",
      "6.  Season with salt and pepper and serve immediately on toast, salads, or with avocado.",
    ],
  },
  {
    id: "3",
    url: "https://www.australianeggs.org.au/assets/Uploads/Daens-Kitchen_Omelette__ScaleWidthWzEyMDBd.jpg",
    title: "Classic Omelette",
    description:
      "An omelette is a classic egg dish that is quick and easy to prepare. It’s a versatile meal that can be customized with various fillings like cheese, vegetables, and meats. Perfect for breakfast, lunch, or a light dinner!",
    instructions: [
      "1. Crack 2-3 eggs into a bowl and whisk them with a pinch of salt and pepper.",
      "2. Heat a non-stick pan over medium heat and add a teaspoon of butter or oil.",
      "3. Pour the eggs into the pan and let them cook undisturbed for a few seconds.",
      "4. Use a spatula to gently push the edges toward the center while tilting the pan to distribute the uncooked eggs.",
      "5. When the eggs are mostly set but still slightly runny on top, add any desired fillings (cheese, ham, mushrooms, etc.).",
      "6. Fold the omelette in half and let it cook for another 30 seconds until fully set.",
      "7. Slide it onto a plate and enjoy!",
    ],
  },
];
