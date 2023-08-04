import React, { useContext, useRef, useState } from 'react';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import Cart from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLinkSubmenu,
  SLinkSubmenuItem,
  SLogo,
  Tooltip,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from './styles';
import styled from 'styled-components';
import Submenu from './Submenu';
import { IoIosArrowDown } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { Drawer } from '@mui/material';
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from 'react-icons/ai';
import { MdLogout, MdOutlineAnalytics } from 'react-icons/md';
import { BsPeople } from 'react-icons/bs';
import { ThemeContext } from '../../App';
import { useLocation } from 'react-router-dom';
const Sidebar = () => {
  const searchRef = useRef(null);
  const { setTheme, theme } = useContext(ThemeContext);
  const { pathname } = useLocation();
  const [submenuOpen, setSubmenuOpen] = useState([]);
  const [hover, setHover] = useState(false);

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSubMenuToggle = index => {
    setSubmenuOpen(prevOpen => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !updatedOpen[index];
      return updatedOpen;
    });
  };
  const SidebarDrawer=()=>{
    return (<>
      <Drawer
            anchor={sidebarOpen}
            open={sidebarOpen}
            onClose={setSidebarOpen(false)}
          >
              <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => {
            setSidebarOpen(p => !p);
            setHover(false);
          }}
        >
          <div
            style={{ display: 'inline-block', backgroundColor: 'transparent',}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {sidebarOpen ? (
              <RxDoubleArrowLeft size={22} />
            ) : hover ? (
              <RxDoubleArrowRight size={22} />
            ) : (
              <CgMenuRight size={25} />
            )}
          </div>
          
        </SSidebarButton>
       
      </>
      {sidebarOpen ? (
        <>
          <span style={{ marginLeft: '30px'}}>Logo</span>
        </>
      ) : (
        <br />
      )}
      <SDivider />

      {linksArray.map(({ icon, label, notification, to, submenu, index }) => (
        <>
          <SLinkContainer isActive={pathname === to}>
            {submenu.length === 0 && (
              <SLink
                to={to}
                style={!sidebarOpen ? { width: 'fit-content' } : {}}
              >
                <SLinkIcon>{icon}</SLinkIcon>
                {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
              </SLink>
            )}
          </SLinkContainer>
          {submenu.length != 0 && (
            <Submenu
              title={label}
              icon={icon}
              items={submenu}
              pathname={pathname}
              to={to}
              sidebarOpen={sidebarOpen}
            />
          )}
        </>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {/* <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme> */}
    </SSidebar>
          </Drawer>
    </>)
  }

  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => {
            setSidebarOpen(p => !p);
            setHover(false);
          }}
        >
          <div
            style={{ display: 'inline-block', backgroundColor: 'transparent',}}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {sidebarOpen ? (
              <RxDoubleArrowLeft size={22} />
            ) : hover ? (
              <RxDoubleArrowRight size={22} />
            ) : (
              <CgMenuRight size={25} />
            )}
          </div>
          
        </SSidebarButton>
       {sidebarOpen&&(
        SidebarDrawer()
       )}
      </>
      {sidebarOpen ? (
        <>
          <span style={{ marginLeft: '30px'}}>Logo</span>
        </>
      ) : (
        <br />
      )}
      <SDivider />

      {linksArray.map(({ icon, label, notification, to, submenu, index }) => (
        <>
          <SLinkContainer isActive={pathname === to}>
            {submenu.length === 0 && (
              <SLink
                to={to}
                style={!sidebarOpen ? { width: 'fit-content' } : {}}
              >
                <SLinkIcon>{icon}</SLinkIcon>
                {/* {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>} */}
              </SLink>
            )}
          </SLinkContainer>
          {submenu.length != 0 && (
            <Submenu
              title={label}
              icon={icon}
              items={submenu}
              pathname={pathname}
              to={to}
              // sidebarOpen={sidebarOpen}
            />
          )}
        </>
      ))}
      <SDivider />
      {secondaryLinksArray.map(({ icon, label, to }) => (
        <SLinkContainer key={label}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {/* {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>} */}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {/* <STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme> */}
    </SSidebar>
  );
};

const linksArray = [
  {
    label: 'Home',
    icon: <AiOutlineHome />,
    to: '/',
    submenu: [],
  },
  {
    label: 'Catalog',
    icon: <MdOutlineAnalytics />,
    to: '/statistics',
    submenu: [
      {
        label: 'Products',
        name: 'Products',
        icon: <CategoryOutlinedIcon />,
        to: '/catalog/products',
      },
      {
        label: 'PriceList',
        name: 'PriceList',
        icon: <LocalOfferOutlinedIcon />,
        to: '/catalog/pricelist',
      },
      {
        label: 'Cart',
        name: 'Cart',
        icon: <Cart />,
        to: '/catalog/cart',
      },
    ],
  },
  {
    label: 'Customers',
    icon: <BsPeople />,
    to: '/customers',
    submenu: [],
  },
  {
    label: 'Diagrams',
    icon: <AiOutlineApartment />,
    to: '/diagrams',
    submenu: [],
  },
];

const secondaryLinksArray = [
  {
    label: 'Logout',
    icon: <MdLogout />,
    to: '/auth/login',
  },
];

export default Sidebar;
