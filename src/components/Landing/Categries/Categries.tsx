import { FC } from "react";
import CardCategorie from "./CardCategorie/CardCategorie";
import categorie from "/public/categorie.png"
import categorie1 from "/public/categorie (1).png"
import categorie2 from "/public/categorie (2).png"
import categorie3 from "/public/categorie (3).png"
import categorie4 from "/public/categorie (4).png"
import categorie5 from "/public/categorie (5).png"

const Categries : FC = () => {
    return (
        <div className="flex items-center justify-between">
            <CardCategorie name="Accessories" img={categorie} />
            <CardCategorie name="Camera" img={categorie1} />
            <CardCategorie name="Laptop" img={categorie2} />
            <CardCategorie name="Smart Phone" img={categorie3} />
            <CardCategorie name="Gaming" img={categorie4} />
            <CardCategorie name="Smart Watch" img={categorie5} />
        </div>
    );
}

export default Categries;