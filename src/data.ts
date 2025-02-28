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
    url: "/public/images/scrambled.jpg",
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
    url: "/public/images/poached.jpg",
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
];
