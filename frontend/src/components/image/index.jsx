import styles from "./styles.module.css";

export default function Image({ image, customStyle }) {
    return (
        <>
            <img src={image} alt="image" className={`${styles.image} ${styles.newClass}`} style={customStyle} />
        </>
    )
}