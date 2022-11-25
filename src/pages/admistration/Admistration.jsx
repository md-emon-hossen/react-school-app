import Opinion from "../../componnent/content/opinion/Opinion";
import Footer from "../../componnent/footer/Footer";
import Header from "../../componnent/header/Header";
import imgTwo from '../../img/IMG_20210912_174608_132-1.jpg';
import imgOne from "../../img/profile.jpg";
import styles from "./admistration.module.css";

export default function Admistration() {
    return (
        <div className={styles.admistrationsWrp}>
            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.admistration}>
                <Opinion name="Md Emon Hossen" job="SoftWere Engineer" img={imgOne} discrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos placeat? Laudantium quis tempore necessitatibus commodi nemo aut laboriosam odio? Eius amet non voluptates maiores sit labore earum ullam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt repudiandae saepe maxime, ullam deserunt ipsam velit illo excepturi autem rerum aut eveniet ratione, ab quisquam repellendus minus facere voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod asperiores tempore? Eveniet ab ipsam perferendis incidunt nesciunt earum alias quam! Molestiae quis consectetur dolore eos delectus iusto repellat est." />

                <Opinion name="Imran Hossen Jowel" job="Store Cakker" img={imgTwo} discrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos placeat? Laudantium quis tempore necessitatibus commodi nemo aut laboriosam odio? Eius amet non voluptates maiores sit labore earum ullam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt repudiandae saepe maxime, ullam deserunt ipsam velit illo excepturi autem rerum aut eveniet ratione, ab quisquam repellendus minus facere voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod asperiores tempore? Eveniet ab ipsam perferendis incidunt nesciunt earum alias quam! Molestiae quis consectetur dolore eos delectus iusto repellat est." />
            </div>

            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}
