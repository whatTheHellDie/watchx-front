import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { warning } from 'web/src/slices/MessagesSlice';
import './index.css';
export const MenuListConfig: any[] = [
  ['Home', '/'],
  ['Product', 'javascript:void(0);'],
  ['Technology', '/Technology'],
  ['Docs', 'https://watchxnetwork.gitbook.io/watchx/', undefined, true],
];
import styles from './index.module.less';

import { useEffect, useState } from 'react';
export default function OverviewMenu({ close }: any) {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const dispatch = useDispatch();
  return (
    <Box>
      <List>
        <div className={styles.closeBtnWrap}>
          <img
            className={styles.closeBtn}
            src="/assets/upload/close.png"
            onClick={() => close()}
          ></img>
        </div>
        {MenuListConfig.map(([text, href, list, isBlank], index) => (
          <Box sx={{}}>
            <ListItem
              sx={{
                justifyContent: 'center',
              }}
              key={text}
              disablePadding
            >
              <a
                href={href}
                target={!isBlank ? '_self' : '_blank'}
                onClick={() => {
                  if (index === 1) {
                    setActive(!active);
                  } else if (index === 4) {
                    setActive1(!active1);
                  }
                }}
              >
                <ListItemButton>
                  <ListItemText
                    sx={{
                      color: '#fff',
                      pl: '151px',
                    }}
                    primary={text}
                  />
                </ListItemButton>
              </a>
            </ListItem>
            {index === 1 ? (
              <Collapse in={true} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  className={`${styles.div} ${active ? styles.active : ''}`}
                >
                  <a href="/Product">
                    <ListItemButton sx={{ padding: 0, color: '#fff' }}>
                      <ListItemText
                        primary={'Founder'}
                        sx={{
                          pl: '163px',
                          color: '#fff',
                        }}
                      />
                    </ListItemButton>
                  </a>
                  <a href="/Fusion">
                    <ListItemButton sx={{ padding: 0, color: '#fff' }}>
                      <ListItemText
                        primary={'Fusion'}
                        sx={{
                          pl: '163px',
                          color: '#fff',
                        }}
                      />
                    </ListItemButton>
                  </a>
                </List>
              </Collapse>
            ) : (
              ''
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
}
