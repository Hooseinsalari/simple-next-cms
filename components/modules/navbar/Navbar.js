import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState(router.query.q || "");

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${search}`);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_search}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="جستجو کنید...."
        />
        <button className={styles.navbar_search_icon} onClick={searchHandler}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className={styles.navbar_user_avatar}>
        <img src="/images/avatar/avatar.jpg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
