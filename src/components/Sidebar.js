import { NavLink } from "react-router-dom";
import {MenuItem} from './MenuItem';
import { About } from "./About";
import { Modal } from '../components/Modal';
import { useModal } from "../hooks/useModal";
import './Sidebar.scss'

export const Sidebar = () => {
    
    const [isOpen, openModal, closeModal] = useModal();

    const handleClick = () => {
        openModal();
    }

    return (
        
        <div id='sidebar' className='sidebar'>
            
            <div className='menu-container'>

                <NavLink to = '/discover'>
                    <div className='menu-item-container'>
                        <MenuItem title = 'Discover' url = 'https://cdn-icons-png.flaticon.com/512/3649/3649527.png' />
                    </div>
                </NavLink>
                
                <NavLink to = '/search'>
                    <div className='menu-item-container'>
                        <MenuItem title = 'Search' url = 'https://cdn-icons-png.flaticon.com/512/1055/1055645.png' />
                    </div>
                </NavLink>

                <NavLink to = '/trending'>
                    <div className='menu-item-container'>
                        <MenuItem title = 'Trending' url = 'https://cdn-icons-png.flaticon.com/512/3121/3121768.png' />
                    </div>
                </NavLink>

                <NavLink to = '/favorites'>
                    <div className='menu-item-container'>
                            <MenuItem title = 'Favorites' url = 'https://cdn-icons-png.flaticon.com/512/3507/3507694.png' />
                    </div>
                </NavLink>

            </div>

            <button className="about-button" onClick={handleClick}>About this project</button>

            <Modal
                isOpen={isOpen}
                closeModal={closeModal}
            >   
                <About />
            </Modal>

        </div>
    )
}
