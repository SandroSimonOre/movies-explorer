import { NavLink } from "react-router-dom";
import {MenuItem} from './MenuItem';
import { About } from "./About";
import { Modal } from '../components/Modal';
import { useModal } from "../hooks/useModal";
import styles from '../styles/Sidebar.module.scss'

export const Sidebar = () => {
    
    const [isOpen, openModal, closeModal] = useModal();

    const handleClick = () => {
        openModal();
    }

    const menuItems = [
        {title: 'Discover' , to: '/discover', url: 'https://cdn-icons-png.flaticon.com/512/3649/3649527.png' },
        {title: 'Search' , to: '/search', url: 'https://cdn-icons-png.flaticon.com/512/1055/1055645.png' },
        {title: 'Trending' , to: '/trending', url: 'https://cdn-icons-png.flaticon.com/512/3121/3121768.png' },
        {title: 'Favorites' , to: '/favorites', url: 'https://cdn-icons-png.flaticon.com/512/3507/3507694.png' },
    ]

    const activeStyle = {
        borderRadius: "0.5rem",
        borderStyle: "solid",
        borderWidth: "0.1px"
    };

    return (
        
        <div id='sidebar' className={styles.sidebar}>
            
            <div className={styles.menuContainer}>

                {
                    menuItems.map( (item, i) => 
                    <NavLink 
                        key={i} 
                        to = {item.to} 
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        <div className={styles.menuItemContainer} >
                            <MenuItem title = {item.title} url = {item.url} />
                        </div>
                    </NavLink>)
                }
 
            </div>

            <button className={styles.aboutButton} onClick={handleClick}>About this project</button>

            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >   
                <About />
            </Modal>

        </div>
    )
}
