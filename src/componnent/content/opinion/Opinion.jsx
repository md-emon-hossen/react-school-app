import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import styles from "./opinion.module.css";

export default function Opinion({ name, job, discrip, img }) {
    return (
        <div className={styles.opinion}>
            <div className={styles.profile}>
                <div className={styles.profiileContent}>
                    <div className={styles.avatar}>
                        <img src={img} alt="profile" />
                    </div>
                    <div className={styles.avatarText}>
                        <h3>{name}</h3>
                        <p>{job}</p>
                    </div>
                    <div className={styles.socialLink}>
                        <div className={`${styles.socail}`} >
                            <FaFacebookF className={styles.icons} />
                        </div>
                        <div className={`${styles.socail}`}>
                            <AiOutlineTwitter className={styles.icons} />
                        </div>
                    </div>
                </div >
            </div >
            <div className={styles.profileOpiniion}>{discrip}</div>
        </div >
    )
}
