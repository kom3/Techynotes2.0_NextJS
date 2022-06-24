import styles from "./styles.module.scss";


export default function Header(props) {
    return <div>
        <div className={`${styles.header_wrpr}`}>
            <div>Home</div>
            <div>Categories</div>
            <div>Bookmarks</div>
            <div>What's new?</div>
            <div>About us</div>
        </div>
        {props.children}
    </div>
}