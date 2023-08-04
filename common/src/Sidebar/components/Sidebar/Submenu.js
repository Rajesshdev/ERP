import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
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
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from './styles';

const SSubmenuItems = styled.div`
  display: ${({ isCollapsed }) => (isCollapsed ? 'none' : 'block')};
`;

const SSubmenuItem = styled(Link)`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : '#017AFF'};
  color: ${({ theme, isActive }) => (!isActive ? `black` : 'white')};
  border-radius: 6px;
  display: flex;
  padding: 0px 8px;
  text-decoration: none;
`;

// Collapsible submenu component
const CollapsibleSubmenu = ({
  title,
  icon,
  items,
  to,
  sidebarOpen,
  pathname,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <SLink style={!sidebarOpen ? { width: 'fit-content' } : {}}>
        <SLinkIcon onClick={handleToggleCollapse}>{icon}</SLinkIcon>
        {Boolean(sidebarOpen) && (
          <SLinkLabel onClick={handleToggleCollapse}>{title}</SLinkLabel>
        )}
        {isCollapsed ? (
          <MdOutlineKeyboardArrowDown
            size={20}
            onClick={handleToggleCollapse}
          />
        ) : (
          <MdOutlineKeyboardArrowUp size={20} onClick={handleToggleCollapse} />
        )}
      </SLink>
      <SSubmenuItems isCollapsed={isCollapsed}>
        {items.map((item, index) => (
          <>
            <SLinkContainer isActive={pathname === item.to}>
              <SLink
                to={item.to}
                style={!sidebarOpen ? { width: 'fit-content' } : {}}
              >
                <SSubmenuItem
                  key={index}
                  to={item.to}
                  isActive={pathname === item.to}
                >
                  <SLinkIcon style={{ marginLeft: '-8px' }}>
                    {item.icon}
                  </SLinkIcon>
                  {Boolean(sidebarOpen) && (
                    <SLinkLabel style={{ marginTop: '8px' }}>
                      {item.name}
                    </SLinkLabel>
                  )}
                </SSubmenuItem>
              </SLink>
            </SLinkContainer>
          </>
        ))}
      </SSubmenuItems>
    </>
  );
};

export default CollapsibleSubmenu;
