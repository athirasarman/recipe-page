import React from "react";
import styles from "./recipe-page.module.css";
import BannerImage from "../assets/images/image-omelette.jpeg";

const RecipePage = () => {
  return (
    <div className={styles.container}>
      <img src={BannerImage} alt="Banner" className={styles.bannerImage} />
      <div className={styles.description}>
        <h1 className={styles.mainHeading}>Simple Omelette Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <section className={styles.preparationcard}>
          <h3 className={styles.preparationheading}>Preparation time</h3>
          <ul>
            <li className={styles.listitem}>
              <span className={styles.listitemHeading}>Total:</span>{" "}
              <span className={styles.listitemText}>
                Approximately 10 minutes
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.listitemHeading}>Preparation:</span>{" "}
              <span className={styles.listitemText}>5 minutes</span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.listitemHeading}>Cooking:</span>{" "}
              <span className={styles.listitemText}>5 minutes</span>
            </li>
          </ul>
        </section>
        <section className={styles.ingredients}>
          <h2 className={styles.mainHeading + " " + styles.sectionsHeading}>
            Ingredients
          </h2>
          <ul>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>2-3 large eggs</span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>Salt, to taste</span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>Pepper, to taste</span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
                1tablespoon of butter or oil
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </span>
            </li>
          </ul>
          <div class={styles.divider}></div>
        </section>
        <section>
          <h2 className={styles.mainHeading + " " + styles.sectionsHeading}>
            Instructions
          </h2>
          <ol>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and
                pepper until they are well mixed. You can add a tablespoon of
                water or milk for a fluffier texture.{" "}
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Heat the pan:</span> Place a non-stick frying pan over medium heat and
                add butter or oil.
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Cook the omelette:</span> Once the butter is melted and bubbling, pour
                in the eggs. Tilt the pan to ensure the eggs evenly coat the
                surface.
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Add fillings (optional):</span> When the eggs begin to set at the edges
                but are still slightly runny in the middle, sprinkle your chosen
                fillings over one half of the omelette.
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Fold and serve:</span> As the omelette continues to cook, carefully
                lift one edge and fold it over the fillings. Let it cook for
                another minute, then slide it onto a plate.
              </span>
            </li>
            <li className={styles.listitem}>
              <span className={styles.ingredientsText}>
              <span className={styles.listitemHeading}>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
          <div class={styles.divider}></div>
        </section>
        Nutrition The table below shows nutritional values per serving without
        the additional fillings. Calories 277kcal Carbs 0g Protein 20g Fat 22g
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
